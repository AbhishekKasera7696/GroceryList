import  { useState } from 'react';



const GroceryInput = ({handleAdd}) => {
    const [title , setTitle] = useState("")
    return (
        <div>
         <input placeholder='Enter here' 
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         >
        </input>
          <button onClick={() =>{handleAdd(title); setTitle("");}} >Add</button>
        </div>
    );
};

export {GroceryInput}