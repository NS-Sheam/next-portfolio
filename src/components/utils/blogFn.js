const allBlogs = async () => {
  let loading = true;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PUBLIC_HOSTING_URL}/allblog`,
    );
    const blogs = await res.json();
    loading = false;

    return { blogs, loading };
  } catch (error) {
    loading = false;
    throw error;
  }
};

export const BlogFunction = {
  allBlogs,
};
