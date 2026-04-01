const PostSkeleton = () => {
    return (
        <div>
            {[...Array(10)].map((_, i) => (
                <div key={i} className="p-4 rounded bg-gray-200 dark:bg-gray-700 animate-pulse">
                    <div className="h-4 rounded bg-gray-300 dark:bg-gray-600 w-3/4 mb-2"></div>
                    <div className="h-4 rounded bg-gray-300 dark:bg-gray-600 w-1/2"></div>
                </div>
            ))}
        </div>
    )
};

export default PostSkeleton;