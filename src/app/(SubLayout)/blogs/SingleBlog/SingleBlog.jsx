import { Link, useLoaderData } from "react-router-dom";
import Header from "../../shared/Header/Header";
import { useContext } from "react";
import { ThemeContext } from "../../../layouts/Main";
import moment from "moment/moment";
import MetaDecorator from "../../../meta/MetaDecorator";

const SingleBlog = () => {
    const { filteredBlogs, singleBlog } = useLoaderData();
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <MetaDecorator
                title={singleBlog?.title}
                description={singleBlog?.title}
                imageUrl={singleBlog?.image}
                imageAlt={singleBlog?.title}
            />
            <div className=" bg-gradient-to-r from-bandPrimary via-bandSecondary to-bandTernary ">
                <Header />
            </div>
            <div className={`flex flex-col-reverse lg:flex-row justify-center items-start gap-6 lg:gap-10 inner-container py-4 lg:py-8`}>
                <div className="lg:w-1/3">
                    {
                        filteredBlogs.map(blog => <Link key={blog?._id} to={`/blog/${blog?._id}`}>
                            <div className="flex justify-center items-center gap-4 border rounded-lg my-2 px-4">
                                <img className="w-40" src={blog?.image} alt="" />
                                <div className="p-4">
                                    <p className="font-semibold">{moment(blog.createdAt).format('MMMM DD YYYY')}</p>
                                    <h3 className="">{blog?.title}</h3>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
                <div className={`${theme === "light" ? "bg-white" : "bg-slate-400"} text-bandTernary lg:w-2/3 p-4 lg:p-6 w-full space-y-4 border rounded-lg shadow-lg `}>
                    <img className="mx-auto " src={singleBlog?.image} alt="" />
                    <p className="font-semibold">{moment(singleBlog?.createdAt).format('MMMM DD YYYY')}</p>
                    <h1 className="text-xl lg:text-3xl font-bold ">{singleBlog?.heading}</h1>
                    <div dangerouslySetInnerHTML={{ __html: singleBlog?.description }} ></div>
                </div>
            </div>

        </>
    );
};

export default SingleBlog;