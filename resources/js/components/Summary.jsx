
import React from 'react'

export default function Summary({ waitingCount, inprogressCount, doneCount}) {
  return (
    <div className="flex flex-col text-sm md:text-xl items-center my-3 gap-1">
    <p>You currently have <span className="text-amber-400 font-bold">{waitingCount}</span> tasks waiting to be started</p>
    <p>You currently have started <span className="text-green-400 font-bold">{inprogressCount}</span> tasks</p>
    <p>You currently have <span className="text-red-400 font-bold">{doneCount}</span> tasks completed</p>
  </div>
  )
}
