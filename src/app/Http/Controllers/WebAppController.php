<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Content;
use App\Models\Language;
use Database\Seeders\LanguageSeeder;

class WebAppController extends Controller
{
    //
    public function index()
    {
        $contents = Content::select('content')->get();
        $languages = Language::select('language')->get();
        // dd($contents);
        // dd($languages);
        return view('webapp',compact('contents','languages'));
    }
    
}
