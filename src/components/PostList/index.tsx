import { useEffect, useState } from "react";

// Post type
type Post = {
    id: number;
    title: string;
    body: string;
}

const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            setPosts(data.slice(0, 10))
            setLoading(false);
        });
    }, []);

    if(loading) return <p>Loading Posts...</p>;

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