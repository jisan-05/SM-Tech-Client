import React, { useState, useRef, useEffect } from "react";

const LazyBackground = ({ src, className, style, children, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" } // start loading a bit before visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        backgroundImage: isVisible ? `url(${src})` : "none",
        backgroundColor: !isVisible ? "#ccc" : undefined, // placeholder color
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default LazyBackground;
