export type Post = {
    id: number;
    title: string;
    body: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if(!response.ok) throw new Error("Failed to fetch posts");

    const data = await response.json();

    return data.slice(0, 10);
};