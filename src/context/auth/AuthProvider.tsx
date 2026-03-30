import { useEffect, useReducer, type ReactNode } from "react";
import { AuthContext, type AuthAction, type AuthState, type User } from "./AuthContext";

// Inital state
const getInitialState = (): AuthState => {
    try {
        const stored = localStorage.getItem("auth");

        if(!stored || stored === "undefined") {
            return {
                user: null,
                isLoggedIn: false
            }
        }

        return JSON.parse(stored);
    } catch {
        return {
            user: null,
            isLoggedIn: false
        }
    }
};

// Reducer function
const authReducer = (state: AuthState, action: AuthAction) => {
    switch(action.type) {
        case "LOGIN":
            return {
                user: action.payload,
                isLoggedIn: true
            }

        case "LOGOUT":
            return {
                user: null,
                isLoggedIn: false
            }

        default: 
            return state;
    }
}


// Provider props
type AuthProviderProps = {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, undefined, getInitialState);

    const login = (user: User) => {
        dispatch({ type: "LOGIN", payload: user });
    }

    const logout = () => {
        dispatch({ type: "LOGOUT" });
    }

    useEffect(() => {
        localStorage.setItem("auth", JSON.stringify(state));
    }, [state]);

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};