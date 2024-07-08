"use server";
export const getAllExperiences = async () => {
  let loading = true;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/experiences?limit=100?sort=-position`,
      {
        cache: "no-cache",
      },
    );

    const experiences = await res.json();

    loading = false;
    return {
      experiences: experiences?.data || [],
      loading,
    };
  } catch (error) {
    loading = false;
    throw error;
  }
};
