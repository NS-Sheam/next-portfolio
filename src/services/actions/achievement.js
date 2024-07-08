"use server";
export const getAllAchievement = async () => {
  let loading = true;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/achievements?limit=100?sort=-position`,
      {
        cache: "no-cache",
      },
    );

    const achievement = await res.json();

    loading = false;
    return {
      achievements: achievement?.data || [],
      loading,
    };
  } catch (error) {
    loading = false;
    throw error;
  }
};
