import React, { useState } from 'react';

const Form = props => {
    

    const [member, setMember] = useState({
        name: ''
    })
    const handleChanges = e => {
        setMember({name: e.target.value})
        console.log(member);
    }
    // const submitMember = e => {
    //     e.preventDefault();
    //     props.addNewMember(member);
    // }
    return (
        
        // <form onSubmit={submitMember}>
<form>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" onChange={handleChanges}/>
            <br/>
            <label htmlFor="name">Email: </label>
            <input id="email" type="email" onChange={handleChanges}/>
            <br/>
            <label htmlFor="role">Role: </label>
            <input id="role" type="select" onChange={handleChanges}/>
            <br/>
            <button type="submit">Add Member</button>
        </form>
    )
};

export default Form;