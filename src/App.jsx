import './App.css'

function App() {

  return (
    <>
      <main className='size bg-primary border-primary text-primary content'>
        <div className='header'>
          <h1><img src="/public/icons8-tasklist-24.png"/>To-Do List</h1>
          <p>Manage your tasks with state and event handling</p>
        </div>

        <div className='form'>
          <input type="text" placeholder='Add a new task' />
          <button><img src="/public/icons8-plus-36.png" alt="Add Task" /></button>
        </div>

        <div className='mid-break'>
          <p>Active Tasks</p>
          <p>Completed</p>
        </div>

        <div className='btns-3'>
          <button className='btn'>Button 1</button>
          <button className='btn'>Button 2</button>
          <button className='btn'>Button 3</button>
        </div>

        <div className='task'>
          <div className='task-bar'>
            <input type="checkbox" id="task1" name="task1" value="Task 1"/>
            <label for="task1"> Task 1</label><br/>
          </div>
          <div className='task-bar'>
            <input type="checkbox" id="task2" name="task2" value="Task 2"/>
            <label for="task2"> Task 2</label><br/>
          </div>
          <div className='task-bar'>
            <input type="checkbox" id="task3" name="task3" value="Task 3"/>
            <label for="task3"> Task 3</label><br/>
          </div>
        </div>

      </main>
    </>
  )
}

export default App
