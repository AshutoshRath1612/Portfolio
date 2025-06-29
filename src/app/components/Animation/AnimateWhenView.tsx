import { useEffect } from "react";

export default function AnimateWhenView(
  ref: React.RefObject<HTMLElement>,
  animateFn: () => void
) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateFn();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, animateFn]);
}
