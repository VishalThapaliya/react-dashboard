import { useAuth } from "../../hooks/useAuth";

const AuthButtons = () => {
    const { state, login, logout } = useAuth();

    const mockUser = {
        name: "Bishal",
        email: "bibi@baba.com"
    }

    return (
        <>
            {state.isLoggedIn ? (
                <div>
                    <h2>Welcome back {state.user?.name}</h2>
                    <p>Email: {state.user?.email}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Please log in</h2>
                    <button onClick={() => login(mockUser)}>Login</button>
                </div>
            )}
        </>
    )
}

export default AuthButtons;