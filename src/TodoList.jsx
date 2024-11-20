import React, { useState } from "react";
import "./TodoList.css";


export default function TodoList(){
    const [tasks, setTasks] = useState(["საჭმლის მომზადება", "ჭამა", "ვარჯიში"])
    const [NewTasks, setNewTasks] = useState("")

// ამ ფუქნციის მეშვეობით რეალურად ჩვენ შევძლებთ რომ ტექსტურ ინფორმაციაზე მივიღოთ წვდომა როცა მომხმარებელი
// დაიწყებს წერას ინფათში
    const handleInputChange = event => setNewTasks(event.target.value)


    const addList = () =>{
        if(NewTasks.trim() !== ""){
            setTasks(t => [...t, NewTasks])
            setNewTasks("")
        }
    }

    const deleteList = (index) =>{

        const UpdaterDelete = tasks.filter((_, i) => i !== index)
        setTasks(UpdaterDelete)
        
    }

    return(
       <div className="Todo-list-app">
          <h1>To Do List App</h1>

          <input type="text" placeholder="Enter The Text" value={NewTasks} onChange={handleInputChange} />

          <button type="button" className="addTask" onClick={addList}>
             ADD
          </button>
          <div>
            <ol>
                {tasks.map((item,index ) =>(
                    <li key={index}>
                        <span className="text">{item}</span>
                        <button type="button" className="deleteList" onClick={() => deleteList(index)}>Delete</button>
                    </li>
                ))}
            </ol>
          </div>
       </div>
    )
}