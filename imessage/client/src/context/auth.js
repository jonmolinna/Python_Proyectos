import React, { createContext, useReducer, useContext } from 'react';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

let username = null;
let messageID = null; // Grupo ID
let timeDestructor = 0;
let chatID = null; // message ID

const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                username: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        case 'SET_MESSAGE':
            return {
                ...state,
                messageID: action.payload
            }
        case 'REMOVE_MESSAGE':
            return {
                ...state,
                messageID: null
            }
        case 'SET_TIME':
            return {
                ...state,
                timeDestructor: action.payload
            }
        case 'REMOVE_TIME':
            return {
                ...state,
                timeDestructor: 0
            }
        case 'SET_CHAT':
            return {
                ...state,
                chatID: action.payload
            }
        default:
            return state
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { username, messageID, timeDestructor, chatID });

    return (
        <AuthDispatchContext.Provider value={dispatch}>
            <AuthStateContext.Provider value={state}>
                { children }
            </AuthStateContext.Provider>
        </AuthDispatchContext.Provider>
    )
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);