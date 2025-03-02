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
        <div className="relative h-[70vh] w-[80vw] sm:w-[50vw] md:w-[38vw] lg:w-[30vw] 2xl:w-[25vw]">
            <span className="absolute top-[-60px] left-[-60px] block rounded-full size-50 bg-linear-45 from-pink-80 to-orange-60 -z-10"></span>
            <span className="absolute bottom-[110px] sm:bottom-[149px] right-[-104px] block rounded-full size-70 bg-linear-45 from-green-60 to-purple-40 -z-10"></span>
            <span className="absolute bottom-[-13px] left-[-13px] block rounded-full size-40 bg-linear-45 from-pink-90 to-pink-40 -z-10"></span>
            <div className="flex flex-col items-center justify-start relative max-h-[70vh] w-[80vw] sm:w-[50vw] md:w-[38vw] lg:w-[30vw] 2xl:w-[25vw] z-40 bg-alpha-50 border border-blue-20 backdrop-blur-[20px] rounded-2xl p-4 scroll-y overflow-y-scroll">
                <form className="relarive flex flex-col text-left gap-x-2 min-h-[8rem] w-full bg-alpha-60 backdrop-blur-[20px] rounded-2xl p-2">
                    <h1 className="font-Archivo-bold text-xl text-sky-950">Create task:</h1>
                    <textarea onChange={inputValueHandler} className="text-start bloke w-[220px] h-[72px] outline-none text-sky-50 pb-1.5 px-2 overflow-y-scroll resize-none" type="text" placeholder="New task..."/>
                    <button type="button" onClick={addToDo} className="text-sky-50 bg-sky-950 absolute rounded-xl border border-zinc-950 px-2 py-1.5 cursor-pointer bottom-[8px] right-[8px]">Create</button>
                </form>
                <ul className="flex flex-col w-full">
                    {toDoList.map((toDo)=>{
                        return (
                            <ToDo key={toDo.id} toDo={toDo} 
                                completedToDo={completedToDo}
                                deleteToDo={deleteToDo}/>
                        )
                        })}
                </ul>
            </div>
        </div>
        </>
    )
}