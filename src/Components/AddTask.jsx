import { useContext, useState } from "react";
import { useRef } from "react";
import { TaskContext } from "../Context/TaskContext";
import "../Styles/Additional.css";

import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function AddTask(){
    const [input, setInput] = useState("");
    const [tasks,setTasks] = useContext(TaskContext);
    const GlobalId = useRef(5);

    function handleSubmit(e){
        e.preventDefault();

        if(input === ""){
            alert("Sorry, you cannot create an empty task.")
        }else{
            const newTask = [
                ...tasks,
                {
                    id: GlobalId.current,
                    text: input,
                    done: false,
                    updating: false
                }
            ];
            GlobalId.current++;
    
            setTasks(newTask);
            setInput("");
        }

    }

    return <section className="w-100">
        <Form.Group className="d-flex w-100 justify-content-center align-items-center">
            <Form.Control 
            className="m-2 ps-4 w-50"
            size="sm"
            id="task"
            name="inputTask"
            type="text" 
            placeholder="Enter Task Here"
            value={input}
            onChange={e => setInput(e.target.value)}
            />

            <Button type="submit"
            className="override py-1 px-2 m-2"
            variant="dark"
            onClick={(e) => handleSubmit(e)}
            >Create Task</Button>
        </Form.Group>
    </section>
}

export default AddTask;