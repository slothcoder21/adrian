"use client";

import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import { Globe } from "@/components/globe";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-4xl text-black">Who am I?</h1>
                        <div>
                            <h2 className= "font-semibold text-xl text-black">Adrian Lam</h2>
                            <h3 className="text-black font-semibold">UC Davis '26. Student, Full Stack Developer Intern, and AI Researcher</h3> 
                        </div>
                        <p className="text-black">
                          Hi, my name is Adrian Lam and I am a 4th year Computer Science and Statistcs student at the University of California, Davis.
                        </p>
                        <p className="text-black">
                            My technical interests include: Machine Learning, Artificial Intelligence, Product Management, Financial Analysis, App Development, and Web Development.
                        </p>

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-black"
            >
              TECHNICAL SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                C++
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                Python
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                Java
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                x86
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                R
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                MATLAB
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                MongoDB
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                JavaScript
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                TypeScript
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                React.js
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                React Native
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                SCSS
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                Tailwind CSS
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                SQLite
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                Node.js
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                Next.js
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                Framer Motion
            </div>
             <div className="rounded p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                Three.js
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                Firebase
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                Git
            </div>
            <div className="rounded  p-2 text-sm  bg-[#5A5A5A] text-white shadow">
                Figma
            </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-black"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  <div className="bg-[#7097A8] p-3 font-semibold rounded-b-lg rounded-s-lg text-black">
                    A.S. in Computer Science
                  </div>
                  <div className="p-3 text-sm italic text-black">
                    Graduated from De Anza College{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-black text-sm font-semibold">
                    2021 - 2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-[#7097A8] text-black text-sm font-semibold w-fit">
                    De Anza College
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#7097A8] bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#7097A8] bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-[#7097A8] text-black p-3 font-semibold rounded-b-lg rounded-e-lg">
                    B.S. in Computer Science and Statistics
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-black">
                    Studying Computer Science and Statistics at UC Davis{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-black text-sm font-semibold">
                    2023 - Present{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-[#7097A8] text-sm font-semibold w-fit text-black">
                    UC Davis
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-[#7097A8] text-black p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full Stack Developer Intern{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-black">
                    I worked on website redesigns and AI integrations.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-black text-sm font-semibold">
                    2024{" "}
                  </div>
                  <div className="p-1 rounded bg-[#7097A8] text-black text-sm font-semibold w-fit">
                    Neoteric Solutions Inc.
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#7097A8] bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#7097A8] bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-[#7097A8] text-black p-3 font-semibold rounded-b-lg rounded-e-lg">
                    Undergradute Researcher
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-black">
                    Helping the development of ChatCHW{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-black text-sm font-semibold">
                    2024 - Present{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-[#7097A8] text-sm font-semibold w-fit text-black">
                    UC Berkeley
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Globe fill />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;