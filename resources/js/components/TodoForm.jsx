import { useForm } from "@inertiajs/react";

export default function TodoForm() {

  const { data, setData, post, reset, processing, errors } = useForm({
    description: '',
    status: '',
    timescale: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/todo', {
      onSuccess: () => {
        reset()
      }
    });
  }

  return (
    <div className="flex flex-col items-center text-center m-2 mb-4">
      <form onSubmit={handleSubmit} className='flex flex-col w-11/12 lg:w-3/4 border-2 border-blue-900 bg-gray-200 items-center gap-2 rounded-xl'>
        <label htmlFor="todo-description" className='mt-2 font-semibold text-lg md:text-2xl'>Enter your task:</label>
        <input onChange={e => setData('description', e.target.value)} type="text" name="task" value={data.description} id="todo-description" className='border-2 border-blue-900 w-11/12 rounded-md' />
        {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
        <div className='flex items-center gap-2'>
          <label className='mr-2 font-semibold'>Status:</label>
          <input type="radio" name="status" value="awaiting" checked={data.status === 'awaiting'} onChange={e => setData('status', e.target.value)} /> Awaiting
          <input type="radio" name="status" value="inprogress" checked={data.status === 'inprogress'} onChange={e => setData('status', e.target.value)} /> In progress
          <input type="radio" name="status" value="done" checked={data.status === 'done'} onChange={e => setData('status', e.target.value)} /> Done
        </div>
        {errors.status && <span className="text-red-500 text-sm">{errors.status}</span>}
        <div className='flex items-center gap-2'>
          <label className='mr-2 font-semibold'>Time scale:</label>
          <input type="radio" name="timescale" value="daily" checked={data.timescale === 'daily'} onChange={e => setData('timescale', e.target.value)} /> Daily
          <input type="radio" name="timescale" value="weekly" checked={data.timescale === 'weekly'} onChange={e => setData('timescale', e.target.value)} /> Weekly
          <input type="radio" name="timescale" value="monthly" checked={data.timescale === 'monthly'} onChange={e => setData('timescale', e.target.value)} /> Monthly
        </div>
        {errors.timescale && <span className="text-red-500 text-sm">{errors.timescale}</span>}
        <button className=' border-2 border-blue-900 w-1/2 rounded-2xl mb-2' type="submit">Add</button>
      </form>
    </div>
  )
}