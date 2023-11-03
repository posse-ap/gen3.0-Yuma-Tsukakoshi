<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Content extends Model
{
    use SoftDeletes;
    use HasFactory;
    protected $fillable = [
        'content',
        'color',
    ];

    protected $guarded = [
        'id',
    ];

    // protected $dates = [
    //     'deleted_at',
    // ];
    
    public function contents()
    {
        return $this;
    }
}
