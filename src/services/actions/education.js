"use server";
export const getAllEducations = async () => {
  let loading = true;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/educations?limit=100?sort=-position`,
      {
        cache: "no-cache",
      },
    );

    const educations = await res.json();

    loading = false;
    return {
      educations: educations?.data || [],
      loading,
    };
  } catch (error) {
    loading = false;
    throw error;
  }
};
