import React from 'react';
import { useGetPostsQuery } from '../store/apiSlice';
import PostGrid from '../components/PostGrid';

const HomePage = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery({});

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {error.toString()}</div>;

    return (
        <div>
            <h1>Best Application</h1>
            {posts && <PostGrid posts={posts} />}
        </div>
    );
};

export default HomePage;
