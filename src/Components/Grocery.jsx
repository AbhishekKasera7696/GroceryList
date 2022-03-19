import { useState } from "react";
import {GroceryInput} from "./GroceryInput";
import {GroceryList} from "./GroceryList";
import { v4 as uuid } from 'uuid'

const Grocery = () => {
   const [data, setData] = useState([])

  

   const handleAdd = (title) => {
       const payload = {
           title,
           status:false,
           id:uuid()
       };
       setData([...data, payload]);
   }

   const handleToggle = (id) => {
      const updateData = data.map((List) => 
      List.id === id ? {...List, status : !List.status } : List
      );
      setData(updateData);
   }

   const handleDelete = (id) => {
    const updateData = data.filter((List) => List.id !== id);
    setData(updateData);
   } 

    return (
    <div>
    
    <GroceryInput handleAdd={handleAdd}/>
    {
        data.map((List) => (
        <GroceryList {...List} 
         key={List.id} 
         handleToggle={handleToggle}
         handleDelete={handleDelete}
         />
        ))}
    
     
    </div>
    );
};


export {Grocery}