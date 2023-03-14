import Heading from "./Heading";
import clsx from "clsx";

import PortfolioImg1 from "../assets/portfolio1.png";
import PortfolioImg2 from "../assets/portfolio2.png";
import PortfolioImg3 from "../assets/portfolio3.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-secondary-100">
      <div className="container mx-auto px-7 py-20">
        <Heading heading="Our Portfolio's" subHeading="Recent Projects" />
        <div
          className={clsx(
            "flex flex-wrap items-center -mx-6 space-y-12 lg:space-y-0"
          )}
        >
          {listPortfolio.map((item) => (
            <div
              key={item.id}
              className={clsx("bg-secondary-100", "w-full lg:w-1/3", "px-6")}
            >
              <div className="h-full lg:h-56 bg-red-500">
                <img
                  src={item.img}
                  className="block w-full h-full object-cover"
                />
              </div>
              <h5 className="text-2xl font-semibold mt-4 truncate">
                {item.title}
              </h5>
              <p className="text-lg text-primary-200/70 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const listPortfolio = [
  {
    id: 1,
    img: PortfolioImg1,
    title: "Website My Hospital",
    desc: "Create a hospital website with patient, doctor, and drug logistics features that help hospital operations",
  },
  {
    id: 2,
    img: PortfolioImg2,
    title: "Food & Beverages Corp Logo",
    desc: "Create a logo for a food & beverage company, with emphasis on aesthetics and user requests",
  },
  {
    id: 3,
    img: PortfolioImg3,
    title: "Supermarket Mobile Apps",
    desc: "Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features",
  },
];
