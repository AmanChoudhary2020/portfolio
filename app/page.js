"use client"; // This is a client component 👈🏽

// React/Next.js
import { useState } from "react";
import Link from 'next/link'
import 'swiper/css'
import Image from "next/image";

import {
  AiFillLinkedin,
  AiFillYoutube,
  AiTwotoneMail,
  AiFillInstagram
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// Media
import trashbots from "../public/trashbots.jpg";
import criteo from "../public/criteo.png";
import deepgram from "../public/deepgram.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const fadeImages = [
    "AmanPhoto1.jpg", "AmanPhoto2.jpg", "AmanPhoto3.jpg"
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <a href="#" className="text-xl">Aman Choudhary</a>
            <ul className="flex items-center">
              <li className="text-lg px-3 border-none">
                <Link href="#" className="">
                  About Me
                </Link>
              </li>
              <li className="text-lg px-3 border-none">
                <Link href="#" className="">
                  Work Experience
                </Link>
              </li>
              <li className="text-lg px-3 border-none">
                <Link href="#" className="">
                  Projects
                </Link>
              </li>
              <li className="text-lg px-3 border-none">
                <Link href="#" className="">
                  Contact
                </Link>
              </li>
              <li className="text-lg px-3 border-none">
                <Link href="/music" className="">
                  Music
                </Link>
              </li>
              <li className="text-lg px-3 border-none">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-4"
                  href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Aman Choudhary
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 mx-auto md:text-xl">
              Computer Science Student @ <a href="https://umich.edu/" className="text-teal-500">University of Michigan</a>
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/aman-ch/"><AiFillLinkedin /></a>
              <a href="https://www.youtube.com/channel/UCc6UbZ6n4gCH5CDuyPPfjwg"><AiFillYoutube /></a>
              <a href="mailto:amanch@umich.edu"><AiTwotoneMail /></a>
              <a href="https://www.instagram.com/a_man_photoz/"><AiFillInstagram /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full  relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Fade arrows={false} duration={3000}>
                {fadeImages.map((fadeImage, index) => (
                  <div key={index}>
                    <img src={fadeImage} fill={true} style={{ objectFit: "cover" }} />
                  </div>
                ))}
              </Fade>
            </div>
          </div>
        </section>

        <section className="mt:10">
          {/* ABOUT ME */}
          <div className="pb-3">
            <h3 className="text-3xl py-1 dark:text-white ">
              About Me
            </h3>

            <h3 className="text-l py-2 dark:text-white ">
              University of Michigan &apos;24, B.S.E in Computer Science and Engineering
            </h3>

            <p className="text-md leading-5 pb-2 text-gray-800 dark:text-gray-200">
              Born and raised in the heart of Silicon Valley, I am an aspiring software
              developer seeking full-time software engineering roles in a fast-growing
              and exciting environment. I have interest and experience full stack development,
              data engineering, and machine learning.
            </p>
            <p>In my free time, I enjoy playing guitar and
              shooting photography &#x1F4F7;</p>
          </div>

          {/* WORK EXPERIENCE */}
          <h3 className="text-3xl py-1 dark:text-white">
            Work Experience
          </h3>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-5 rounded-xl my-25 dark:bg-white flex-1">
              <div className="mx-auto w-20 h-20">
                <a href="https://deepgram.com/" target="_blank"><Image src={deepgram}
                  className="rounded-lg object-cover hover:scale-105 drop-shadow-2xl"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" /></a>
              </div>
              <h3 className="text-lg font-medium pt-8">Deepgram</h3>
              <p className="py-2">
                Summer 2023
              </p>
              <h3>Worked on core automatic speech recognition engine, radically increasing confidence
                in new releases and researching GPU runtime optimizations
              </h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl dark:bg-white flex-1">
              <div className="mx-auto pt-6 w-20 h-20">
                <a href="https://www.criteo.com/" target="_blank"><Image src={criteo}
                  className="rounded-lg object-cover hover:scale-105 drop-shadow-md"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" /></a>
              </div>
              <h3 className="text-lg font-medium pt-8">
                Criteo
              </h3>
              <p className="py-2">
                Summer 2022
              </p>
              <h3>
                Developed Spark pipelines for processing large-scale retail media advertising event
                datasets on an hourly basis
              </h3>
            </div>
            <div className="text-center shadow-lg p-5 rounded-xl my-25 dark:bg-white flex-1">
              <div className="mx-auto w-20 h-20">
                <a href="https://trashbots.co/" target="_blank"><Image src={trashbots}
                  className="rounded-lg object-cover hover:scale-105 drop-shadow-md"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" /></a>
              </div>
              <h3 className="text-lg font-medium pt-8">
                Trashbots Co.
              </h3>
              <p className="py-2">
                Summer 2021
              </p>
              <h3>
                Integrated new features on web-based application used to interact with robot,
                contributed to lower-level firmware and bluetooth functionality
              </h3>
            </div>
          </div>
        </section>
        <section className="py-10">
          <h3 className="text-3xl pb-5 py-1">Projects</h3>
          <div class="grid grid-cols-3 gap-10">
            <a
              className="shadow-lg bg-gradient-to-br hover:bg-gradient-to-r from-sky-50 to-sky-200 px-400 py-20 text-center border-none rounded-md"
              href="#">
              Search Engine
            </a>
            <a
              className="shadow-lg bg-gradient-to-b hover:bg-gradient-to-l from-sky-50 to-sky-200 px-400 py-20 text-center border-none rounded-md"
              href="#">
              Predicting News Engagement
            </a>
            <a
              className="shadow-lg bg-gradient-to-bl hover:bg-gradient-to-b from-sky-50 to-sky-200 px-400 py-20 text-center border-none rounded-md"
              href="#">
              Neural Network and Scalar Backpropagation
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}