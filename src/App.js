import React, { useState } from 'react';
import MemberLists from './components/MemberLists';
import MemberForm from './components/MemberForm';
import './style.css';

import './App.css';

function App() {
  const [memberList, setMemberList] = useState([
    {
      name: 'TheOne',
      email: 'numberOne@universe.com',
      role : 'admin',
    }
  ]);

  const [member, setMember] = useState({
    name: '',
      email: '',
      role : '',
  })


  const selectedMemberFunc = (memberName) => {
    // array memberList filter return a new array
    let obj = memberList.filter(o => o.name === memberName )
    setMember(obj[0])
  }

  // pass a function by props to MemberForm component
  // const addMemberToList = (newFormMember) => {
  //   setMemberList([...memberList, newFormMember])
//setMemberList({...memberList, newFormMember}) 
//same as above, append newmember to list 
//  }

  function appFunc() {
    return {
      addMemberToList: function(newFormMember) {
        setMemberList([...memberList, newFormMember])
      },
      inputAppMember: function(child) {
        setMember({...member, [child.name]:child.value })
      },
      resetAppMember: function() {
        setMember({name:'',email:'', role:''})
      }
    }
  }

  return (
    <div className="App">
      <h1>My Team</h1>
      <MemberForm  appMember={member} appFunc={appFunc}  />
      <MemberLists memberList={memberList} selectedMemberFunc={selectedMemberFunc} />
    </div>
  );
}

export default App;
