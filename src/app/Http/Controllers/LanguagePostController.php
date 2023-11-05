<?php

namespace App\Http\Controllers;

use App\Models\Language;
use App\Models\User;
use Illuminate\Http\Request;

class LanguagePostController extends Controller
{
    //
    public function user_language_relation()
    {
        return $this->belongsTo(User::class);
    }
    public function index()
    {
        $languages = Language::all();
        return view('admin.languages_index', compact('languages'));
    }
    public function create()
    {
        return view('admin.languages_create');
    }

    public function store(Request $request)
    {
        $language = Language::create([
            'language' => $request->language,
            'color' => $request->color,
        ]);

        $request->session()->flash('message', '登録が完了しました');

        return back();
    }
}
