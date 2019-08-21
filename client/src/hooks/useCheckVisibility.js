import { useEffect, useState } from 'react';

export default (refElement, toggle) => {
  const [isVisible, setIsVisible] = useState(toggle)

  useEffect(() => {
    const target = refElement.current;
    const options = {
      threshold: 0.0
    }
    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          setIsVisible(true);
        } else if(toggle) {
          setIsVisible(false);
        }
      })
    }, options);
    observer.observe(target);
    return () => observer.unobserve(target);
  })

  return isVisible;
}
