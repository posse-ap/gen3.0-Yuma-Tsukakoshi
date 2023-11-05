<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Models\User;
use Illuminate\Http\Request;

class ContentPostController extends Controller
{
    //
    // public function user_content_relation(){
    //     return $this->belongsTo(User::class);
    // }

    public function index()
    {
        $contents = Content::all();
        return view('admin.contents_index', compact('contents'));
    }
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

    public function show($id)
    {
        $content = Content::find($id);
        return view('admin.contents_show', compact('content'));
    }
}
