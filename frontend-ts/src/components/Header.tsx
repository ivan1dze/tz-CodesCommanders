import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/userSlice';
import styles from '../pages/css/Header.module.css';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.users.user);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className={styles.header}>
            <h1>Best Application</h1>
            {user ? (
                <button className={styles.button} onClick={handleLogout}>Log Out</button>
            ) : (
                <a href="/login" className={styles.button}>Sign In</a>
            )}
        </header>
    );
};

export default Header;
