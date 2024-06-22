    import React, { useState } from 'react'
    import data from './data'

    const Adduser = () => {
        const [name, setName] = useState('');
        const [users, setUsers] = useState(data);
        const handleform = (e) => {
            e.preventDefault();
           if (!name) return;
           const fakeId = Date.now();
           const newUser = { id : fakeId, name};
           const updatedUser = [...users, newUser];
           setUsers(updatedUser);
           setName('');
        }
        const removeuser = (id) => {
            const updatedUser = users.filter((person)=>person.id !== id);
            setUsers(updatedUser);
        }
    return (
        <div>
            <form className='form-name' onSubmit={handleform}>
                    <h1>Add Users</h1>
                <div className='form-row'>
                    <label htmlFor='name' >Add User</label>
                    <input
                     type='text'
                     id='name'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     />
                </div>
                <div className='clear' style={{marginTop:'2rem'}}></div>
                <button className='btn'>Add User</button>
            </form>
                <h2>Show User Details</h2>
                {users.map((user) => (
                    <div key={user.id}>
                        <div style={{display:'inline-flex',gap:'2rem',margin:'5px 5px 5px 5px'}}>
                            <div style={{textTransform:'capitalize'}}>Name: {user.name}</div>
                            <button onClick={() => removeuser(user.id)}>Remove</button>
                        </div>
                    </div>
                ))} 
        </div>
    );
    };

    export default Adduser