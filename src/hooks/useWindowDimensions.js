import {useLayoutEffect, useState} from 'react'

let defaultHeight
let defaultWidth

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
}

export const useWindowSize = () => {
  const [dimensions, setDimensions] = useState({
    windowHeight: defaultHeight,
    windowWidth: defaultWidth,
  })

  useLayoutEffect(() => {
    const updateDimensions = () => setDimensions({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    })

    window.addEventListener(`resize`, updateDimensions)
    updateDimensions()
    return () => window.removeEventListener(`resize`, updateDimensions)
  }, [])
  return dimensions
}

// function useWindowSize() {
//   const [size, setSize] = useState([0, 0]);
//   useLayoutEffect(() => {
//     function updateSize() {
//       setSize([window.innerWidth, window.innerHeight]);
//     }
//     window.addEventListener('resize', updateSize);
//     updateSize();
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);
//   return size;
// }

// function ShowWindowDimensions(props) {
//   const [width, height] = useWindowSize();
//   return <span>Window size: {width} x {height}</span>;
// }