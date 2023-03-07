<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudyHour extends Model
{
    use HasFactory;
    public function study_hours()
    {
        return $this;
    }
}
