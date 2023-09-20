import React from "react";
import ContentHolder from "../component/ContentHolder";
import NavigationMenu from "../component/Menu/NavigationMenu";
import MainLayout from "../UI/MainLayout";
import ProjectHolder from "../component/project/ProjectHolder";
import { getUserId } from "../Helper/getUserId";
import useGet from "../hooks/useGet";
import LoadingProgress from "../component/LoadingProgress";
import useAnimate from "../hooks/useAnimate";
export default function ProjectsPage() {
  const { data, isLoading } = useGet(
    `/api/v1/data/getProjectData/:${getUserId()}`
  );

  const { exitsAnimationControl, exitsAnimation } = useAnimate();
  return (
    <>
      <MainLayout />
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <ContentHolder exitsAnimation={exitsAnimation}>
          <ProjectHolder data={data} />
        </ContentHolder>
      )}
      <NavigationMenu exitsRouteAnimation={exitsAnimationControl} />
    </>
  );
}
