import React, { useState } from 'react';
import Cards from './Cards';

const Form = props => {
    
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    })
    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value});
        console.log(member);
    }
    const submitMember = e => {
        e.preventDefault();
        props.addNewCard(member);
        setMember({name: '', email: '', role: ''})
    }
    return (
        
        <form onSubmit={submitMember}>
            <label htmlFor="name">Name: </label>
            <input id="name" type="text" name="name" placeholder="Name" value={member.name} onChange={handleChanges}/>
            <br/>
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" name="email" placeholder="Email" value={member.email} onChange={handleChanges}/>
            <br/>
            <label htmlFor="role">Role: </label>
            <input id="role" type="select" name="role" placeholder="Role" value={member.role} onChange={handleChanges}/>
            <br/>
            <button type="submit">Add Member</button>
        </form>
        
    );
};

export default Form;