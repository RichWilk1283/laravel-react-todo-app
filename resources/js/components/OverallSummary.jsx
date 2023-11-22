import React from 'react'
import Summary from './Summary'

export default function OverallSummary({ waitingCount, inprogressCount, doneCount }) {
  return (
    <div className='w-11/12 md:w-1/3 border-gray-500 border-2 p-3 rounded-xl bg-slate-200 shadow-lg'>
      <h2 className=' font-semibold text-center'>Your total todos are:</h2>
      <Summary waitingCount={waitingCount} inprogressCount={inprogressCount} doneCount={doneCount} />
    </div>
  )
}
