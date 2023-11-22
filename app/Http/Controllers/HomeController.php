<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function show(Request $request)
    {
      $todos = Todo::all();
      $waitingCount = $todos
        ->where('status', 'awaiting')
        ->values()
        ->count();

      $inprogressCount = $todos
        ->where('status', 'inprogress')
        ->values()
        ->count();

      $doneCount = $todos
        ->where('status', 'done')
        ->values()
        ->count();

      return Inertia::render('Home', ['waitingCount' => $waitingCount, 'inprogressCount' => $inprogressCount, 'doneCount' => $doneCount]);
    }
}
