
import { generateMetaDatas } from "@/components/utils";
import BlogCard from "../../../components/BlogCard";
import { BlogFunction } from "@/components/utils/blogFn";
import BlogsLoader from "@/components/BlogsLoader";
export const metadata = await generateMetaDatas(
    "Blogs",
    "Read my blogs on web development, JavaScript, React, Node.js, and more. I write about my experiences and learnings as a developer.",
    null,
    "contact"

)

const Blogs = async () => {
    const { blogs, loading } = await BlogFunction.allBlogs();

    return (
        <div className="bg-bandTernary space-y-6 inner-container py-8 lg:pb-16 lg:pt-0 ">

            <h1 className=" font-extrabold banner-name-font text-6xl text-center">My Blogs</h1>
            <p className={`text-white text-justify md:text-center w-full md:w-3/4 mx-auto pb-4 md:pb-6 lg:pb-8`}>Browse through my portfolio to explore a diverse range of projects that demonstrate my skills in web development. From interactive React applications to functional JavaScript projects and visually appealing HTML/CSS interfaces, you will find a showcase of my expertise in various web technologies.</p>
            <div>
                {
                    loading ? <BlogsLoader /> :
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-end mx-auto my-5 gap-5 -mt-8 ">
                            {blogs?.map(blog => <BlogCard key={blog._id} blog={blog} />)}

                        </div>
                }
            </div>

        </div>
    );
};

export default Blogs;
