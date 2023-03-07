<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Content;
use App\Models\Language;
use App\Models\RecordContent;
use App\Models\RecordLanguage;
use App\Models\StudyHour;
use Database\Seeders\LanguageSeeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class WebAppController extends Controller
{
    //
    public function index()
    {
        $contents = Content::select('content')->get();
        $languages = Language::select('language')->get();

        $today_hours = $this->getTodayTime();
        $month_hours = $this->getMonthTime();
        $total_hours = $this->getTotalTime();
        //point:ルーティングするには、同じアドレスがあると上書きされてしまう⇒必要な関数を作って、indexの中ですべて呼び出す！
        // dd($contents);
        // dd($languages);
        return view('webapp',compact('contents','languages','today_hours','month_hours','total_hours'));
    }
    
    public function getTodayTime()
    {
        $today = Carbon::now()->format('Y-m-d');
        return StudyHour::selectRaw('SUM(hours) AS hour_today')
        ->where('date',$today)
        ->groupBy('date')
        ->first();
        // dd($today_hours);
    }
    public function getMonthTime()
    {
        $today = Carbon::now()->format('Y-m-d');
        $month_first_day = Carbon::now()->format('Y-m-01');
        return StudyHour::selectRaw('SUM(hours) AS hour_month')
        ->whereBetween('date',[$month_first_day,$today])
        ->first();
        // dd($month_hours);
    }
    public function getTotalTime()
    {
        return  StudyHour::selectRaw('SUM(hours) AS hour_total')
        ->first();
        //getメソッドを使っているので、複数のデータを取得してくる可能性があります。->firstで値一つだけ
        // dd($total_hours);
    }
}
