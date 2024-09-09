import React, { useState } from 'react';
import { useDispatch } from '../store/hooks';
import { fetchUserByUsername } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './css/LoginPage.module.css';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const resultAction = await dispatch(fetchUserByUsername(username));

        if (fetchUserByUsername.fulfilled.match(resultAction)) {
            toast.success('Login successful!');
            navigate('/');
        } else {
            toast.error('User not found');
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Submit</button>
            </form>
            <ToastContainer className={styles.toastContainer} />
        </div>
    );
};

export default LoginPage;
