<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Language extends Model
{
    use SoftDeletes;
    use HasFactory;
    protected $fillable = [
        'language',
        'color',
    ];

    protected $guarded = [
        'id',
    ];

    protected $dates = [
        'deleted_at',
    ];

    public function languages()
    {
        return $this;
    }
}
