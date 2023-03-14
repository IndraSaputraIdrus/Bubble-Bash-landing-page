import clsx from "clsx";

const navLinks = [
  { id: "home", text: "Home" },
  { id: "ourServices", text: "Our Services" },
  { id: "portfolio", text: "Portfolio" },
  { id: "testimonials", text: "Testimonials" },
  { id: "contactUs", text: "Contact Us" },
];

export default function Navlinks({ active, onClick }) {
  return (
    <ul
      className={clsx(
        "flex flex-col items-start",
        "text-xl font-semibold",
        "fixed top-20 bottom-0 left-0 z-10",
        "bg-secondary-100 text-primary-100",
        "w-1/2 h-screen",
        "py-16 px-10 space-y-10",
        "transition duration-300 ease-in-out",
        !active && "-translate-x-full",
        "shadow-xl lg:shadow-none",
        "lg:translate-x-0",
        "lg:h-auto lg:w-auto",
        "lg:p-0 lg:space-y-0",
        "lg:text-secondary-100/70 lg:bg-transparent",
        "lg:font-normal",
        "lg:flex-row lg:items-center lg:space-x-10",
        "lg:static"
      )}
    >
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            onClick={() => onClick(false)}
            className={clsx(
              "hover:text-primary-200 hover:underline",
              "lg:hover:text-secondary-100 lg:hover:no-underline"
            )}
            href={`#${link.id}`}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
