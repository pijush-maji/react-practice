import React, { useState } from 'react';
import AddUser from './component/User/AddUser';
import UserList from './component/User/UserList';


function App() {
  const [userList,setUserList]=useState([])
  const addUserHandler = (uName,uAge) =>{
    setUserList((prvUserList)=>{
      return [...prvUserList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
