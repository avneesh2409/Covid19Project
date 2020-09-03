import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/register.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAction } from '../../store/actions/UserAction';
import Loader from '../../helper/loader';

const Register = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState('')
    const { loading, error:RegError } = useSelector(state => state.UserReducer);
    const initial = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        contact: '',
        roleId:''
    }
    const [state, setState] = useState(initial)
    const changeHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        if (state.password) {
            if (e.target.name === "confirm" && e.target.value === state.password) {
                setError('');
            }
            else if (e.target.name === "confirm") {
                setError("password does not match");
            }
        }
        else {
            setError('');
        }
        
    }
    const submitHandler = () => {
        if (state.name && state.email && state.password && state.contact) {
            if (validateEmail(state.email)) {
                setError('');
                if (state.password.length >= 6) {
                    dispatch(registerUserAction({
                        name: state.name,
                        email: state.email,
                        password: state.password,
                        contact: state.contact,
                        roleId:parseInt(state.roleId)
                    }))
                    setState(initial)
                }
                else {
                    setError('length of the password should be atleast 6 character long');
                }
            }
        }
        else {
            setError('All the fields are required');
        }
    }
    function validateEmail(email) {
        var atposition = email.indexOf("@");
        var dotposition = email.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
            setError("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
            return false;
        }
        else {
            setError('')
            return true;
        }
      
    }
    return (
        <div className={styles.wrapper}>
            {loading ? <Loader /> : null}
            <span className={styles.danger}>{RegError ? "Unable to register" : null}</span>
            <div className={styles.container}>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" value={state.name} onChange={changeHandler} />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" value={state.email} onChange={changeHandler} />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={state.password} onChange={changeHandler} />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="confirm" value={state.confirm} onChange={changeHandler} /><span className={styles.danger}>{error ? error : null}</span>

                <label htmlFor="roleId">Select Role:</label>
                <select name="roleId" onChange={changeHandler}>
                    <option value="1">Admin</option>
                    <option value="2">Doctor</option>
                    <option value="3">Patient</option>
                    <option value="4">Phlebotomist</option>
                    <option value="5">Lab Technician</option>
                </select>

                <label htmlFor="contact"><b>Contact</b></label>
                <input type="text" placeholder="Enter Contact Number....." name="contact" value={state.contact} onChange={changeHandler} />

                <hr />
                <button type="submit" className={styles.registerbtn} onClick={submitHandler} >Register</button>
            </div>

            <div className={styles.container,styles.signin}>
                    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
                </div>
        </div>
    )
}

export default Register;