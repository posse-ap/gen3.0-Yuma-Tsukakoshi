<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;

class StudyHour extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $fillable = [
        'date',
        'hours',
        'user_id',
    ];

    protected $guarded = [
        'id',
    ];

    protected $dates = [
        'deleted_at',
    ];

    // public function user_study_hour_relation()
    // {
    //     return $this->belongsTo(User::class);
    // }

    public function study_hours()
    {
        return $this;
    }
    public function getTodayTime()
    {
        $today = Carbon::now()->format('Y-m-d');   
        return $this->selectRaw('SUM(hours) AS hour_today')
        ->where('date',$today)
        ->groupBy('user_id')
        ->groupBy('date')
        ->having('user_id', auth()->id())
        ->first();
        // dd($today_hours);
    }

    public function getMonthTime()
    {
        $today = Carbon::now()->format('Y-m-d');
        $month_first_day = Carbon::now()->format('Y-m-01');
        return $this->selectRaw('SUM(hours) AS hour_month')
        ->whereBetween('date',[$month_first_day,$today])
        ->groupBy('user_id')
        ->having('user_id' ,auth()->id())
        ->first();
        // dd($month_hours);
    }
    public function getTotalTime()
    {
        return $this->selectRaw('SUM(hours) AS hour_total')
        ->groupBy('user_id')
        ->having('user_id', auth()->id())
        ->first();
        //getメソッドを使っているので、複数のデータを取得してくる可能性があり。->firstで値一つだけ
        // dd($total_hours);
    }

    public function getMonthStudyArray()
    {
        $month_first_day = Carbon::now()->startOfMonth()->toDateString();
        $month_last_day = Carbon::now()->endOfMonth()->toDateString();
        $bar_data = $this
        ->selectRaw('date')
        ->selectRaw('SUM(hours) AS hours')
        ->whereBetween('date',[$month_first_day,$month_last_day])
        ->groupBy('user_id')
        ->groupBy('date')
        ->having('user_id', auth()->id())
        ->get();
        return $bar_data;
    }

}
