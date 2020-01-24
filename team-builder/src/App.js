import React, { useState } from 'react';
import Form from './Components/form';
import Notes from './Components/note';

function App() {
const [members, setMembers] = useState([
  {
    id: 1,
    name: "Ali",
    email: "Ali@gmail.com",
    role: "designer"
  }
]);

const addNewMember = member => {
  const newMember = {
    id: Date.now(),
    name: member.name,
    email: member.email,
    role: member.role
  };

  setMembers([...members, newMember])

};

  return (
    <div >
      <Form addNewMember={addNewMember}/>
      <Notes members={members}/>
    </div>
  );
}

export default App;
