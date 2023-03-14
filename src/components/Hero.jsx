import clsx from "clsx";

import HeroImg from "../assets/hero.png";
import Button from "./Button";

const dataList = [
  { id: 1, count: "1.2K+", text: "Happy Clients" },
  { id: 2, count: "1.1K+", text: "WorldWide Clients" },
  { id: 3, count: "6+", text: "Years of Experience" },
  { id: 4, count: "12+", text: "Award Winner" },
];

export default function Hero() {
  return (
    <section id="#home">
      <div className="container px-7 mx-auto">
        <div
          className={clsx(
            "w-full",
            "flex flex-col items-center",
            "text-center",
            "pt-16 pb-72"
          )}
        >
          <h1 className={clsx("text-6xl font-bold", "text-secondary-100")}>
            Create Amazing Digital Product For Your Business
          </h1>
          <p
            className={clsx(
              "text-lg",
              "text-secondary-100/70",
              "w-9/12 mx-auto",
              "mt-8 mb-16"
            )}
          >
            We are a professional digital agency that has been established since
            2016, we present a variety of digital services that can help you
            solve problems in your business
          </p>
          <Button href="#ourServices">Get Started</Button>
        </div>
      </div>
      <div className="bg-secondary-100">
        <div className={clsx("container mx-auto relative", "px-7 pt-96 pb-20")}>
          <div className="px-7 w-full absolute left-0 -top-56 overflow-hidden">
            <img src={HeroImg} alt="hero" className="block w-full" />
          </div>
          <div
            className={clsx(
              "flex flex-col",
              "lg:flex-row lg:justify-around lg:items-center",
              "pt-16"
            )}
          >
            {dataList.map((item) => (
              <div className="text-center" key={item.id}>
                <h3 className="text-3xl font-semibold">{item.count}</h3>
                <p className="text-lg mt-1 text-primary-200/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
