import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

import { ListGroup, Form } from "react-bootstrap";

function TaskList(){

    const [updateInput, setUpdateInput] = useState("");
    const [tasks, setTasks] = useContext(TaskContext);

    function handleUpdateInput(e){
        setUpdateInput(e.target.value);
    }

    function changeUpdating(id){
        let oldText = "";
        const newTask = tasks.map(task => {
            if(task.id == id){
                oldText = task.text;
                if(task.updating)
                {
                    task.text = updateInput;
                }
                task.updating = !task.updating;
            }
            return task;
        });
        setUpdateInput(oldText);
        setTasks(newTask);
    }

    function handleCheckbox(id){
        const newTasks = tasks.map(task => {
            if(task.id == id){
                return {
                    ...task,
                    done: !task.done
                }
            }else{  
                return task;
            }
        });
        setTasks(newTasks);
    }

    function handleDelete(id){
        const newTasks = tasks.filter(task => {
            if(task.id  === id){

            }else{
                return task;
            }
        });
        setTasks(newTasks);
    }

    return <ListGroup className="d-flex justify-content-center align-items-center overflow-hidden"> {tasks.map(task => {
        return <ListGroup.Item className="mt-2 w-75 d-flex justify-content-evenly align-items-center overflow-auto" action key={task.id} variant={task.done?"danger":"primary"}>
            {task.updating?
            <Form.Control 
            className=" w-50 font-monospace text-capitalize text-decoration-underline"
            name="updatingProgress"
            id="updatingProgress" 
            value={updateInput}
            onChange={(e) => handleUpdateInput(e)}
            />
            : 
            <section className="w-50">
                <p className=" d-inline-block p-0 m-0 font-monospace text-capitalize text-decoration-underline">{task.text}</p>
            </section>
            }
            <input 
            className="ms-2"
            type="checkbox" 
            name="updateCheckBox" 
            id="updateCheckBox" 
            checked={task.done}
            onChange={() => handleCheckbox(task.id)}
            />

            <input 
            className="btn btn-warning mx-2"
            type="button" 
            value="Update Task"
            name="updating" 
            id="update"
            onClick={() => changeUpdating(task.id)}
            />

            <input 
            className="btn btn-danger"
            type="button" 
            value="Delete Task" 
            name="DeleteTask"
            id="delete"
            onClick={() => handleDelete(task.id)}
            />
        </ListGroup.Item> })}
        </ListGroup>
   
}

export default TaskList;