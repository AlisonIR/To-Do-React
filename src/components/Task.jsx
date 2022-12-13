import React,{useState}from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const TasksList = ({item, deleteTask}) => {
  const {id, text} = item
  const [complete, setComplete] = useState(false)

  return (
    <div className='flex justify-center mt-5 bg-gradient-to-r from-[#333399] to-[#ff00cc] min-w-[300px] h-8 mx-auto rounded-md text-white sm:w-[450px] sm:text-left'>
        <h1 className="mr-10 sm:mr-[180px]">{text}</h1> 
        
        <div className='ml-[180px]'>
         <button onClick={()=> deleteTask(id)} className="mt-2">
           <FaRegTrashAlt/>
         </button>
       </div>
    </div>
  )
}

export default TasksList