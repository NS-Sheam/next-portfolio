"use server";
export const getAllProjects = async () => {
  let loading = true;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/projects`, {
      cache: "no-cache",
    });

    const projects = await res.json();
    const htmlCssProjects = projects?.data?.filter(
      (project) =>
        project.basedOn.includes("HTML") && project.basedOn.includes("CSS"),
    );
    const reactProjects = projects?.data?.filter((project) =>
      project.basedOn.includes("React"),
    );
    const jsProjects = projects?.data?.filter((project) =>
      project.basedOn.includes("JavaScript"),
    );
    loading = false;
    return {
      projects: projects?.data || [],
      htmlCssProjects,
      reactProjects,
      jsProjects,
      loading,
    };
  } catch (error) {
    loading = false;
    throw error;
  }
};

export const getSingleProject = async (projectId) => {
  let loading = true;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/projects/${projectId}`,
    );

    const project = await res.json();

    loading = false;
    return { project: project?.data || {}, loading };
  } catch (error) {
    loading = false;
    throw error;
  }
};
