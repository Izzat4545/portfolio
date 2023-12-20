import Link from "next/link";
import GithubIcon from "../assets/githubIcon";
import LinkedinIcon from "../assets/linkedinIcon";
import TelegramIcon from "../assets/telegramIcon";

const LeftSection = () => {
  return (
    <div className="sticky top-20 flex flex-col justify-between">
      {/* INFO */}
      <div>
        <div className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Izzatbek Sultonov
        </div>
        <div className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Experienced Front-End Engineer
        </div>
        <p className="mt-4 max-w-xs leading-normal">
          I build exceptional and accessible digital experiences for the web.
        </p>
      </div>
      {/* CURRENT SECTION INDICATOR */}
      <div className="flex flex-col gap-4 text-[12px] mt-16 w-max">
        <div className="flex items-center gap-2">
          <span className="w-16 h-[2px] bg-slate-200"></span>
          <Link className="text-slate-200 uppercase font-bold" href={"#about"}>
            About
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-[2px] bg-[#94A3B8]"></span>
          <Link className="uppercase" href={"#experience"}>
            Experience
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-8 h-[2px] bg-[#94A3B8]"></span>
          <Link className="uppercase" href={"#projects"}>
            Projects
          </Link>
        </div>
      </div>
      {/* SOCIALS */}
      <div className="flex gap-3 ml-1 mt-8 items-center">
        <Link href={"https://github.com/Izzat4545"}>
          <GithubIcon />
        </Link>
        <Link href={"https://www.linkedin.com/in/izzatbek-sultonov-70a632245/"}>
          <LinkedinIcon />
        </Link>
        <Link href={"https://t.me/dev_boi"}>
          <TelegramIcon />
        </Link>
      </div>
    </div>
  );
};

export default LeftSection;
