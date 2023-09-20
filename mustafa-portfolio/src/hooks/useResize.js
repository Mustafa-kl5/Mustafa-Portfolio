import { useEffect, useRef } from "react";

const useResize = () => {
  const contentHolderRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (contentHolderRef.current) {
        contentHolderRef.current.style.height = `calc(${window.innerHeight}px - 4.2rem )`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { contentHolderRef };
};

export default useResize;
