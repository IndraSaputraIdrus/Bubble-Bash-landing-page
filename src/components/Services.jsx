import clsx from "clsx";

import { FaFigma } from "react-icons/fa";
import {
  BsCodeSlash,
  BsTextParagraph,
  BsCameraVideo,
  BsVectorPen,
} from "react-icons/bs";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import Heading from "./Heading";

export default function Services() {
  return (
    <section id="ourServices" className="bg-secondary-300">
      <div className="container px-7 mx-auto py-20">
        <Heading heading="Our Services" subHeading="We Provide What You Need" />
        <div
          className={clsx(
            "grid grid-cols-1 lg:grid-cols-3",
            "gap-x-32 gap-y-14"
          )}
        >
          {listService.map((item) => (
            <div
              key={item.id}
              className={clsx(
                "flex flex-col items-center",
                "text-center",
                "bg-secondary-100",
                "p-6",
                "shadow-lg"
              )}
            >
              <span className="text-5xl">{item.icon}</span>
              <h5 className="text-2xl mt-4">{item.title}</h5>
              <p className="text-lg text-primary-200/70 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const listService = [
  {
    id: 1,
    icon: <FaFigma />,
    title: "UI/UX Designer",
    desc: "We are ready to make your website more friendly and efficient in the eyes of users",
  },
  {
    id: 2,
    icon: <BsCodeSlash />,
    title: "Web Development",
    desc: "Want to create a website that has many features? We have the answer for you. ",
  },
  {
    id: 3,
    icon: <BsTextParagraph />,
    title: "Content Writer",
    desc: "We provide interesting content and can attract customers for you",
  },
  {
    id: 4,
    icon: <HiOutlinePresentationChartBar />,
    title: "Branding",
    desc: "Create visual branding with amazing result, you just sit back and relax",
  },
  {
    id: 5,
    icon: <BsCameraVideo />,
    title: "Editing Video",
    desc: "Want to create a website that has many features? We have the answer for you.",
  },
  {
    id: 6,
    icon: <BsVectorPen />,
    title: "Illustration",
    desc: "Create beauty illustrasion as you need, and make it interesting",
  },
];
