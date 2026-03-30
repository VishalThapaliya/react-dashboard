import { useAuth } from "../../hooks/useAuth"

const Navbar = () => {
    const { state, logout } = useAuth();

  return (
    <div>
        <h1>Dashboard</h1>

        <div>
            {/* implement Theme toggle and import here */}

            {state.isLoggedIn && (
                <>
                    <span>{state.user?.name}</span>

                    <button onClick={logout}>Logout</button>
                </>
            )}
        </div>
    </div>
  )
}

export default Navbar