

import { FaTrash } from 'react-icons/fa';
import {useState} from "react";

const List = ({title,text,id,setListS,listS}) => {
 
    const removeList = () => {
        const  filteredTodo = listS.filter(item=> item.id !==id);
        setListS(filteredTodo)
  };

    return (  
        <div className="d-flex flex-column justify-content-center">
        <div className="main-list ">
            <div class="List-title d-flex justify-content-between" >
                <h3>{title}</h3>
                <button className='btn'onClick={removeList}>
                    <FaTrash color="red"/>
                </button>
                </div>

                  <p>{text}</p>

        </div>
        </div>
    );
}
 
export default List;