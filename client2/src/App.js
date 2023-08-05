import React, { useEffect, useState } from 'react'
import "./App.css"
import {getAllToDos,saveAllToDo,updateToDo,deleteToDo} from "./apiUtils/handleApi"
import ToDos from './components/ToDos'

const App = () => {
  const [text, setText] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const [toDo, setToDo] = new useState([]);
  const [id,setId] = useState("");

  // console.log(toDo.data)
 
  let toDoData = toDo.data

  console.log("Tets",toDoData)
  console.log(typeof(toDoData))

  useEffect(()=>{
    getAllToDos(setToDo)
  }, [])

  const updateToDoMode = (id,text)=>{
    setIsUpdated(true)
    setText(text)
    setId(id)
  }


  return (
    <div className='App'>
      <div className='container'>
        <h2>To Do List</h2>
        <input className="toDoInput" type ="text" placeholder='To Do' 
        value={text} onChange={(e)=>setText(e.target.value)}></input>
        <button className='toDoSubmit'  
        onClick = {isUpdated ? ()=> updateToDo(id,text,setText,setToDo,setIsUpdated)
           : ()=>saveAllToDo(text,setText,setToDo)}
        >{isUpdated ? 'Update' : 'Add'} </button>

        <div className='list'>
          {toDoData &&
          toDoData.map(ele=>
            <ToDos key={ele._id} text={ele.text} 
            updateMode={()=>updateToDoMode(ele._id,ele.text)} deleteMode={()=>deleteToDo(ele._id,setToDo)}/>)
          
          }
        </div>
      </div>
    </div>
  )
}

export default App
