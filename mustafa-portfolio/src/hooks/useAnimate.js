import { useEffect, useState } from "react";

const useAnimate = () => {
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
  return { exitsAnimation, exitsAnimationControl };
};

export default useAnimate;
