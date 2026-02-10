import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, text: "Wake up to Eat", completed: false }
  ])

  const [input, setInput] = useState("")

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: input, completed: false }
    ])
    setInput("")
  }

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const [filter, setFilter] = useState("all")


  const visibleTasks = tasks.filter(task => {
    if (filter === 'all') return tasks;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
  });

  const [editingId, setEditingId] = useState(null)
  const [editValue, setEditValue] = useState("")

  const startEdit = (task) => {
    setEditingId(task.id)
    setEditValue(task.text)
  }

  const saveEdit = () => {
    setTasks(tasks.map(task =>
      task.id === editingId ? { ...task, text: editValue } : task
    ))
    setEditingId(null)
    setEditValue("")
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditValue("")
  }


  return (
    <>
      <main className='size bg-primary border-primary text-primary content'>
        <div className='header'>
          <h1><img className='mr-2' src="/public/icons8-to-do-list-38.png" />To-Do List</h1>
          <p>Manage your tasks with state and event handling</p>
        </div>

        <div className='form'>
          <input type="text" placeholder='Add a new task.....'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }} />
          <button onClick={addTask}><img src="/public/icons8-add-36.png" alt="Add Task" /></button>
        </div>

        <div className='mid-break'>
          <p>({tasks.filter(task => !task.completed).length}) Active Tasks</p>
          <p>({tasks.filter(task => task.completed).length}) Completed</p>
        </div>

        <div className='btns-3'>
          <button className={'btn' + (filter === 'all' ? ' bg-white/90' : '')} onClick={() => setFilter('all')}><img src='/public/icons8-to-do-list-24.png' /> All ({tasks.length})</button>
          <button className={'btn' + (filter === 'active' ? ' bg-white/90' : '')} onClick={() => setFilter('active')}><img src='/public/icons8-active-24.png' /> Active ({tasks.filter(task => !task.completed).length})</button>
          <button className={'btn' + (filter === 'completed' ? ' bg-white/90' : '')} onClick={() => setFilter('completed')}><img src='/public/icons8-done-24.png' /> Completed ({tasks.filter(task => task.completed).length})</button>
        </div>

        <div className='task'>
          {visibleTasks.map((task) => (
            <div className='task-bar' key={task.id}>
              <input type="checkbox" checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
              />


              {editingId === task.id ? (  
                  <>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEdit();
                        if (e.key === "Escape") cancelEdit();
                      }}
                    />
                    <div className='ml-auto flex flex-row items-center gap-2'>
                      <img src='/public/icons8-enter-48.png' alt="Save Edit" onClick={saveEdit} />
                      <p>
                        <img src='/public/icons8-cancel-48.png' alt="Cancel Edit" onClick={cancelEdit} />
                      </p>
                    </div>
                  </>

                ) : (

             <>
               <label className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</label>
               <div className='ml-auto flex gap-2'>
                 <img src='/public/icons8-edit-16.png' alt="Edit Task"  onClick={() => startEdit(task)}/>
                 <img
                   src='/public/icons8-trash-16 (1).png' alt="Delete Task"
                   onClick={() => {
                     const confirmDelete = window.confirm("Are you sure you want to delete this task?");
                     if (confirmDelete) {
                       setTasks(tasks.filter(p => p.id !== task.id))
                     }
                   }}
                 />
               </div>
             </>
              )}
            </div>
          ))}
        </div>

      </main>
    </>
  )
}

export default App
