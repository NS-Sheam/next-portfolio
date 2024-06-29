
import moment from "moment";
import Image from "next/image";
import Link from "next/link";


// function extractImageUrl(text) {
//   // Regular expression pattern to find image URLs
//   var pattern = /<img.*?src=["'](.*?)["']/;

//   // Search for the pattern in the text
//   var match = pattern.exec(text);

//   if (match) {
//     // Return the matched URL
//     return match[1];
//   } else {
//     // Return null if no match found
//     return null;
//   }
// }

const BlogCard = ({ blog }) => {

  return (
    <div
      className={`card bg-base-100 shadow-sm md:shadow-md lg:shadow-lg shadow-slate-500  text-left h-60 border-2 w-full mx-auto  rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl`}
    >
      <div className="blog-card space-y-2 relative h-full">
        {/* <Image
          src={blog?.thumbnail || extractImageUrl(blog?.description)}
          alt={`blog-${blog.guid}`}
          width={400}
          height={200}
          className="rounded-xl h-60 mx-auto w-full"
        /> */}
        <Image
          src={blog?.image}
          // alt={`blog-${blog.guid}`}
          alt={`blog-${blog?.title}`}
          width={400}
          height={200}
          className="rounded-xl h-60 mx-auto w-full"
        />
        <div className="details bg-gradient-to-tr from-bandPrimary to-bandSecondary absolute h-4/5 p-4 w-full space-y-3">
          <p className="font-semibold text-bandYellow">
            {/* {moment(blog.pubDate).format("MMMM DD YYYY")} */}
            {moment(blog?.publisheDate).format("MMMM DD YYYY")}
          </p>
          <h2 className="card-title text-white font-extrabold text-sm">
            {blog?.title}
          </h2>
          <div className="card-actions">
            {/* <Link href={blog.link}> */}
            <Link href={`/blogs/${blog?._id}`}>
              <button
                className={`btn button-container-dark text-bandTernary transform duration-300 lg:p-4 font-bold `}
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
