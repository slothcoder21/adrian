"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
        id: 1,
        color: "from-[#7097A8] to-[#64B5F6]",
        title: "Portfolio Website",
        desc: "This portfolio website was created to showcase my skills and abilities. Using NextJS, Framer Motion, and ThreeJS to create a user friendly experience and showcase my progress.",
        img: "/portfolioPage.svg",
        link: "/",
    },
    {
        id: 2,
        color:"from-[#64B5F6] to-[#E9C4E9]",
        title:"BRIDGE",
        desc: "A social media app created to encourage interaction between families. We noticed that when kids go to college, the relationship between parents and children can easily become distant. We wanted to create an app that would BRIDGE that gap. **Still in Development**",
        img: "/bridgeLogo.svg",
        link: "https://github.com/slothcoder21/bridge",
    },
    {
        id: 3,
        color: "from-[#E9C4E9] to-[#FFD2BD]",
        title: "Heart Disease Calculator",
        desc: "A web app designed to help people see if they are at risk of heart disease. It takes advantage of Neural Networks in the backend to find correlations between massive amounts of health data.",
        img: "/heartDisease.svg",
        link: "https://github.com/rasooly-dev/ECS170Project",
    },
    {
        id: 4,
        color: "from-[#FFD2BD] to-[#FFF4C0]",
        title: "AI Note Taker",
        desc: "A web app developed to help students take notes from Zoom recordings or audio files. Practice tests and quizzes could also be created off of the transcriptions.",
        img: "/noteTake.svg",
        link: "https://devpost.com/software/videonotes",
    },
    {
        id: 5,
        color: "from-[#FFF4C0] to-[#C9EC9B]",
        title: "eCommute",
        desc: "A web app developed to help drivers make eco-concious decisions by recommending alternative modes of transportation. Utilizing Google Maps' API and Gas API, we could make an estimate on overall travel costs and the amount of emmissions the user would emit.",
        img: "/eCommute.svg",
        link: "https://devpost.com/software/eco-mute-2mdsgf",
    },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-black">
          My Projects
          <div className="flex flex-col">
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
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-[#7097A8]" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Code</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-[#FFFAE7]">
        <h1 className="text-8xl text-black">Anything Look Interesting?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Aspiring Software Engineer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-green-700 text-black rounded-full flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;