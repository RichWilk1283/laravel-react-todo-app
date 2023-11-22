import { Head } from '@inertiajs/react';
import React from 'react';
import Layout from '../components/Layout';
import TodoForm from '../components/TodoForm';
import TodoCard from '../components/TodoCard';
import Summary from '../components/Summary';

export default function Monthly({ waitingTodos, inprogressTodos, doneTodos }) {
  return (
    <>
      <Head>
        <title>Monthly Todos</title>
        <meta name="description" content="this is where you will find the monthly todos" />
      </Head>
      <Layout>
        <TodoForm />
        <div className="flex flex-col w-full md:w-11/12 lg:w-3/4 md:gap-3 mx-auto">
          <Summary waitingCount={waitingTodos.length} inprogressCount={inprogressTodos.length} doneCount={doneTodos.length} />
          <h1 className="text-2xl md:text-4xl text-center">Daily Todo List</h1>
          <TodoCard todos={waitingTodos} name="Waiting" className="bg-amber-400" />
          <TodoCard todos={inprogressTodos} name="In progress" className="bg-green-400" />
          <TodoCard todos={doneTodos} name="Done" className="bg-red-400" />
        </div>
      </Layout>
    </>
  )
}
