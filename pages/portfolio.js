import React, { useEffect } from "react";
import AOS from "aos";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import {
  setAbout,
  setContact,
  setPortfolio,
  setResume,
} from "../redux/slices/navbar";
import netflix from "../assets/netflix.jpg";
import amazon from "../assets/amazon.jpg";
import hulu from "../assets/hulu.jpg";
import keeper from "../assets/keeper.jpg";
import Image from "next/image";
import Preview from "../components/Preview";

const Resume = () => {
  //   useEffect(() => {
  //     AOS.init();
  //   }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAbout(false));
    dispatch(setResume(false));
    dispatch(setPortfolio(true));
    dispatch(setContact(false));

    //AOS.init();
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="resume py-3 px-14 pt-20 bg-[#F5F5F5] text-black flex-grow">
        <Header right="PORTFOLIO" left="My Work" />
        <div className="my-4 grid md:grid-cols-3 lg:grid-cols-4">
          <Preview
            source={netflix}
            alta="Netflix"
            para="It is a NETFLIX Clone based on REACT, REDUX, NEXT, NEXTAUTH and TAILWIND CSS."
            link="https://netflix-2-0.vercel.app/"
          />
          <Preview
            source={amazon}
            alta="Amazon"
            para="It is a Clone of AMAZON based on REACTJS, REDUX, FIREBASE for authorization, NEXTJS and TAILWIND CSS."
            link="https://github.com/MusaMalikx/Amazon"
          />
          <Preview
            source={hulu}
            alta="Hulu"
            para="It is a HULU Clone based on REACT, REDUX, NEXT and TAILWIND CSS."
            link="https://hulu-tau-gules.vercel.app/"
          />
          <Preview
            source={keeper}
            alta="Keeper"
            para="REACT based Google Keep clone to store information."
            link="https://musamalikx.github.io/Keeper/"
          />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
