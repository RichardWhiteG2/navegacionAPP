

import React, { createContext } from "react";

//definir como luce, que información tendré aqui


export interface AuthState{
    isLoggedIn: boolean;
    username?: String;
    favoriteIcon?: string;
}

//Estado inicial

export const authInitialState: AuthState={
    isLoggedIn:false,
}


//Lo usaremos para decirle a React ómo luce y que expone el context

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
}

//Crear el context
export const AuthContext= createContext({} as AuthContextProps);

//Componente que provee el estado 
//Componente de orden superior

export const AuthProvider = ({ children }: any) =>{
    return (
        <AuthContext.Provider value={{
                authState: authInitialState,
                signIn: () => {}
            }}>
            { children }
        </AuthContext.Provider>
    )
}