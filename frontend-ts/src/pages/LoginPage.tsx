import React, { useState } from 'react';
import { useDispatch } from '../store/hooks'; // Импортируем кастомный хук
import { fetchUserByUsername } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const resultAction = await dispatch(fetchUserByUsername(username));

        if (fetchUserByUsername.fulfilled.match(resultAction)) {
            navigate('/');
        } else {
            alert('User not found');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginPage;
