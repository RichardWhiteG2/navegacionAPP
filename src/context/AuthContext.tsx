

import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

//definir como luce, que información tendré aqui


export interface AuthState{
    isLoggedIn: boolean;
    username?: String;
    favoriteIcon?: string;
}

//Estado inicial

export const authInitialState: AuthState={
    isLoggedIn:false,
    username: undefined,
    favoriteIcon:undefined,
}


//Lo usaremos para decirle a React ómo luce y que expone el context

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    
}

//Crear el context
export const AuthContext= createContext({} as AuthContextProps);

//Componente que provee el estado 
//Componente de orden superior

export const AuthProvider = ({ children }: any) =>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type:'signIn'});
    }

    //Esta funcion se le tiene que enviar a provider para que puedan tener acceso cualquier comonente
    const changeFavoriteIcon = ( iconName:string)=> {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    // Provider o context
    return (
        <AuthContext.Provider value={{
                authState,
                signIn,
                changeFavoriteIcon
            }}>
            { children }
        </AuthContext.Provider>
    )
}