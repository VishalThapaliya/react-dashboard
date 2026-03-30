import { useEffect, useState } from 'react'
import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {
    const { state } = useAuth();
    const [posts, setPosts] = useState<string[]>([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                
                if(!response.ok) {
                    throw new Error("Couldn't fetch from API");
                }

                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error("Error while fetching posts: ", error);
            }
        }

        fetchPosts();
    });

  return (
    <div>
        <h1>Dashboard</h1>
        <p>Welcome {state.user?.name}</p>
    </div>
  )
}

export default Dashboard