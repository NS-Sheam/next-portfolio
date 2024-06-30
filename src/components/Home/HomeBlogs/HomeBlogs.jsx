
import SectionTitle from "../../../components/SectionTitle";
import BlogCard from "../../../components/BlogCard";
// import { BlogFunction } from "@/components/utils/blogFn";
// import BlogsLoader from "@/components/BlogsLoader";

const HomeBlogs = async () => {
  // const { blogs, loading } = await BlogFunction.allBlogs();
  // const { loading } = await BlogFunction.allBlogs();

  const res = await fetch(
    `${process?.env?.NEXT_PUBLIC_SERVER_URL}/blogs`,
    {
      cache: "no-cache",
    }

  );
  const serverBlogs = await res?.json() || {};
  console.log(serverBlogs);


  return (
    <section className="bg-gradient-to-tr bg-bandTernary  py-8 lg:p-14">
      <div className="container mx-auto inner-container space-y-4">
        <SectionTitle heading="Blogs" punchLine="Read my blogs" />
        {
          // loading ? <BlogsLoader /> :
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-end mx-auto my-5 gap-5 -mt-8 ">
            {/* {blogs?.slice(0, 3).map(blog => <BlogCard key={blog._id} blog={blog} />)} */}
            {

              serverBlogs?.data?.slice(0, 3).map(blog => <BlogCard key={blog._id} blog={blog} />)}

          </div>
        }
      </div>
    </section>
  );
};

export default HomeBlogs;
