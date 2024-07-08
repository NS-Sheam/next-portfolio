const allBlogs = async () => {
  let loading = true;
  try {
    const res = await fetch(
      // `${process.env.NEXT_PUBLIC_PUBLIC_HOSTING_URL}/allblog`,
      process.env.NEXT_PUBLIC_MEDIUM_URL,
      {
        cache: "no-cache", // change data if it is changed in the server
      },
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
    const allBlogsRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/blogs`,
    );
    const allBlogData = await allBlogsRes.json();

    const filteredBlogs =
      allBlogData?.data?.filter((blog) => blog._id !== blogId) || [];

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/blogs/${blogId}`,
    );
    const singleBlog = (await res.json()) || {};
    loading = false;
    return { filteredBlogs, singleBlog: singleBlog?.data, loading };
  } catch (error) {
    console.log("error response", error);

    loading = false;
    throw error;
  }
};

const allBlogsFromServer = async () => {
  let loading = true;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blogs`, {
      cache: "no-cache",
    });
    
    const blogs = await res.json();

    loading = false;
    return { blogs: blogs?.data || [], loading };
  } catch (error) {
    loading = false;
    throw error;
  }
};

export const BlogFunction = {
  allBlogs,
  loadBlogs,
  allBlogsFromServer,
};
