import ExperienceList from "./rightSectionComponents/experienceList";
import data from "../data/data.json";
import Link from "next/link";
import ArrowIcon from "../assets/arrowIcon";

const RightSection = () => (
  <div className="w-[50%] py-20">
    <div className="text-[18px]">
      Back in 2012, I decided to try my hand at creating custom Tumblr themes
      and tumbled head first into the rabbit hole of coding and web development.
      Fast-forward to today, and I`ve had the privilege of building software for
      an advertising agency, a start-up, a student-led design studio, and a huge
      corporation. My main focus these days is building products and leading
      projects for our clients at Upstatement. In my free time I`ve also
      <p>
        released an online video course that covers everything you need to know
        to build a web app with the Spotify API. When I`m not at the computer,
        I`m usually rock climbing, hanging out with my wife and two cats, or
        running around Hyrule searching for Korok seeds K o r o k s e e d s .
      </p>
    </div>
    <div className="mt-40 flex flex-col gap-1">
      {data.experice.map((value, index) => (
        <ExperienceList
          key={index}
          companyName={value.companyName}
          companyWebsite={value.companyWebsite}
          fromTo={value.fromTo}
          content={value.content}
          position={value.position}
          role={value.role}
          tools={value.tools}
          compleatedProjects={value.compleatedProjects}
        />
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
  </div>
);

export default RightSection;
