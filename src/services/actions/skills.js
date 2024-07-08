"use server";
export const getAllSkills = async () => {
  let loading = true;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/skills?limit=100`,
      {
        cache: "no-cache",
      },
    );

    const skills = await res.json();
    const frontendSkills = skills?.data?.filter(
      (skill) => skill?.technology === "Frontend",
    );
    const backendSkills = skills?.data?.filter(
      (skill) => skill?.technology === "Backend",
    );
    const databaseSkills = skills?.data?.filter(
      (skill) => skill?.technology === "Database",
    );
    const devOpsSkills = skills?.data?.filter(
      (skill) => skill?.technology === "Devops",
    );
    const familiarSkills = skills?.data?.filter(
      (skill) => skill?.proficiency?.toLowerCase() === "familiar",
    );
    const comfortableSkills = skills?.data?.filter(
      (skill) => skill?.proficiency?.toLowerCase() === "comfortable",
    );
    const expertiseSkills = skills?.data?.filter(
      (skill) => skill?.proficiency?.toLowerCase() === "expertise",
    );
    const tools = skills?.data?.filter(
      (skill) => skill?.proficiency?.toLowerCase() === "tools",
    );

    loading = false;
    return {
      skills: skills?.data || [],
      frontendSkills,
      backendSkills,
      databaseSkills,
      devOpsSkills,
      familiarSkills,
      comfortableSkills,
      expertiseSkills,
      tools,
      loading,
    };
  } catch (error) {
    loading = false;
    throw error;
  }
};
