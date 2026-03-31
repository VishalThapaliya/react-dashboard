import { useAuth } from "@hooks/useAuth";

const AuthButtons = () => {
    const { login } = useAuth();

    const mockUser = {
        name: "Bishal",
        email: "bibi@baba.com"
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-sm text-center">
                <h2 className="text-xl font-semibold mb-4">Please Log in</h2>
                
                <button 
                    onClick={() => login(mockUser)}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Login
                </button>
            </div>

        </div>
    )
}

export default AuthButtons;