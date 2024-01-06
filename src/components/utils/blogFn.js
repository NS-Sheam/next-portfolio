const allBlogs = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PUBLIC_HOSTING_URL}/allblog`,
    );
    const blogs = await res.json();

    return { blogs };
  } catch (error) {
    throw error;
  }
};

export const BlogFunction = {
  allBlogs,
};
