import AddTask from "./Components/AddTask"
import TaskList from "./Components/TaskList"
import initialTask from "./assets/initialTasks"
import { useState } from "react"
import { TaskContext } from "./Context/TaskContext"
import "./Styles/Additional.css"


function App() {

   const [tasks, setTasks] = useState(initialTask);

  return (
    <div className="bg-light bg-gradient adjust-size">
    <TaskContext value={[tasks,setTasks]}>

      <AddTask />
      <TaskList />
    
    </TaskContext>

    </div>
  )
}

export default App
