

export default function ToDo(){
    return(
        <>
           <div className="flex items-center justify-center mt-10 gap-x-2">
              <div className="flex items-center gap-x-2">
                <input className="rounded-lg border border-zinc-950 py-1.5 px-2" type="text" />
                <button className="rounded-lg border border-zinc-950 p-1.5 cursor-pointer">Add</button>
              </div>
              <div>
                <h1></h1>
              </div>
           </div>
    
        </>
    )
}