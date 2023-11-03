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
        $contents = Content::select('content')->get();
        $languages = Language::select('language')->get();

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
        /*
        保存データ
        content : コンテンツ 配列扱いにしたい
        language: 言語 配列扱いにしたい
        record_id: 最後のidを取得して、+1する ⇒ 変数に入れて配列すべてその数字で更新する方針で
        content_id: keyを取得して対応するコンテンツを入れる
        */
        $study_data = [
            'user_id' => Auth::id(),
            'date' => $request->study_day,
            'hours' => $request->study_hour,
        ];
        $study_hour = StudyHour::create($study_data);

        $record_id = $study_hour->id;

        // 取得したコンテンツ分、record_contentsテーブルに保存する繰り返し処理書きたい
        


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
