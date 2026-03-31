import { useEffect, useState } from "react";

// Post type
type Post = {
    id: number;
    title: string;
}

const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data.slice(0, 6)));
    }, []);

    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {posts.map(post => (
                <div key={post.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-medium">{post.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default PostList;