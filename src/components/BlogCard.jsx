import moment from "moment";
import Image from "next/image";
import { useGlovalContext } from "@/app/Provider/GlovalContext";
import Link from "next/link";

const BlogCard = ({ blog }) => {
    const { theme } = useGlovalContext();
    return (
        <div className={`blog-card card bg-base-100 shadow-black text-left h-full p-5 rounded-lg`}>
            <figure>
                <Image src={blog?.image} alt={`blog-${blog._id}`} width={80} height={64} className="rounded-xl w-full object-cover"
                />
            </figure>
            <div className="card-body space-y-2 mt-2">
                <p className="font-semibold">{moment(blog.createdAt).format('MMMM DD YYYY')}</p>
                <h2 className="card-title">{blog?.heading}</h2>
                <div className="card-actions">
                    <Link href={`/blog/${blog?._id}`}>
                        <button className={`px-3 py-2 text-white gradient-btn ${theme === "dark" && "border-2 border-white"}  font-bold rounded-md ms-auto `}>Read Blog</button>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default BlogCard;
