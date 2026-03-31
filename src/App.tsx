
import './App.css'
import AuthButtons from "@components/AuthButtons"
import Layout from "@components/Layout"
import { AuthProvider } from "@context/auth/AuthProvider"
import { ThemeProvider } from "@context/theme/ThemeProvider"
import { useAuth } from "@hooks/useAuth"
import Dashboard from "./pages/Dashboard"

const AppContent = () => {
  const { state } = useAuth();

  return state.isLoggedIn ? <Dashboard /> : <AuthButtons />;
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Layout>
          <AppContent />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App