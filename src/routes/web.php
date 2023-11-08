<?php

use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\Admin\AdminRegisterController;
use App\Http\Controllers\ContentPostController;
use App\Http\Controllers\LanguagePostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebAppController;
use App\Models\StudyHour;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/webapp', [WebAppController::class,'index'])->middleware(['auth', 'verified'])->name('webapp');

Route::get('/bar_data',[WebAppController::class,'getBarData']);
Route::get('/pie1_data',[WebAppController::class,'getPie1Data']);
Route::get('/pie2_data',[WebAppController::class,'getPie2Data']);


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

/*
|--------------------------------------------------------------------------
| ユーザー用ルーティング
|--------------------------------------------------------------------------
*/
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// 投稿処理
Route::post('/webapp_store', [WebAppController::class,'store'])->name('webapp.store');

Route::middleware(['auth','admin'])->group(function () {
    // ユーザー画面の追加
    Route::resource('/admin/users', UserController::class)->middleware('can:admin');
    // 学習言語 リソースコントローラー
    Route::get('admin/languages', [LanguagePostController::class,'index'])->name('languages.index')->middleware('can:admin');
    Route::get('admin/languages_show/{post}', [LanguagePostController::class, 'show'])->name('languages.show');
    Route::get('admin/languages_create', [LanguagePostController::class,'create']) ->name('languages.create');
    Route::post('admin/languages_store', [LanguagePostController::class,'store']) ->name('languages.store');
    Route::get('admin/languages_edit/{post}', [LanguagePostController::class, 'edit'])->name('languages.edit');
    Route::patch('admin/languages_update/{post}', [LanguagePostController::class, 'update'])->name('languages.update');
    Route::delete('admin/languages_delete/{post}', [LanguagePostController::class, 'destroy'])->name('languages.destroy');
    
    // コンテンツ リソースコントローラー
    Route::get('admin/contents', [ContentPostController::class, 'index'])->name('contents.index')->middleware('can:admin');
    Route::get('admin/contents_show/{post}', [ContentPostController::class, 'show'])->name('contents.show');
    Route::get('admin/contents_create', [ContentPostController::class,'create']) ->name('contents.create');
    Route::post('admin/contents_store', [ContentPostController::class,'store']) ->name('contents.store');
    Route::get('admin/contents_edit/{post}', [ContentPostController::class, 'edit'])->name('contents.edit');
    Route::patch('admin/contents_update/{post}', [ContentPostController::class, 'update'])->name('contents.update');
    Route::delete('admin/contents_delete/{post}', [ContentPostController::class, 'destroy'])->name('contents.destroy');
});

require __DIR__.'/auth.php';
