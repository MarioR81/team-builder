import React, { useState } from 'react';

const Form = props => {
    

    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })
    const handleChanges = e => {
        setMember({name: e.target.value})
        console.log(member);
    }
    const submitMember = e => {
        e.preventDefault();
        props.addNewCard(member);
    }
    return (
        
        <form onSubmit={submitMember}>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" name="name" placeHolder="Name" onChange={handleChanges}/>
            <br/>
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" name="email" placeHolder="Email" onChange={handleChanges}/>
            <br/>
            <label htmlFor="role">Role: </label>
            <input id="role" type="select" name="role" placeHolder="Role" onChange={handleChanges}/>
            <br/>
            <button type="submit">Add Member</button>
        </form>
    );
};

export default Form;