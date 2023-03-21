import React from 'react';

const TodoItem = ({dataitem,ChangeToggle,deleteItem}) => {
  return (
    <div>
      <h2>TodoItem</h2>
      {dataitem.map((item,index)=>{ 
        return (
          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <h3>{item.title}</h3>&nbsp;&nbsp;&nbsp;
          <h5 style={{color:"red"}}>{item.status ? "Completed":"Not Completed"}</h5>&nbsp;&nbsp;&nbsp;
          <button onClick={()=>{ChangeToggle(index)}}>Toggle</button>&nbsp;&nbsp;&nbsp;
          <button onClick={()=>{deleteItem(index)}}>Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default TodoItem;