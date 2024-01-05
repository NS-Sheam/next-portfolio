"use client";
import SectionTitle from "../../../components/SectionTitle";
import BlogCard from "../../../components/BlogCard";
import useBlogsData from "@/app/hooks/useBlogsData";

const HomeBlogs = () => {
  const { blogs } = useBlogsData();
  return (
    <div className="bg-gradient-to-tr bg-bandTernary inner-container min-h-screen py-8 lg:p-14 ">
      <SectionTitle heading="Blogs" punchLine="Read my blogs" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-end mx-auto my-5 gap-5 pt-6">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;
