import {REGISTER_USER_REQUEST, REGISTER_USER_RESPONSE, REGISTER_USER_ERROR, LOGIN_USER_REQUEST, LOGIN_USER_RESPONSE, LOGIN_USER_ERROR, LOGOUT_USER, CLEAR_LOG_DATA } from '../constants'

export const UserInitial = {
    loading: false,
    error: '',
    data: null,
    logLoading: false,
    logError: '',
    token: null
}
const UserReducer = (state = UserInitial, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REGISTER_USER_RESPONSE:
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                logLoading: true
            }
        case LOGIN_USER_RESPONSE:
            return {
                ...state,
                logLoading: false,
                token: action.data
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                logLoading: false,
                logError: action.error
            }
        case LOGOUT_USER:
            return {
                ...UserInitial
            }
        case CLEAR_LOG_DATA:
            return {
                ...state,
                logError: '',
                logLoading: false,
                loading: false,
                error:''
            }
        default: return state;
    }
}
export default UserReducer
