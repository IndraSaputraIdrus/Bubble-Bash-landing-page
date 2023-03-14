import clsx from "clsx";
import Logo from "./Logo";

const navLinks = [
  { id: "home", text: "Home" },
  { id: "ourServices", text: "Our Services" },
  { id: "portfolio", text: "Portfolio" },
  { id: "testimonials", text: "Testimonials" },
  { id: "contactUs", text: "Contact Us" },
];

export default function Navbar() {
  return (
    <header className="bg-primary-100">
      <div className="container mx-auto px-7">
        <div className={clsx("flex items-center justify-between", "py-10")}>
          <Logo className="text-secondary-100" />
          <ul
            className={clsx(
              "flex items-center space-x-10",
              "text-xl",
              "text-secondary-100/70"
            )}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={clsx("hover:text-secondary-100")}
                  href={`#${link.id}`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
