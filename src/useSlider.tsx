import { useState, useCallback } from 'react';

export function useSlider(props: { totalQuestionsCount: number }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const prev = useCallback(
    () =>
      setSlideIndex(_index => {
        if (_index <= 0) {
          console.warn('そいつはいけない');
          return _index;
        }
        return _index - 1;
      }),
    []
  );

  const next = useCallback(
    () =>
      setSlideIndex(_index => {
        if (_index >= props.totalQuestionsCount) {
          console.warn('そいつはいけない');
          return _index;
        }
        return _index + 1;
      }),
    [props.totalQuestionsCount]
  );

  return {
    slideIndex,
    setSlideIndex,
    prev,
    next
  };
}
