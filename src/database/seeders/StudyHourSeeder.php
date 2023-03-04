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
            [
                'id'=>1,
                'date'=>'2023-03-01',
                'hours'=>8,
            ]
        ]);
    }
}
