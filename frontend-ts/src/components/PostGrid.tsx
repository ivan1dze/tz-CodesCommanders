import React from 'react';
import styles from "../pages/css/PostGrid.module.css";

interface Post {
    id: number;
    title: string;
    body: string;
}

interface PostGridProps {
    posts: Post[];
}

const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {posts.map((post) => (
                    <div key={post.id} className={styles.card}>
                        <img src="https://via.placeholder.com/150" alt="Post image" />
                        <h3>{post.title}</h3>
                        <p>{post.body.substring(0, 50)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostGrid;
