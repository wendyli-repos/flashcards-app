import { useState, useEffect } from "react";

const Route = (props) => {
  // currentPath state to keep track of URL shown in the address bar
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // useEffect() to handle the navEvent event
  // 2nd arg [] means useEffect() runs one time only
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    // 这个地方需要再看一遍为什么
    return () => {
      window.removeEventListerner("popstate", onLocationChange);
    };
  }, []);

  return currentPath === props.path ? props.children : null;
};

export default Route;
