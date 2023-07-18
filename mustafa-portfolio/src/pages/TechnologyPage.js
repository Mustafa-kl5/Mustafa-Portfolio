import React, { useEffect, useState } from "react";
import ContentHolder from "../component/ContentHolder";
import NavigationMenu from "../component/Menu/NavigationMenu";
import MainLayout from "../UI/MainLayout";
import TechnologyHolder from "../component/Technology/TechnologyHolder";
export default function TechnologyPage() {
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
        <TechnologyHolder />
      </ContentHolder>
      <NavigationMenu exitsRouteAnimation={exitsAnimationControl} />
    </>
  );
}
