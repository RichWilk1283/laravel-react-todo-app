<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\TodosController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [HomeController::class, 'show']);

Route::get('/daily', [TodosController::class, 'showDailyTodos'])->name('daily.todos');
Route::get('/weekly', [TodosController::class, 'showWeeklyTodos'])->name('weekly.todos');
Route::get('/monthly', [TodosController::class, 'showMonthlyTodos'])->name('monthly.todos');

Route::post('/todo', [TodosController::class, 'createTodo']);
Route::delete("/todo/{id}", [TodosController::class, 'deleteTodo']);
Route::put("/todo/moveon/{id}", [TodosController::class, 'moveOnStatus']);
Route::put("/todo/moveback/{id}", [TodosController::class, 'moveBackStatus']);