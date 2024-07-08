"use server";
export const getAllHobbiesAndInterest = async () => {
  let loading = true;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/hobbies-and-interest?limit=100?sort=-position`,
      {
        cache: "no-cache",
      },
    );

    const hobbiesAndInterest = await res.json();

    loading = false;
    return {
      hobbiesAndInterests: hobbiesAndInterest?.data || [],
      loading,
    };
  } catch (error) {
    loading = false;
    throw error;
  }
};
