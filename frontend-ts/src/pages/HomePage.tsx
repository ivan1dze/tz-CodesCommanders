import React from 'react';
import { useGetPostsQuery } from '../store/apiSlice';
import PostGrid from '../components/PostGrid';
import Header from '../components/Header';

const HomePage = () => {
    const { data: posts, error, isLoading } = useGetPostsQuery({});

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error occurred: {error.toString()}</div>;

    return (
        <div>
            <Header />
            {posts && <PostGrid posts={posts} />}
        </div>
    );
};

export default HomePage;
