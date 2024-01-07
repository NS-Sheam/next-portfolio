import { BlogFunction } from '@/components/utils/blogFn';
import React from 'react';

const SingleBlog = async () => {
    const { blogs, loading } = await BlogFunction.allBlogs();
    return (
        <div>
            <h1>SingleBlog</h1>
        </div>
    );
};

export default SingleBlog;