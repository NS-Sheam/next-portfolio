
import { generateMetaDatas } from "@/components/utils";
import BlogCard from "../../../components/BlogCard";
import { BlogFunction } from "@/components/utils/blogFn";
export const metadata = await generateMetaDatas(
    "Blogs",
    "Read my blogs on web development, JavaScript, React, Node.js, and more. I write about my experiences and learnings as a developer.",
    null,
    "contact"

)

const Blogs = async () => {
    const { blogs } = await BlogFunction.allBlogs();




    // const navigation = useNavigation();
    // if (navigation.state === "loading") {
    //     return <div className="flex flex-col lg:flex-row gap-5 py-4 md:py-8">
    //         {
    //             Array.from({ length: 3 }).map((_, index) => (
    //                 <div key={index} className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto h-64">
    //                     <div className="animate-pulse space-x-4">
    //                         <div className=" bg-slate-700 h-32 w-full "></div>
    //                         <div className="flex-1 space-y-6 py-4">
    //                             <div className="h-2 bg-slate-700 rounded"></div>
    //                             <div className="space-y-3">
    //                                 <div className="grid grid-cols-3 gap-4">
    //                                     <div className="h-2 bg-slate-700 rounded col-span-2"></div>
    //                                     <div className="h-2 bg-slate-700 rounded col-span-1"></div>
    //                                 </div>
    //                                 <div className="h-2 bg-slate-700 rounded"></div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             ))
    //         }
    //     </div>
    // }
    return (
        <div className="bg-bandTernary space-y-6 inner-container py-8 lg:pb-16 lg:pt-0 ">

            <h1 className=" font-extrabold banner-name-font text-6xl text-center">My Blogs</h1>
            <p className={`text-white text-justify md:text-center w-full md:w-3/4 mx-auto pb-4 md:pb-6 lg:pb-8`}>Browse through my portfolio to explore a diverse range of projects that demonstrate my skills in web development. From interactive React applications to functional JavaScript projects and visually appealing HTML/CSS interfaces, you will find a showcase of my expertise in various web technologies.</p>
            <div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-end mx-auto my-5 gap-5 -mt-8 ">
                    {blogs?.map(blog => <BlogCard key={blog._id} blog={blog} />)}
                </div>
            </div>

        </div>
    );
};

export default Blogs;