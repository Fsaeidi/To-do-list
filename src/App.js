import logo from './logo.svg';
import './App.css';
import List from "./component/ListTodo"
import Addtodo from './component/AddToDo';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";




function App() {
  const [listS , setListS] =useState([
    {id:0,title:'math',text:'good'}
  ])
 


  return (

    <div className="bg-color-main ">
      <div className="container">
    <div className="app row">
      <div className="col-md-6">
      
      <Addtodo setListS={setListS} listS={listS}/>

      </div>
      
      <div className="col-md-6">{
          listS.map(item=>(
        <List
      title={item.title}
      text={item.text}
      key={item.id}
      setListS={setListS}
      listS={listS}
      id={item.id}
      />

))

      }
      
      </div>
      

      

      </div>
      </div>
    </div>
  );
}

export default App;
