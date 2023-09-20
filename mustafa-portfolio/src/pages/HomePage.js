import React from "react";
import ContentHolder from "../component/ContentHolder";
import NavigationMenu from "../component/Menu/NavigationMenu";
import MainLayout from "../UI/MainLayout";
import HomeImage from "../component/Home/HomeImage";
import useGet from "../hooks/useGet";
import { getUserId } from "../Helper/getUserId";
import LoadingProgress from "../component/LoadingProgress";
import useAnimate from "../hooks/useAnimate";
export default function HomePage() {
  const { data, isLoading } = useGet(
    `/api/v1/data/getHomeData/:${getUserId()}`
  );

  const { exitsAnimationControl, exitsAnimation } = useAnimate();

  return (
    <>
      <MainLayout />
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <ContentHolder exitsAnimation={exitsAnimation}>
          <HomeImage data={data} />
        </ContentHolder>
      )}

      <NavigationMenu exitsRouteAnimation={exitsAnimationControl} />
    </>
  );
}
