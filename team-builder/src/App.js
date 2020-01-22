import React, { useState } from 'react';
import Form from './Components/form'

function App() {
const [members, setMembers] = useState([
  {
    id: 1,
    name: "Ali",
    role: "designer"
  }
]);

const addNewMember = member => {
  const newMember = {
    id: Date.now(),
    name: member.name,
    role: member.role
  };

  setMembers([...members, newMember])

};

  return (
    <div >
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;
