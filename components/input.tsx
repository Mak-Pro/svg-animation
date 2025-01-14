import { useState, useEffect } from 'react';

export const AnimatedInput = ({placeholders, ...passedProps}: any) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState(placeholders[0]);
  const [slicedPlaceholder, setSlicedPlaceholder] = useState(placeholder.slice(0, 0));
  const [sliceIndex, setSliceIndex] = useState(0);
  const [incrementing, setIncrementing] = useState(true);
  const [skipNext, setSkipNext] = useState(0);

  useEffect(() => {
    const intr = setInterval(() => {
      setSlicedPlaceholder(placeholder.slice(0, sliceIndex));
      if (skipNext > 0) {
        setSkipNext(skipNext - 1);
      } else if (sliceIndex == placeholder.length) {
        setIncrementing(false);
        setSliceIndex(placeholder.length - 1);
      } else if (sliceIndex == 0) {
        setIncrementing(true);
        if (placeholderIndex == placeholders.length - 1) {
          setPlaceholderIndex(0);
        } else {
          setPlaceholderIndex(placeholderIndex + 1);
        }
        setPlaceholder(placeholders[placeholderIndex])
        setSliceIndex(1);
      } else if (incrementing) {
        if (sliceIndex + 1 == placeholder.length) {
          setSkipNext(100);
        }
        setSliceIndex(sliceIndex + 1);
      } else {
        setSliceIndex(sliceIndex - 1);
      }
    }, 25);
    return () => {
      clearInterval(intr);
    }
  },);

  return <input {...passedProps} placeholder={slicedPlaceholder}/>
};

export default AnimatedInput;
