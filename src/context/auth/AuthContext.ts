import { createContext } from "react";

// User type
export type User = {
    name: string,
    email: string
}

// State type
export type AuthState = {
    user: User | null;
    isLoggedIn: boolean;
}

// Action type
export type AuthAction = { type: "LOGIN", payload: User } | { type: "LOGOUT" };

// Context type
export type AuthContextType = {
    state: AuthState;
    login: (user: User) => void;
    logout: () => void;
}

// Create context
export const AuthContext = createContext<AuthContextType | null>(null);