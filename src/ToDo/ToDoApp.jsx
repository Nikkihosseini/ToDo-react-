import { useState } from "react"
import ToDo from './ToDo.jsx'


export default function ToDoApp(){
    const [toDoList , setToDoList] = useState([])
    const [newToDo , setNewToDo] = useState('')

    function inputValueHandler(event){
        setNewToDo(event.target.value)
    }

    function addToDo(){
        const toDo = {
            id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
            toDoName: newToDo
        }
        setToDoList([...toDoList , toDo])
        console.log(toDo.id)
    }

    function deleteToDo(toDoId){
        setToDoList(toDoList.filter((toDo)=> toDoId !== toDo.id))
    }

 

    return(
        <>
           <div className="flex flex-col items-center justify-center mt-10 gap-y-2">
              <div className="flex items-center gap-x-2">
                <input onChange={inputValueHandler} className="rounded-lg border border-zinc-950 py-1.5 px-2" type="text" />
                <button onClick={addToDo} className="rounded-lg border border-zinc-950 p-1.5 cursor-pointer">Add</button>
              </div>
                {toDoList.map((toDo)=>{
                    return (
                        <ToDo key={toDo.id} toDo={toDo
                        } deleteToDo={deleteToDo}/>
                    )
                })}
              <div>
                  
              </div>
           </div>
        </>
    )
}