<?php

use App\Http\Controllers\WebAppController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('bar_data', [WebAppController::class, 'getBarData']);
Route::get('pie1_data', [WebAppController::class, 'getPie1Data']);
Route::get('pie2_data', [WebAppController::class, 'getPie2Data']);
