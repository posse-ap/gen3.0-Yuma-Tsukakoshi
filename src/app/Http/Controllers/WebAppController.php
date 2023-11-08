<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Content;
use App\Models\Language;
use App\Models\RecordContent;
use App\Models\RecordLanguage;
use App\Models\StudyHour;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class WebAppController extends Controller
{
    //

    public function index()
    {
        $study_hour = new StudyHour;
        $contents = Content::all();
        $languages = Language::all();

        $today_hours = $study_hour->getTodayTime();
        $month_hours = $study_hour->getMonthTime();
        $total_hours = $study_hour->getTotalTime();
        //point:ルーティングするには、同じアドレスがあると上書きされてしまう⇒必要な関数を作って、indexの中ですべて呼び出す！
        // dd($contents);
        // dd($languages);
        return view('webapp',compact('contents','languages','today_hours','month_hours','total_hours'));
    }

    public function store(Request $request)
    {
        $user_id = Auth::id();
        
        $study_data = [
            'user_id' => $user_id,
            'date' => $request->date,
            'hours' => $request->study_hour,
        ];
        $study_hour = StudyHour::create($study_data);
        // 取得した最後のidをrecord_idに入れる
        $record_id = $study_hour->id;

        $contents = $request->contents;
        $languages = $request->languages;
        dd($contents,$languages);
        
        foreach($contents as $content){
            $record_content = [
                'user_id' => $user_id,
                'record_id' => $record_id,
                'content_id' => $content,
            ];
            RecordContent::create($record_content);
        }
        
        foreach($languages as $language){
            $record_language = [
                'user_id' => $user_id,
                'record_id' => $record_id,
                'language_id' => $language,
            ];
            RecordLanguage::create($record_language);
        }

        $request->session()->flash('message', '投稿しました');
        return back();
    }


    public function getBarData()
    {
        $study_hour = new StudyHour;
        $result = $study_hour->getMonthStudyArray();
        return $result;
    }

    public function getPie1Data()
    {
        $language_hour = new RecordLanguage;
        $result = $language_hour->GetRecordLanguage();
        return $result;
    }
    public function getPie2Data()
    {
        $content_hour = new RecordContent;
        $result = $content_hour->GetRecordContent();
        return $result;
    }

}
