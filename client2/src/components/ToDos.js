import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDos = ({text,updateMode,deleteMode} ) => {
  return (
    <div className="ToDos">
        <div className="toDo">{text}</div>
        <div className="icons">
            <BiEdit className='icon' onClick={updateMode}/>
            <AiFillDelete className='icon' onClick ={deleteMode}/>
        </div>      
    </div>
  )
}

export default ToDos
