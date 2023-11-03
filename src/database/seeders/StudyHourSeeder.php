<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudyHourSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('study_hours')->insert([
            ['id'=>1, 'user_id'=>1, 'date'=>'2023-11-01','hours'=>8, ],
            ['id'=>2, 'user_id'=>1, 'date'=>'2023-11-03','hours'=>9, ],
            ['id'=>3, 'user_id'=>1, 'date'=>'2023-11-06','hours'=>4, ],
            ['id'=>4, 'user_id'=>1, 'date'=>'2023-11-08','hours'=>8, ],
            ['id'=>5, 'user_id'=>1, 'date'=>'2023-11-12','hours'=>7.5, ],
            ['id'=>6, 'user_id'=>1, 'date'=>'2023-11-13','hours'=>2.5, ],
            ['id'=>7, 'user_id'=>1, 'date'=>'2023-11-14','hours'=>8.5, ],
            ['id'=>8, 'user_id'=>1, 'date'=>'2023-11-15','hours'=>2, ],
            ['id'=>9, 'user_id'=>1, 'date'=>'2023-11-17','hours'=>6.5, ],
            ['id'=>10, 'user_id'=>1, 'date'=>'2023-11-17','hours'=>7.5, ],
            ['id'=>11, 'user_id'=>1, 'date'=>'2023-11-19','hours'=>9.5, ],
            ['id'=>12, 'user_id'=>1, 'date'=>'2023-11-19','hours'=>7, ],
            ['id'=>13, 'user_id'=>1, 'date'=>'2023-11-19','hours'=>1, ],
            ['id'=>14, 'user_id'=>1, 'date'=>'2023-11-21','hours'=>6.5, ],
            ['id'=>15, 'user_id'=>1, 'date'=>'2023-11-24','hours'=>7.5, ],
            ['id'=>16, 'user_id'=>1, 'date'=>'2023-11-25','hours'=>1.5, ],
            ['id'=>17, 'user_id'=>1, 'date'=>'2023-11-25','hours'=>9.5, ],
            ['id'=>18, 'user_id'=>1, 'date'=>'2023-11-25','hours'=>2, ],
            ['id'=>19, 'user_id'=>1, 'date'=>'2023-11-27','hours'=>8.5, ],
            ['id'=>20, 'user_id'=>1, 'date'=>'2023-11-28','hours'=>3, ],
        ]);
    }
}
