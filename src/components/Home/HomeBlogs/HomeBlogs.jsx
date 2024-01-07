
import SectionTitle from "../../../components/SectionTitle";
import BlogCard from "../../../components/BlogCard";
import { BlogFunction } from "@/components/utils/blogFn";
import BlogsLoader from "@/components/BlogsLoader";

const HomeBlogs = async () => {
  const { blogs, loading } = await BlogFunction.allBlogs();

  return (
    <div className="bg-gradient-to-tr bg-bandTernary inner-container py-8 lg:p-14 space-y-4">
      <SectionTitle heading="Blogs" punchLine="Read my blogs" />
      {
        loading ? <BlogsLoader /> :
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-end mx-auto my-5 gap-5 -mt-8 ">
            {blogs?.slice(0, 3).map(blog => <BlogCard key={blog._id} blog={blog} />)}

          </div>
      }
    </div>
  );
};

export default HomeBlogs;
