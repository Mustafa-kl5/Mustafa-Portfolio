import React from "react";
import ContentHolder from "../component/ContentHolder";
import NavigationMenu from "../component/Menu/NavigationMenu";
import MainLayout from "../UI/MainLayout";
import FeedbackHolder from "../component/feedback/FeedbackHolder";
import { getUserId } from "../Helper/getUserId";
import LoadingProgress from "../component/LoadingProgress";
import useGet from "../hooks/useGet";
import useAnimate from "../hooks/useAnimate";
export default function FeedBackPage() {
  const { data, isLoading } = useGet(
    `/api/v1/data/getFeedBackData/:${getUserId()}`
  );

  const { exitsAnimationControl, exitsAnimation } = useAnimate();
  return (
    <>
      <MainLayout />
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <ContentHolder exitsAnimation={exitsAnimation}>
          <FeedbackHolder data={data} />
        </ContentHolder>
      )}

      <NavigationMenu exitsRouteAnimation={exitsAnimationControl} />
    </>
  );
}
