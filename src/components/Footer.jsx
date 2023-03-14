import clsx from "clsx";
import Logo from "./Logo";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { list } from "postcss";

export default function Footer() {
  return (
    <footer className="bg-secondary-100">
      <div className="container px-7 mx-auto pt-32 pb-16">
        <div className="grid grid-cols-2 gap-44">
          <div>
            <Logo className="text-primary-200" />
            <p className={clsx("mt-4", "text-lg", "text-primary-200/70")}>
              Introducing, We are Bubble Bash digital agency company with more
              than 6 years of experience. We are committed to serve with all our
              heart
            </p>
            <ul
              className={clsx(
                "mt-7 text-3xl leading-[0]",
                "flex gap-4 items-center",
                "transition duration-300 ease-in-out"
              )}
            >
              {listIcon.map((item) => (
                <li key={item.id}>
                  <a className="hover:text-primary-100/70" href={item.link}>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-start justify-between text-lg">
            {navLinks.map((link) => (
              <div key={link.id}>
                <h5
                  className={clsx("text-primary-200", "font-semibold", "mb-4")}
                >
                  {link.title}
                </h5>
                <ul className="space-y-3">
                  {link.items.map((item) => (
                    <li>
                      <a
                        className={clsx(
                          "text-primary-200/70",
                          "hover:text-primary-200",
                          "transition duration-300 ease-in-out"
                        )}
                        href={item.id}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const listIcon = [
  { id: 1, link: "#footer", icon: <FaFacebook /> },
  { id: 2, link: "#footer", icon: <AiFillTwitterCircle /> },
  { id: 3, link: "#footer", icon: <FaInstagram /> },
  { id: 4, link: "#footer", icon: <FaLinkedin /> },
];

const navLinks = [
  {
    id: 1,
    title: "Pages",
    items: [
      { id: "home", text: "Home" },
      { id: "ourServices", text: "Our Services" },
      { id: "portfolio", text: "Portfolio" },
      { id: "testimonials", text: "Testimonials" },
      { id: "contactUs", text: "Contact Us" },
    ],
  },
  {
    id: 2,
    title: "Explore",
    items: [
      { id: "resources", text: "Resources" },
      { id: "blog", text: "Blog" },
      { id: "documents", text: "Documents" },
    ],
  },
  {
    id: 3,
    title: "Company",
    items: [
      { id: "aboutUs", text: "About Us" },
      { id: "partners", text: "Partners" },
      { id: "customers", text: "Customers" },
      { id: "contactUs", text: "Contact Us" },
    ],
  },
];
