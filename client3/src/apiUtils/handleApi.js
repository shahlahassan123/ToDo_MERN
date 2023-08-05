import axios, * as others from 'axios';

const baseURL = "http://localhost:4000"

const getAllToDos = (setToDo)=>{

    axios.get(baseURL).then(data=>setToDo(data)).catch(err=>console.log(err))

}

const saveAllToDo = (text,setText, setToDo)=>{

    axios.post(`${baseURL}/save`, {text}).then(data=>
        {  console.log(`${baseURL}/save`)
            setText("");
            getAllToDos(setToDo);
        }).catch(err=>console.log(err))
   
}

const updateToDo = (id,text,setText,setToDo,setIsUpdated)=>{

    axios.post(`${baseURL}/update/:${id}`,{text}).then(data=>{
        setText("");
        setIsUpdated(false);
        getAllToDos(setToDo);
        
    }).catch(err=>console.log(err))
}

const deleteToDo = (id,setToDo)=>{

    axios.post(`${baseURL}/delete/:${id}`).then(data=>{

        getAllToDos(setToDo);
        
    }).catch(err=>console.log(err))


}

export {getAllToDos,saveAllToDo,updateToDo,deleteToDo}