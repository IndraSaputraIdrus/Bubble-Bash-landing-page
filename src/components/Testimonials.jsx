import clsx from "clsx";

import Heading from "../components/Heading";
import People1 from "../assets/people1.png";
import People2 from "../assets/people2.png";
import People3 from "../assets/people3.png";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container mx-auto px-7 pb-20">
        <Heading
          heading="Client Reviews"
          subHeading="What Our Happy Client Say About Us"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {listTestimonial.map((item) => (
            <div key={item.id} className="p-6 border-2 border-primary-200">
              <h3
                className={clsx(
                  "mb-2",
                  "text-2xl font-semibold",
                  "text-primary-200"
                )}
              >
                {item.title}
              </h3>
              <p
                className={clsx(
                  "mb-5",
                  "text-base lg:text-lg",
                  "text-primary-200/70"
                )}
              >
                {item.desc}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={clsx(
                    "bg-primary-100",
                    "overlow-hidden rounded-full",
                    "h-14 w-14"
                  )}
                >
                  <img
                    src={item.profile}
                    alt={item.name}
                    className="block w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary-200">
                    {item.name}
                  </h3>
                  <p className="text-sm text-primary-200/70">
                    {item.profession}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const listTestimonial = [
  {
    id: 1,
    title: "Website My Hospital",
    desc: "Very nice to work with Bubble Bash, a reliable and responsive team is very helpful",
    profile: People1,
    name: "Katty Clock",
    profession: "CEO My Hospital",
  },
  {
    id: 2,
    title: "Logo F&B Corp",
    desc: "Really the best service we've ever gotten, really looking forward to the next project",
    profile: People2,
    name: "John Robert",
    profession: "CEO F&B Corp",
  },
  {
    id: 3,
    title: "Supermarket Mobile Apps",
    desc: "The best developer team ever, it's a lot of fun working. Maybe work together again on the next project?",
    profile: People3,
    name: "John Doe",
    profession: "Mobile Developer",
  },
];
