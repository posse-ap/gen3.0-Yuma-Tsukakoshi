<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class RecordContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'record_id',
        'user_id',
        'content_id',
    ];

    protected $guarded = [
        'id',
    ];

    public function record_content()
    {
        return $this;
    }
    public function GetRecordContent(){
        $origin2 = $this 
        ->selectRaw('origin2.record_id')
        ->selectRaw('COUNT(record_id) AS record_count')
        ->from('record_contents AS origin2')
        ->groupBy('record_id');

        // 学習時間の取得をuser_id絞り込みできるようにする必要がある！

        $content_data = $this
        ->selectRaw('contents.content AS name')
        ->selectRaw('ROUND(SUM(study_hours.hours/record_count),1) AS hours')
        ->selectRaw('contents.color')
        ->from('record_contents AS origin1')
        ->join('contents', function($join) {
            $join->on('origin1.content_id', '=', 'contents.id');
        })
        ->leftJoin(DB::raw("({$origin2->toSql()}) AS origin2"), function($join) {
            $join->on('origin1.record_id', '=', 'origin2.record_id');
            // origin2.record_id = origin1.record_id だとできなかった
        })
        ->join('study_hours', function($join) {
            // 副問い合わせでgroupby(user_id) havingでuser_idを絞り込む
            $join->on('origin1.record_id', '=', 'study_hours.id')
            ->where('study_hours.user_id', auth()->id());
        })
        ->groupBy('origin1.content_id')
        ->get();
        return $content_data;
    }
}
