import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div
      className={`card bg-base-100 shadow-sm md:shadow-md lg:shadow-lg shadow-slate-500  text-left h-60 border-2 w-full mx-auto  rounded-lg `}
    >
      <div className="blog-card space-y-2 relative h-full">
        <Image
          src={blog?.image}
          alt={`blog-${blog._id}`}
          width={400}
          height={200}
          className="rounded-xl  h-60 mx-auto w-full"
        />
        <div className="details bg-bandPrimary bg-opacity-80 absolute h-4/5 p-4 w-full space-y-2">
          <p className="font-semibold text-bandYellow">
            {moment(blog.createdAt).format("MMMM DD YYYY")}
          </p>
          <h2 className="card-title text-white font-extrabold text-sm lg:text-xl">
            {blog?.heading}
          </h2>
          <div className="card-actions">
            <Link href={`/blog/${blog?._id}`}>
              <button
                className={`btn button-container-dark  text-bandTernary transform duration-300 lg:p-4 font-bold `}
              >
                Read Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
