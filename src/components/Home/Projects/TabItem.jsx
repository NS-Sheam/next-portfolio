

import { getAllProjects } from "@/services/actions/project";
import TabComponent from "./TabComponent";


const TabItem = async () => {
  const { htmlCssProjects,
    reactProjects,
    jsProjects,
    loading } = await getAllProjects();

  return (
    <>
      <TabComponent htmlCssProjects={htmlCssProjects} reactProjects={reactProjects} jsProjects={jsProjects} loading={loading} />

    </>
  );
};

export default TabItem;
