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
            toDoName: newToDo,
            isCompleted: false
        }
        setToDoList([...toDoList , toDo])
        console.log(toDo.id)
    }

    function deleteToDo(toDoId){
        setToDoList(toDoList.filter((toDo)=> toDoId !== toDo.id))
    }

    function completedToDo(toDoId){
        setToDoList(toDoList.map((toDo)=>{
            if(toDo.id === toDoId){
                return {...toDo ,  isCompleted: !toDo.isCompleted}
            } else
                return toDo
        }))
    }

 

    return(
        <>
           <div className="relative bg-alpha-50 border border-blue-20 backdrop-blur-md h-[70vh] w-[22vw] rounded-2xl z-40">
            <span className="absolute top-[-60px] left-[-60px] block rounded-full size-40 bg-linear-45 from-pink-80 to-orange-60 z-0"></span>
            <span className="absolute block rounded-full size-50 bg-linear-45 from-green-60 to-purple-40 z-0"></span>
            <span className="absolute block rounded-full size-30 bg-linear-45 from-pink-90 to-pink-40 z-0"></span>
              <div className="flex items-center gap-x-2">
                <input onChange={inputValueHandler} className="rounded-lg border border-zinc-950 py-1.5 px-2" type="text" />
                <button onClick={addToDo} className="rounded-lg border border-zinc-950 p-1.5 cursor-pointer">Add</button>
              </div>
                {toDoList.map((toDo)=>{
                    return (
                        <ToDo key={toDo.id} toDo={toDo
                        } 
                        completedToDo={completedToDo}
                        deleteToDo={deleteToDo}/>
                    )
                })}
              <div>
                  
              </div>
           </div>
        </>
    )
}