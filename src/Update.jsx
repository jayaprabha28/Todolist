import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';

function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.find(user => user.id === Number(id)); // Find user by ID

    if (!existingUser) {
        return <p>User not found</p>; // Handle case when user is not found
    }

    const { name, email } = existingUser;
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: Number(id), // Ensure ID is a number
            name: uname,
            email: uemail
        }));
        navigate('/'); // Redirect after update
    };

    return (
        <div>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
                <div className='w-50 border bg-secondary text-white p-5'>
                    <h3>Update User</h3>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' className="form-control" placeholder='Enter name'
                                value={uname} onChange={e => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name='email' className='form-control' placeholder='Enter email'
                                value={uemail} onChange={e => setEmail(e.target.value)} />
                        </div><br />
                        <button className='btn btn-info'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Update;
