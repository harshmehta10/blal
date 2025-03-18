import React from "react";
import Hero from "../../../Components/Home/Hero";
import Fullbody from "../../../Components/Home/Fullbody";
import Mostpopular from "../../../Components/Home/Mostpopular";
import AddMember from "../../../Components/Home/AddMember";
import Cantfind from "../../../Components/Home/Cantfind";
import WhyChooseus from "../../../Components/Home/WhyChooseus";
import OurPath from "../../../Components/Home/OurPath";
import TestbyMedical from "../../../Components/Home/TestbyMedical";
import TestbyBody from "../../../Components/Home/TestbyBody";
import Faq from "../../../Components/Home/Faq";
import Blogs from "../../../Components/Home/Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <Fullbody />
      <Mostpopular />
      <AddMember />
      <TestbyMedical />
      <OurPath />
      <WhyChooseus />
      <TestbyBody />
      <Blogs />
      <Cantfind />
      <Faq />
    </>
  );
};

export default Home;
