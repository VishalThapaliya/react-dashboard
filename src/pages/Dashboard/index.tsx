import Navbar from "@components/Navbar";
import PostList from "@components/PostList";
import { useAuth } from "@hooks/useAuth";

const Dashboard = () => {
    const { state } = useAuth();

  return (
    <>
        <Navbar />
        
        <div className="bg-white dark:bg-gray-800 p-6 rounnded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Welcome back {state.user?.name}</h2>

            <p className="text-sm text-gray-500 mb-4">
                {state.user?.email}
            </p>

            <PostList />
        </div>
    </>
  );
};

export default Dashboard;