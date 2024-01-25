<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class NewsController extends Controller
{
    
    private $baseUrl = 'https://bkrs3waxwg.execute-api.ap-northeast-1.amazonaws.com/default/news';

    function index()
    {
        $response = Http::get($this->baseUrl);
        return $response;
    }

    function show($id)
    {
        $url = $this->baseUrl . '/' . $id;
        $response = Http::get($url);
        return $response;
    }

}
