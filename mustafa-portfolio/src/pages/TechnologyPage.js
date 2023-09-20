import React from "react";
import ContentHolder from "../component/ContentHolder";
import NavigationMenu from "../component/Menu/NavigationMenu";
import MainLayout from "../UI/MainLayout";
import TechnologyHolder from "../component/Technology/TechnologyHolder";
import { getUserId } from "../Helper/getUserId";
import useGet from "../hooks/useGet";
import LoadingProgress from "../component/LoadingProgress";
import useAnimate from "../hooks/useAnimate";
export default function TechnologyPage() {
  const { data, isLoading } = useGet(
    `/api/v1/data/getTechnologyData/:${getUserId()}`
  );

  const { exitsAnimationControl, exitsAnimation } = useAnimate();
  return (
    <>
      <MainLayout />
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <ContentHolder exitsAnimation={exitsAnimation}>
          <TechnologyHolder technologyData={data} />
        </ContentHolder>
      )}
      <NavigationMenu exitsRouteAnimation={exitsAnimationControl} />
    </>
  );
}
