const allBlogs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PUBLIC_HOSTING_URL}/allblog`,
  );
  const blogs = await res.json();

  return { blogs };
};

export const BlogFunction = {
  allBlogs,
};
