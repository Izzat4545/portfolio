"use client";
import ArrowIcon from "@/app/assets/arrowIcon";

type Props = {
  title: string;
  content: string;
  projectLink: string;
};
const ProjectsList = (props: Props) => {
  return (
    <div
      onClick={() => window.open(props.projectLink, "_blank")}
      className="cursor-pointer group hover:bg-slate-800/50 hover:drop-shadow-lg transition-all p-5 rounded-lg"
    >
      <div className="text-slate-200 group flex items-center hover:text-teal-300 transition-all text-[18px] font-bold">
        <div>{props.title}</div>
        <div className="rotate-[-45deg]">
          <ArrowIcon />
        </div>
      </div>
      <div>{props.content}</div>
    </div>
  );
};

export default ProjectsList;
