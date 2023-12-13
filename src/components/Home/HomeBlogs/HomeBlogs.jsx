
"use client"
import SectionTitle from '../../../components/SectionTitle';
import BlogCard from '../../../components/BlogCard';
import { useGlovalContext } from '@/app/Provider/GlovalContext';
import useBlogsData from '@/app/hooks/useBlogsData';

const HomeBlogs = () => {
    // const { theme } = useGlovalContext();
    const theme = "light";
    const { blogs } = useBlogsData();
    return (
        <div
            className='bg-gradient-to-tr from-bandPrimary to-bandSecondary inner-container min-h-screen p-4 lg:p-6'>
            <div
                className={`w-full lg:w-4/5 mx-auto text-center p-4 lg:p-8 lg:my-8 ${theme == "light" ? "bg-white" : "bg-bandTernary"} rounded-2xl shadow-2xl`}>
                <SectionTitle
                    heading="Blogs"
                    paragraph=""
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-end mx-auto my-5 gap-5">
                    {blogs.slice(0, 3).map(blog => <BlogCard key={blog._id} blog={blog} />)}
                </div>
            </div>
        </div>
    );
};

export default HomeBlogs;