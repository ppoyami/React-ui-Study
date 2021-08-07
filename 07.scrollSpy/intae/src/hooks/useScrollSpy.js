import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function useScrollSpy() {
  const [targetIdx, setTargetIdx] = useState(null);
  const containerRef = useRef(null);

  const observerCallback = useCallback(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.5) {
        setTargetIdx(entry.target.id);
      }
    });
  }, []);

  const options = useMemo(
    () => ({
      threshold: [0.5],
    }),
    []
  );

  const io = useMemo(
    () => new IntersectionObserver(observerCallback, options),
    [observerCallback, options]
  );

  useEffect(() => {
    const childrenList = containerRef.current?.children;

    if (!childrenList || childrenList.length === 0) return;

    [...childrenList].forEach(child => {
      io.observe(child);
    });

    return () => {
      io.disconnect();
    };
  }, [io]);

  return [containerRef, targetIdx];
}

export default useScrollSpy;
