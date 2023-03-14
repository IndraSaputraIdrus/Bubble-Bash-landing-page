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
    <section id="home">
      <div className="container px-7 mx-auto">
        <div
          className={clsx(
            "w-full",
            "flex flex-col items-center",
            "text-center",
            "pt-32 pb-32",
            "lg:pt-16 lg:pb-72"
          )}
        >
          <h1
            className={clsx(
              "text-4xl font-bold leading-relaxed",
              "text-secondary-100",
              "lg:text-6xl"
            )}
          >
            Create Amazing Digital Product For Your Business
          </h1>
          <p
            className={clsx(
              "text-base",
              "text-secondary-100/70",
              "w-9/12 mx-auto",
              "mt-4 mb-7",
              "lg:mt-8 lg:mb-16",
              "lg:text-lg"
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
        <div
          className={clsx(
            "container mx-auto relative",
            "px-7 pt-24 pb-20 lg:pt-96 "
          )}
        >
          <div
            className={clsx(
              "px-7 w-full",
              "absolute left-0 -top-20 lg:-top-56"
            )}
          >
            <img src={HeroImg} alt="hero" className="block w-full shadow-xl" />
          </div>
          <div
            className={clsx(
              "grid grid-cols-2",
              "gap-5 lg:gap-0",
              "lg:grid-cols-4",
              "lg:flex-row lg:justify-around lg:items-center",
              "pt-16"
            )}
          >
            {dataList.map((item) => (
              <div className="text-center" key={item.id}>
                <h3 className={clsx("text-2xl font-semibold", "lg:text-3xl")}>
                  {item.count}
                </h3>
                <p
                  className={clsx(
                    "mt-1",
                    "text-primary-200/70",
                    "text-base",
                    "lg:text-lg "
                  )}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
