import LinkIcon from "@/app/assets/linkIcon";
import Link from "next/link";

type Props = {
  fromTo: string;
  role: string;
  companyName: string;
  companyWebsite: string;
  position: string;
  content: string;
  tools: string[];
  compleatedProjects?: string[];
};
const ExperienceList = (props: Props) => {
  return (
    <div>
      <div className="text-slate-200 text-[18px] font-bold">{props.role}</div>
      <Link target="_blank" href={props.companyWebsite}>
        {props.companyName}
      </Link>
      <div>{props.fromTo}</div>
      <div>{props.position}</div>
      <div>
        <ul
          className="ml-6 list-disc"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></ul>
      </div>
      <div>
        {props.compleatedProjects &&
          props.compleatedProjects.map((value, index) => (
            <div className="flex items-center mt-2" key={index}>
              <LinkIcon />
              <Link
                className="text-slate-200"
                target="_blank"
                href={"https://" + value}
              >
                {value}
              </Link>
            </div>
          ))}
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        {props.tools?.map((value, index) => (
          <div
            className="px-3 py-1 text-xs font-medium leading-5 rounded-full text-teal-300 bg-teal-400/10"
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;
