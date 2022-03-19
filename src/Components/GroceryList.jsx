import React from 'react';

const GroceryList = ({title, status, id, handleToggle, handleDelete}) => {
    return (
        <div>
          <h1>{title}</h1>
          <h3>{ status ? "Completed" : "Not Completed" }</h3>
          <button onClick={() => handleToggle(id)}>Toggle Todo</button>
          <button onClick={() => handleDelete(id)}>Delete Todo</button>

        </div>
    );
};

export {GroceryList}