import React, { useState, useEffect } from "react";
import Popularfooter from "./Popularfooter";
import Footerpc from "./Footerpc";
import MobileFooter from "./MobileFooter";

const ResponsiveFooter = () => {
  // Determine if the viewport is 1024px or less.
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    // Set initial state
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Popularfooter />
      {isMobile ? <MobileFooter /> : <Footerpc />}
    </>
  );
};

export default ResponsiveFooter;
