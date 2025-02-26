import { useState } from "react"


export default function ToDo(){
    const [toDoList , setToDoList] = useState([])
    const [newToDo , setNewToDo] = useState('')

    function inputValueHandler(event){
        setNewToDo(event.target.value)
    }
 

    return(
        <>
           <div className="flex flex-col items-center justify-center mt-10 gap-y-2">
              <div className="flex items-center gap-x-2">
                <input onChange={inputValueHandler} className="rounded-lg border border-zinc-950 py-1.5 px-2" type="text" />
                <button onClick={addToDo} className="rounded-lg border border-zinc-950 p-1.5 cursor-pointer">Add</button>
              </div>
              <div>
                  
              </div>
           </div>
        </>
    )
}