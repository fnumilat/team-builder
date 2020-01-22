import React, { useState } from 'react';
import '../App.css'


function Form(props) {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChange = event => {
        setMember({
            ...member,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
        console.log(newMember)

        setMember({name: "", email: "", role: ""});
    };

  return (
    <div className="App">
        <h1 className="App-Header">New Team Member's Form</h1>
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <div>
                    <label className="label">Name</label>
                    <input className="input" onChange={handleChange} id="name" type="text" name="name" value={member.name}/>
                </div>

                <div>
                    <label className="label">Email </label>
                    <input className="input" onChange={handleChange} id="email" type="text" name="email" value={member.email}/>
                </div>

                <div>
                    <label className="label">Role</label>
                    <input className="input-3" onChange={handleChange} id="role" type="text" name="role" value={member.role}/>
                </div>
           </div>
          <button className="button" name="submitButton" type="submit">Add New Team Member</button>
        </form>
    </div>
  );
}

export default Form;
