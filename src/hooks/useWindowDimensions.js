import {useEffect, useState} from 'react'

let defaultHeight
let defaultWidth

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
}
export const useWindowDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize, true);
    };
  }, [width, height])
  return {
    width, height
  };
}