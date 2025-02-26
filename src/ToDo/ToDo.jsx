

export default function ToDo(props){
    return(
        <div className="flex items-center gap-x-2">
            <h1 className="font-semibold text-lg border-b border-zinc-950 mb-3">{props.toDo.toDoName}</h1>
            <button onClick={() => props.deleteToDo(props.toDo.id)} className="font-semibold text-lg rounded-lg border border-zinc-950 px-3 py-0.5 cursor-pointer">x</button>
        </div>
    )
}