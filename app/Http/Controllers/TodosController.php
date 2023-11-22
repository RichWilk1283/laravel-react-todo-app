<?php

namespace App\Http\Controllers;

use App\Http\Requests\TodoDetailsRequest;
use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodosController extends Controller
{
  public function showDailyTodos(Request $request)
  {
    $todos = Todo::all();
    $waitingTodos = $todos
      ->where('status', 'awaiting')
      ->where('timescale', 'daily')
      ->values();

    $inprogressTodos = $todos
      ->where('status', 'inprogress')
      ->where('timescale', 'daily')
      ->values();

    $doneTodos = $todos
      ->where('status', 'done')
      ->where('timescale', 'daily')
      ->values();

    return Inertia::render('Daily', ['waitingTodos' => $waitingTodos, 'inprogressTodos' => $inprogressTodos, 'doneTodos' => $doneTodos]);
  }

  public function showWeeklyTodos(Request $request)
  {
    $todos = Todo::all();
    $waitingTodos = $todos
      ->where('status', 'awaiting')
      ->where('timescale', 'weekly')
      ->values();

    $inprogressTodos = $todos
      ->where('status', 'inprogress')
      ->where('timescale', 'weekly')
      ->values();

    $doneTodos = $todos
      ->where('status', 'done')
      ->where('timescale', 'weekly')
      ->values();

    return Inertia::render('Weekly', ['waitingTodos' => $waitingTodos, 'inprogressTodos' => $inprogressTodos, 'doneTodos' => $doneTodos]);
  }

  public function showMonthlyTodos(Request $request)
  {
    $todos = Todo::all();
    $waitingTodos = $todos
      ->where('status', 'awaiting')
      ->where('timescale', 'monthly')
      ->values();

    $inprogressTodos = $todos
      ->where('status', 'inprogress')
      ->where('timescale', 'monthly')
      ->values();

    $doneTodos = $todos
      ->where('status', 'done')
      ->where('timescale', 'monthly')
      ->values();

    return Inertia::render('Monthly', ['waitingTodos' => $waitingTodos, 'inprogressTodos' => $inprogressTodos, 'doneTodos' => $doneTodos]);
  }


  //CRUD functions

  public function createTodo(TodoDetailsRequest $request)
  {

    $validatedData = $request->validated();

    $todo = Todo::create([
      'description' => $validatedData['description'],
      'status' => $validatedData['status'],
      'timescale' => $validatedData['timescale']
    ]);

    return redirect()->back();
  }

  public function getTodoById(string $id)
  {
    $todo = Todo::where('id', $id)->first();

    return $todo;
  }

  public function moveOnStatus(string $id)
  {
    $todo = $this->getTodoById($id);

    switch ($todo->status) {
      case "awaiting":
        $todo->status = "inprogress";
        $todo->update();
        return redirect()->back();
        break;
      case "inprogress":
        $todo->status = "done";
        $todo->update();
        return redirect()->back();
        break;
      default:
        return redirect()->back();
    }
  }

  public function moveBackStatus(string $id)
  {
    $todo = $this->getTodoById($id);

    switch ($todo->status) {
      case "inprogress":
        $todo->status = "awaiting";
        $todo->update();
        return redirect()->back();
        break;
      case "done":
        $todo->status = "inprogress";
        $todo->update();
        return redirect()->back();
        break;
      default:
        return redirect()->back();
    }
  }

  public function deleteTodo(string $id)
  {
    $todo = $this->getTodoById($id);

    $todo->delete();

    return redirect()->back();
  }
}
