<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;

class ContentPostController extends Controller
{
    //
    public function create()
    {
        return view('admin.contents_create');
    }

    public function store(Request $request)
    {
        $content = Content::create([
            'content' => $request->content,
            'color' => $request->color,
        ]);

        $request->session()->flash('message', '登録が完了しました');

        return back();
    }
}
