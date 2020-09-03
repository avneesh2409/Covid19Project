import { REGISTER_URL, REGISTER_USER_REQUEST,LOGIN_URL,LOGIN_USER_REQUEST,LOGIN_USER_ERROR,LOGIN_USER_RESPONSE, REGISTER_USER_RESPONSE, REGISTER_USER_ERROR, LOGOUT_USER, CLEAR_LOG_DATA } from "../constants"


export const registerUserAction = (payload) => {
    const options = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(payload)
    }
    return (dispatch) => {
        dispatch(registerUserRequest())
        fetch(REGISTER_URL, options).then(res => res.json())
            .then(json => dispatch(registerUserResponse(json)))
            .catch(err => dispatch(registerUserError(err.message)))
    }
}

export const registerUserRequest = () => {
    return {
        type: REGISTER_USER_REQUEST
    }
}
export const registerUserResponse = (data) => {
    if (data) {
        alert("successfully registered");
        return {
            type: REGISTER_USER_RESPONSE,
            data
        }
    }
    else {
        alert("unable to registered");
        return {
            type: REGISTER_USER_RESPONSE,
            data: null
        }
    }
}
export const registerUserError = (error) => {
    alert("unable to registered");
    return {
        type: REGISTER_USER_ERROR,
        error
    }
}




export const loginUserAction = (payload) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    }
    return (dispatch) => {
        dispatch(loginUserRequest())
        fetch(LOGIN_URL, options).then(res => res.json())
            .then(json => dispatch(loginUserResponse(json.token)))
            .catch(err => dispatch(loginUserError(err.message)))
    }
}

export const loginUserRequest = () => {
    return {
        type: LOGIN_USER_REQUEST
    }
}
export const loginUserResponse = (data) => {
    return {
        type: LOGIN_USER_RESPONSE,
        data
    }
}
export const loginUserError = (error) => {
    return {
        type: LOGIN_USER_ERROR,
        error
    }
}

export const LogoutUserAction = () => {
    return {
        type: LOGOUT_USER
    }
}
export const clearLogData = () => {
    return {
        type: CLEAR_LOG_DATA
    }
}
