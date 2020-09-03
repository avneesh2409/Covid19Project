import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/register.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction, clearLogData } from '../../store/actions/UserAction';
import Loader from '../../helper/loader';

const Login = () => {
    const dispatch = useDispatch();
    const { logLoading, logError } = useSelector(state => state.UserReducer);
    const initial = {
        email: '',
        password:''
    }
    const changeHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {

        return () => {
            dispatch(clearLogData())  
        }
    },[])
    const submitHandler = (e) => {
        dispatch(loginUserAction(state));
        setState(initial)
    }
    const [state, setState] = useState(initial)
    return (
        <div className={styles.wrapper}>
            {logLoading ? <Loader /> : null }
            <span className={styles.danger}>{logError ? "Username or Password is wrong" : null}</span>
            <div className={styles.container}>
                <h1>Login</h1>
                <p>Login Here</p>
                <hr />
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={state.email} onChange={changeHandler} />
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={state.password} onChange={changeHandler} />
                <button className={styles.registerbtn} onClick={submitHandler}>Login</button>
            </div>

            <div className={styles.container, styles.signin}>
                <p>don't have an account? <Link to="/register">Sign up Here</Link>.</p>
            </div>
        </div>
    )
}

export default Login;