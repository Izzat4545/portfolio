"use client";
import ExperienceList from "./rightSectionComponents/experienceList";
import data from "../data/data.json";
import Link from "next/link";
import ArrowIcon from "../assets/arrowIcon";
import ProjectsList from "./rightSectionComponents/projectsList";
import { useEffect, useRef, useState } from "react";
import useStore from "../store/store";

const RightSection = () => {
  const setAboutInView = useStore((state) => state.setAboutInView);
  const setExpericeInView = useStore((state) => state.setExperienceInView);
  const setProjectsInView = useStore((state) => state.setProjectsInView);
  const [currentIndex, setCurrentIndex] = useState<number>();

  const scrollPosition = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      // Update the ref with the current scroll position
      scrollPosition.current = window.scrollY;

      // Your scroll logic here
      const aboutOffset = 0;
      const expericeOffset = 300;
      const projectsOffset = 1200;

      if (
        scrollPosition.current >= aboutOffset &&
        scrollPosition.current < expericeOffset
      ) {
        setAboutInView(true);
      } else {
        setAboutInView(false);
      }

      if (
        scrollPosition.current > expericeOffset &&
        scrollPosition.current < projectsOffset
      ) {
        setExpericeInView(true);
      } else {
        setExpericeInView(false);
      }

      if (scrollPosition.current > projectsOffset) {
        setProjectsInView(true);
      } else {
        setProjectsInView(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setAboutInView, setExpericeInView, setProjectsInView]);

  useEffect(() => {
    setAboutInView(true);
  }, [setAboutInView]);

  return (
    <div className="w-[50%] py-20">
      <div id="about" className="text-[18px]">
        <p>
          In 2018, I was a passionate gamer, immersing myself in virtual worlds.
          In 2021, I took a pivotal step by enrolling in the Computer Science
          Faculty at Binary International University in Urganch. My journey
          began with an internship as a test automation engineer, where I delved
          into the intricacies of web app testing. However, my true calling
          revealed itself — I learned to build captivating websites.
        </p>
        <br />
        <p>
          Transitioning from testing to frontend development, I embraced the
          opportunity to shape digital experiences. Now, armed with skills in
          Next.js, Tailwind CSS, Redux, Framer Motion, and TypeScript, I bring
          creativity and precision to crafting functional and visually appealing
          online platforms.
        </p>
      </div>
      <div id="experience" className="mt-32 flex flex-col gap-1">
        {data.experice.map((value, index) => (
          <div
            onMouseEnter={() => setCurrentIndex(index)}
            onMouseLeave={() => setCurrentIndex(undefined)}
            className={`${
              currentIndex === undefined || currentIndex === index
                ? "opacity-100"
                : "opacity-50"
            } transition-all`}
            key={index}
          >
            <ExperienceList
              companyName={value.companyName}
              companyWebsite={value.companyWebsite}
              fromTo={value.fromTo}
              content={value.content}
              position={value.position}
              role={value.role}
              tools={value.tools}
              compleatedProjects={value.compleatedProjects}
            />
          </div>
        ))}
      </div>
      <div className="mt-7 flex items-center w-[130px] group">
        <Link
          className="font-bold text-slate-200 hover:text-teal-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-teal-300 after:transition-all origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left"
          href={"/resume.pdf"}
          target="_blank"
        >
          <div>View Résumé</div>
        </Link>
        <ArrowIcon />
      </div>
      <div id="projects" className="mt-32 flex flex-col gap-1">
        {data.projects.map((value, index) => (
          <ProjectsList
            key={index}
            projectLink={value.projectLink}
            content={value.content}
            title={value.title}
          />
        ))}
      </div>
    </div>
  );
};

export default RightSection;
