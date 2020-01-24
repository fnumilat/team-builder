import React from 'react';
import '../App.css'

const Notes = props => {
    return (
      <div className="note-list">
        {props.members.map(member => (
          <div className="note" key={member.id}>
                <h1>Name: {member.name}</h1>
                <h1>Email: {member.email}</h1>
                <h1>Role: {member.role}</h1>
          </div>
        ))}
      </div>
    );
  };
  
  export default Notes;
  