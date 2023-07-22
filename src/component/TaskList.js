import React from 'react'
import TaskItem from './TaskItem'

function TaskList({tasks, showIncomplete, setTaskStatus, removeTask, setShowIncomplete}) {
  return (
    <div>
    <ul className="task-list">
    {tasks
    .filter(task => showIncomplete ? task.status !== 1 : true)
    .map(task =>(
       <TaskItem key={task.id} task={task} setTaskStatus={setTaskStatus} removeTask={removeTask}/>
    ))}
  </ul>  
   <div className="filter-wraper">
   <label htmlFor="filter" className="filter-label"><strong>Show incomplete task only</strong></label>
   <input type="checkbox" id="filter" checked={showIncomplete} onChange={(e)=> setShowIncomplete(e.target.checked)} />
 </div>
 </div>
)}

export default TaskList