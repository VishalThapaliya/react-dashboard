import { useAuth } from "@hooks/useAuth";

const AuthButtons = () => {
    const { state, login, logout } = useAuth();

    const mockUser = {
        name: "Bishal",
        email: "bibi@baba.com"
    };

    return (
        <div className="flex items-center justify-center h-screen">
            { state.isLoggedIn ? (
                <div className="bg-white dark:bg-gray-800 p-6 rounnded-xl shadow">
                    <h2 className="text-lg font-semibold mb-2">Welcome back {state.user?.name}</h2>

                    <p className="text-sm text-gray-500 mb-4">
                        {state.user?.email}
                    </p>

                    <button 
                        onClick={logout}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition" 
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm text-center">
                    <h2 className="text-xl font-semibold mb-4">Please Log in</h2>
                    
                    <button 
                        onClick={() => login(mockUser)}
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </div>
            )}


        </div>
    )
}

export default AuthButtons;