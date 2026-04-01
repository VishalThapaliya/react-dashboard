import { useEffect, useState } from "react";
import { fetchPosts, type Post } from "../../services/postService";
import PostSkeleton from "./PostSkeleton";

const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadPosts = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchPosts();
            setPosts(data);
        } catch (error) {
            setError(`Something went worng while fetching posts: ${error}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    // loading state
    if(loading) return <PostSkeleton />

    // error state
    if(error) {
        return (
            <div className="text-center">
                <p className="text-red-500 mb-3">{error}</p>
                <button 
                    onClick={loadPosts}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Retry
                </button>
            </div>
        )
    };

    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {posts.map(post => (
                <div 
                    key={post.id} 
                    className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                    <h3 className="font-bold mb-6 text-amber-500">{post.title.toUpperCase()}</h3>
                    <p className="">{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList;