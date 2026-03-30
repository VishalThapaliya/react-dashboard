import { useAuth } from "../../hooks/useAuth"

const Navbar = () => {
    const { state, logout } = useAuth();

  return (
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">Dashboard</h1>

        <div className="flex items-center gap-4">
            {/* implement Theme toggle and import here */}

            {state.isLoggedIn && (
                <>
                    <span className="text-sm">{state.user?.name}</span>

                    <button 
                        onClick={logout}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Logout
                    </button>
                </>
            )}
        </div>
    </div>
  )
}

export default Navbar