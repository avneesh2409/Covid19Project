import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/styles.module.css';
import { useSelector } from 'react-redux';

const NavMenu = () => {
    const state = useSelector(state => state.UserReducer);
        return (
            <header>
                <nav className={styles.navWrapper}>
                    <div className={styles.navContainer}>
                        <ul className={styles.ulNavContainer}>
                            {
                                (state.token) ?
                                    <>
                                        <Link className={styles.anchorStyle} to="/home">Home</Link>
                                    </>
                                    : <Link className={styles.anchorStyle} to="/">Index</Link>
                            }
                            
                        </ul>
                        <ul className={styles.rightAlign}>
                            {
                                (!state.token) ? <>
                                    <Link className={styles.anchorStyle} to="/register">Register</Link>
                                    <Link className={styles.anchorStyle} to="/login">Login</Link>
                                </>
                                    :<Link className={styles.anchorStyle} to="/logout">Logout</Link>
                            }

                        </ul>
                    </div>
                   
                </nav>
            </header>
        );
}
export default NavMenu;