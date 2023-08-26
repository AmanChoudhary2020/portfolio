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
  AiFillInstagram,
  AiFillGithub
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

// Media
import trashbots from "../public/trashbots.jpg";
import criteo from "../public/criteo.png";
import deepgram from "../public/deepgram.png";

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
                <a href="#AboutMe">About Me</a>
              </li>
              <li className="text-lg px-3 border-none">
                <a href="#WorkExperience">
                  Work Experience
                </a>
              </li>
              <li className="text-lg px-3 border-none">
                <a href="#Projects">
                  Projects
                </a>
              </li>
              <li className="text-lg px-3 border-none">
                <a href="#Contact">
                  Contact
                </a>
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
                  href="Aman_Choudhary_Resume.pdf" target="_blank">
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
              Computer Science Student @ <a href="https://umich.edu/" target="_blank" className="text-teal-500">University of Michigan</a>
            </p>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="mailto:amanch@umich.edu" target="_blank"><AiTwotoneMail /></a>
              <a href="https://www.linkedin.com/in/aman-ch/" target="_blank"><AiFillLinkedin /></a>
              {/* <a href="https://www.youtube.com/channel/UCc6UbZ6n4gCH5CDuyPPfjwg" target="_blank"><AiFillYoutube /></a>
              <a href="https://www.instagram.com/a_man_photoz/" target="_blank"><AiFillInstagram /></a> */}
              <a href="https://github.com/AmanChoudhary2020/" target="_blank"><AiFillGithub /></a>
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
          <div id="AboutMe" className="pb-3">
            <h3 className="text-3xl py-1 pb-4 dark:text-white ">
              About Me
            </h3>

            <p className="text-md leading-6 pb-2 text-gray-800 dark:text-gray-200">
              Born and raised in the heart of Silicon Valley, I am an aspiring software
              developer seeking full-time software engineering roles in a fast-growing
              and exciting environment. I have interest and experience full stack development,
              data engineering, and machine learning.
            </p>
            <p className="dark:text-gray-200">In my free time, I enjoy playing guitar and
              shooting photography &#x1F4F7;. Check out my guitar solo on a <a href="https://www.youtube.com/watch?v=CQI5q4grxjA&t=88s" target="_blank" className="text-teal-500 hover:underline">tune</a> my buddies and I wrote!</p>
          </div>

          {/* WORK EXPERIENCE */}
          <h3 id="WorkExperience" className="text-3xl py-1 dark:text-white">
            Work Experience
          </h3>

          <div className="lg:flex gap-10">
            <a href="https://deepgram.com/" target="_blank" className="dark:border-solid dark:border-slate-50 dark:border-2 dark:bg-opacity-0 dark:text-white hover:scale-105 text-center p-5 shadow-lg rounded-xl dark:bg-white flex-1">
              <div className="mx-auto w-20 h-20">
                <Image src={deepgram}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" />
              </div>
              <h3 className="text-lg font-medium pt-8">Deepgram</h3>
              <p className="py-2">
                Summer 2023
              </p>
              <h3>Worked on core automatic speech recognition engine, radically increasing confidence
                in new releases and researching GPU runtime optimizations
              </h3>
            </a>
            <a href="https://www.criteo.com/" target="_blank" className="dark:border-solid dark:border-slate-50 dark:border-2 dark:bg-opacity-0 dark:text-white hover:scale-105 text-center p-5 shadow-lg rounded-xl dark:bg-white flex-1">
              <div className="mx-auto pt-6 w-20 h-20">
                <Image src={criteo}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" />
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
            </a>
            <a href="https://www.trashbots.co/" target="_blank" className="dark:border-solid dark:border-slate-50 dark:border-2 dark:bg-opacity-0 dark:text-white hover:scale-105 text-center p-5 shadow-lg rounded-xl dark:bg-white flex-1">
              <div className="mx-auto pt-6 w-20 h-20">
                <Image src={trashbots}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive" />
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
            </a>
          </div>
        </section>
        <section id="Projects" className="py-10 dark:text-gray-200">
          <h3 className="text-3xl pb-5 py-1">Projects</h3>
          <div className="grid grid-cols-3 gap-10">
            <a href="https://github.com/AmanChoudhary2020/News-Engagement" target="_blank" class="w-100 h-min relative group">
              <img src="engagement.jpg" height={"40%"} className="rounded-lg group-hover:opacity-10" />
              <div class="opacity-0 group-hover:opacity-100 duration-300 text-center absolute inset-x-0 top-10 flex justify-center items-end">
                <div>
                  <p className="font-bold leading-5 pb-1">Predicting News Reader Feedback with Deep Learning</p>
                  <p>In-depth linguistic analysis of questions and comments posed to news stories
                    on social media, with the goal of helping news organizations anticipate the
                    information needs of their audience
                  </p>
                </div>
              </div>
            </a>

            <a href="https://github.com/AmanChoudhary2020/nn-from-scratch" target="_blank" class="w-100 h-min relative group">
              <img src="nn.jpg" className="object-fill h-85 w-full rounded-lg group-hover:opacity-10 flex-1" />
              <div class="opacity-0 group-hover:opacity-100 duration-300 text-center absolute inset-x-0 top-10 flex justify-center items-end">
                <div>
                  <p className="font-bold leading-5 pb-1">Automatic Differentiation Engine for Neural Network Training</p>
                  <p>A tiny Autograd engine that implements scalar backpropagation in Rust with a small neural networks library on top of it with a PyTorch-like API
                  </p>
                </div>
              </div>
            </a>

            <a href="https://github.com/AmanChoudhary2020/search-engine" target="_blank" class="w-100 h-min relative group">
              <img src="engine.jpg" className="object-fill h-85 w-full rounded-lg group-hover:opacity-10 flex-1" />
              <div class="opacity-0 group-hover:opacity-100 duration-300 text-center absolute inset-x-0 top-20 flex justify-center items-end">
                <div>
                  <p className="font-bold leading-5 pb-1">Scalable Search Engine</p>
                  <p>Built a scalable search engine using PageRank-based ranking system, Hadoop
                    Streaming to create a segmented inverted index, and a distributed system for
                    search
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section id="Contact" className="dark:text-gray-200 py-10 text-center">
          <h3 className="text-3xl pb-5 py-1">Let&apos;s Chat!</h3>
          <h3 className="text-m">amanch@umich.edu</h3>
          <h3 className="text-m">408-913-0300</h3>
          <h3 className="text-m">https://www.linkedin.com/in/aman-ch/</h3>
        </section>

        <footer className="relative h-100 w-100 dark:text-gray-200">
          <p className="text-xs pb-1 absolute bottom-0 right-0">Author: Aman Choudhary</p>
        </footer>

      </main >

    </div >
  );
}