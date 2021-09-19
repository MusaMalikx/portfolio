import React, { useEffect } from "react";
import AOS from "aos";
import Coding from "../components/Coding";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { setAbout, setContact, setPortfolio, setResume } from "../redux/slices/navbar";

const Resume = () => {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAbout(false));
    dispatch(setResume(true));
    dispatch(setPortfolio(false));
    dispatch(setContact(false));

    AOS.init();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="resume py-3 px-14 pt-20">
        <Header right="RESUME" left="1 Year of Experience" />
        <div className="middle grid md:grid-cols-2 justify-start">
          <div className="education">
            <h5 className="hr my-8 text-lg md:text-xl" data-aos="fade-right">
              Education
              <hr className="bg-[#00C1D4] w-10 mt-2 h-0.5 outline-none border-none rounded-full" />
            </h5>
            <Education />
          </div>
          <div className="experience">
            <h5 className="hr my-8 text-lg md:text-xl" data-aos="fade-right">
              Experience
              <hr className="bg-[#00C1D4] w-10 mt-2 h-0.5 outline-none border-none rounded-full" />
            </h5>
            <Experience />
          </div>
        </div>
        <div className="c-skills mb-4">
          <h5 className="hr my-10 text-lg md:text-xl" data-aos="fade-right">
            Coding Skills
            <hr className="bg-[#00C1D4] w-10 mt-2 h-0.5 outline-none border-none rounded-full" />
          </h5>
          <Coding />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
