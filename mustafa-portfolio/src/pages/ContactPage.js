import React, { useEffect, useState } from "react";
import ContentHolder from "../component/ContentHolder";
import NavigationMenu from "../component/Menu/NavigationMenu";
import MainLayout from "../UI/MainLayout";
import ContactHolder from "../component/contact/ContactHolder";
export default function ContactPage() {
  const [exitsAnimation, setExitsAnimation] = useState(false);

  const exitsAnimationControl = () => {
    setTimeout(() => {
      setExitsAnimation(true);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setExitsAnimation(false);
    }, 2000);
  }, [exitsAnimation]);
  return (
    <>
      <MainLayout />
      <ContentHolder exitsAnimation={exitsAnimation}>
        <ContactHolder />
      </ContentHolder>
      <NavigationMenu exitsRouteAnimation={exitsAnimationControl} />
    </>
  );
}
