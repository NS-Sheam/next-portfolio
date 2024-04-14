const allBlogs = async () => {
  let loading = true;
  try {
    const res = await fetch(
      // `${process.env.NEXT_PUBLIC_PUBLIC_HOSTING_URL}/allblog`,
      process.env.NEXT_PUBLIC_MEDIUM_URL,
    );
    const mediumBlogs = await res.json();

    const blogs = mediumBlogs?.items || [];

    loading = false;

    return { blogs, loading };
  } catch (error) {
    loading = false;
    throw error;
  }
};

const loadBlogs = async (blogId) => {
  let loading = true;
  try {
    const allBlogData = await allBlogs();
    const filteredBlogs = allBlogData?.blogs?.filter(
      (blog) => blog._id !== blogId,
    );
    const res = await fetch(
      `${process?.env?.NEXT_PUBLIC_PUBLIC_HOSTING_URL}/blog/${blogId}`,
    );
    const singleBlog = (await res.json()) || {};
    loading = false;
    return { filteredBlogs, singleBlog, loading };
  } catch (error) {
    console.log("error response", error);

    loading = false;
    throw error;
  }
};

export const BlogFunction = {
  allBlogs,
  loadBlogs,
};
