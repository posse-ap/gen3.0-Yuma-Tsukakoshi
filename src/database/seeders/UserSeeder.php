<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('users')->insert([
            [
                'id'=>1, 
                'name'=>'塚越雄真', 
                'email'=>'yttn9984kawa@gmail.com',
                'password'=>'password',
            ]
        ]);
    }
}
