import React from "react";
import Popularfooter from "./Popularfooter";
import Footerpc from "./Footerpc";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <div className="bg-[#01635A] overflow-hidden">
      <Popularfooter />
      <Footerpc />
      {/* <MobileFooter /> */}
    </div>
  );
};

export default Footer;
