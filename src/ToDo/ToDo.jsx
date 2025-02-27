import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'

export default function ToDo(props){
    return(
        <li style={{backgroundColor : props.toDo.isCompleted ? 'limegreen' : '#effcff59'}} className="flex items-start justify-between rounded-xl overflow-x-hidden px-4 py-1.5 w-full mt-3">
            <FontAwesomeIcon className='cursor-pointer fa-xl mr-2' onClick={() => props.completedToDo(props.toDo.id)} icon={faSquareCheck} />
            <h2 className="font-Archivo-semiBold text-sky-50 w-53 overflow-hidden break-all">{props.toDo.toDoName}</h2>
            <FontAwesomeIcon className='cursor-pointer fa-xl' onClick={() => props.deleteToDo(props.toDo.id)} icon={faXmark} />
        </li>
    )
}