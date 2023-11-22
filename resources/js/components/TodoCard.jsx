import React from 'react';
import { ArrowDownCircleIcon, ArrowUpCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Link } from '@inertiajs/react';

function UpGradeBtn({ todoId, className }) {
  return (
    <Link href={`/todo/moveon/${todoId}`} method="put" as="button" className={`${className}`}>
      <ArrowDownCircleIcon className="h-8 w-8" />
    </Link>
  )
}

function DownGradeBtn({ todoId, className }) {
  return (
    <Link href={`/todo/moveback/${todoId}`} method="put" as="button" className={`${className}`}>
      <ArrowUpCircleIcon className="h-8 w-8" />
    </Link>
  )
}

function DeleteBtn({ todoId }) {
  return (
    <Link href={`/todo/${todoId}`} method="delete" as="button" className="hover:text-blue-600" >
      <XCircleIcon className="h-8 w-8" />
    </Link>
  )
}

export default function TodoCard({
  todos,
  name = "",
  className = "",
}) {
  return (
    <div>
      <h3 className={`text-center rounded-t-xl p-2 font-semibold ${className}`}>{name} to do's:</h3>
      <ul className={`rounded-b-xl p-1 bg-opacity-50 ${className}`}>
        {todos.map((todo) => (
          <li key={todo.id} className='flex justify-between'>
            <p className='ml-2'>
              ⫸ {todo.description}
            </p>
            <div className="flex">
              {name == "Waiting" ? <UpGradeBtn todoId={todo.id} className="hover:text-green-400" /> : ""}
              {name == "In progress" ? <><UpGradeBtn todoId={todo.id} className="hover:text-red-400" /><DownGradeBtn todoId={todo.id} className="hover:text-amber-400" /></> : ""}
              {name == "Done" ? <DownGradeBtn todoId={todo.id} className="hover:text-green-400" /> : ""}
              <DeleteBtn todoId={todo.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
