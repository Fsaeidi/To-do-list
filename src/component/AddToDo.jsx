
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const Addtodo =({setListS,listS})=>
 {
    const[newTodo,setNewTodo]=useState(
        {
            title:'',
            text:'',
            id:''
        }
    )

  const addNewTodo=()=>{
    if (newTodo.title) {
        setListS([...listS,newTodo]);
setNewTodo({
    title:'',
    text:'',
    id:''
});
    }


  }

    return ( 
        <div className="add-to-do d-flex flex-column justify-content-around">
        <h2>Add to do list
           
        </h2>
    
        <input type="text" placeholder="type your title"
        value={newTodo.title}
         onChange={(e)=>setNewTodo({...newTodo,
            title:e.target.value,
            id:uuidv4()
        })}
        />
        <br/>
        <textarea cols="30" rows="10" placeholder="explain more...."
        value={newTodo.text}
        onChange={(e)=>setNewTodo({...newTodo,
            text:e.target.value,})}
        ></textarea>
        <button
        onClick={addNewTodo}
        >submit</button>
        </div>  
     );
}
 
export default Addtodo ;