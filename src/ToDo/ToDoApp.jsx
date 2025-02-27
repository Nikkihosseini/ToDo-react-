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
            <div className="flex items-center justify-center relative h-[70vh] w-[22vw] z-40">
                <span className="absolute top-[-60px] left-[-60px] block rounded-full size-50 bg-linear-45 from-pink-80 to-orange-60 -z-10"></span>
                <span className="absolute bottom-[149px] right-[-104px] block rounded-full size-70 bg-linear-45 from-green-60 to-purple-40 -z-10"></span>
                <span className="absolute bottom-[-13px] left-[-13px] block rounded-full size-40 bg-linear-45 from-pink-90 to-pink-40 -z-10"></span>
                <div className=" bg-alpha-50 border border-blue-20 backdrop-blur-[20px] h-full w-[22vw] rounded-2xl overflow-hidden p-4">
                        <form className="relarive flex flex-col text-left gap-x-2 h-[7rem] w-full bg-alpha-60 backdrop-blur-[20px] rounded-2xl overflow-hidden p-2">
                            <h1 className="font-Archivo-bold text-xl text-sky-950">Create task:</h1>
                            <textarea onChange={inputValueHandler} className="text-start bloke w-[220px] h-[72px] outline-none text-sky-50 pb-1.5 px-2 overflow-y-scroll resize-none" type="text" placeholder="New task..."/>
                            <button type="button" onClick={addToDo} className="text-sky-50 bg-sky-950 absolute rounded-xl border border-zinc-950 px-2 py-1.5 cursor-pointer bottom-[8px] right-[8px]">Create</button>
                        </form>
                        <div>
                            {toDoList.map((toDo)=>{
                                return (
                                    <ToDo key={toDo.id} toDo={toDo
                                    } 
                                    completedToDo={completedToDo}
                                    deleteToDo={deleteToDo}/>
                                )
                            })}
                        </div>
                </div>
            </div>
        </>
    )
}