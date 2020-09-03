import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LogoutUserAction } from '../../store/actions/UserAction';

const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LogoutUserAction())
    },[])
    return (
        <>
        </>
    )
}

export default Logout;