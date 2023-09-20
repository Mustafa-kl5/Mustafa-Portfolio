import React from "react";
import ContentHolder from "../component/ContentHolder";
import NavigationMenu from "../component/Menu/NavigationMenu";
import MainLayout from "../UI/MainLayout";
import ContactHolder from "../component/contact/ContactHolder";
import useGet from "../hooks/useGet";
import useAnimate from "../hooks/useAnimate";
import { getUserId } from "../Helper/getUserId";
import LoadingProgress from "../component/LoadingProgress";
export default function ContactPage() {
  const { data, isLoading } = useGet(
    `/api/v1/data/getContactData/:${getUserId()}`
  );
  const { exitsAnimationControl, exitsAnimation } = useAnimate();

  return (
    <>
      <MainLayout />
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <ContentHolder exitsAnimation={exitsAnimation}>
          <ContactHolder data={data} />
        </ContentHolder>
      )}
      <NavigationMenu exitsRouteAnimation={exitsAnimationControl} />
    </>
  );
}
