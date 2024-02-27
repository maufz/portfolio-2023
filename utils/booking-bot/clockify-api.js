const clockifyWorkspaceID = process.env.CLOCKIFY_WORKSPACE_ID;

export const getTodayProjects = async () => {
  let today = new Date().toISOString().split("T")[0];
  // Debug
  // today = '2024-02-26';

  const clockifyRequest = await fetch(
    `https://api.clockify.me/api/v1/workspaces/${clockifyWorkspaceID}/scheduling/assignments/all/?start=${today}T00:00:00Z&end=${today}T23:59:00Z`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.CLOCKIFY_API_KEY,
      },
    }
  );
  const projects = await clockifyRequest.json();
  console.log("Fetched today projects:", new Date().toISOString());
  return projects;
};

export const getProjectsByName = (projects, userName) => {
  if (!projects) return [];
  return projects.filter((project) => project.userName === userName);
};
