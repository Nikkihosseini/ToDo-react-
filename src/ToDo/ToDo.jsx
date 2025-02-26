import { useState } from "react"


export default function ToDo(){
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

   
 

    return(
        <>
           <div className="flex flex-col items-center justify-center mt-10 gap-y-2">
              <div className="flex items-center gap-x-2">
                <input onChange={inputValueHandler} className="rounded-lg border border-zinc-950 py-1.5 px-2" type="text" />
                <button onClick={addToDo} className="rounded-lg border border-zinc-950 p-1.5 cursor-pointer">Add</button>
              </div>
                {toDoList.map((toDo)=>{
                    return <div key={`div_${toDo.id}`} className="flex items-center gap-x-2">
                        <h1 key={`h1_${toDo.id}`} className="font-semibold text-lg border-b border-zinc-950 mb-3">{toDo.toDoName}</h1>
                        <button key={`btn_${toDo.id}`} onClick={() => deleteToDo(toDo.id)} className="font-semibold text-lg rounded-lg border border-zinc-950 px-3 py-0.5 cursor-pointer">x</button>
                    </div>
                })}
              <div>
                  
              </div>
           </div>
        </>
    )
}