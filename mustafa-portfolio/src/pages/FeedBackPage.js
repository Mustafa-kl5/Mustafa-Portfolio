import React, { useEffect, useState } from "react";
import ContentHolder from "../component/ContentHolder";
import NavigationMenu from "../component/Menu/NavigationMenu";
import MainLayout from "../UI/MainLayout";
import FeedbackHolder from "../component/feedback/FeedbackHolder";
export default function FeedBackPage() {
  const [exitsAnimation, setExitsAnimation] = useState(false);

  const exitsAnimationControl = () => {
    setTimeout(() => {
      setExitsAnimation(true);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setExitsAnimation(false);
    }, 1000);
  }, [exitsAnimation]);
  return (
    <>
      <MainLayout />
      <ContentHolder exitsAnimation={exitsAnimation}>
        <FeedbackHolder />
      </ContentHolder>
      <NavigationMenu exitsRouteAnimation={exitsAnimationControl} />
    </>
  );
}
