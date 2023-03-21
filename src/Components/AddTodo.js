import React,{useState} from 'react';
import TodoItem from './TodoItem';

const AddTodo = () => {
    const [data, setData] = useState("");
    const [user, setUser] = useState([]);

    const AddData = () => {
      //NewArray = [...oldArray, newElement]
      //In React Never update array or object we have replace array or object
      var newItem = {
        title:data,
        status:true
      }
        setUser([...user, newItem])
    }
    const deleteItem = (index) =>{
        var filterData = user.filter((item,i)=>{
          return index !== i;
        })

        setUser(filterData)
    }
    const ChangeToggle = (index) =>{
        var newArray =  user.map((item,i)=>{
            return index===i? {...item,status:!item.status} : item;
         });
         setUser(newArray)
    }
  return (
    <div style={{marginTop:"100px"}}>
      <h2>TODO APP</h2>
      <input  type='text' value={data} onChange={(e)=>setData(e.target.value)} placeholder='Enter the Text..' />
      <button onClick={AddData}>Add</button>
      <TodoItem dataitem={user} deleteItem={deleteItem} ChangeToggle={ChangeToggle}/>
    </div>
  );
}

export default AddTodo;
