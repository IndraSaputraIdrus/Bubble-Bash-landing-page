import clsx from "clsx";
import { BsArrowRight } from "react-icons/bs";

export default function Button({ children, href }) {
  return (
    <a
      href={href}
      className={clsx(
        "inline-block",
        "font-bold text-base lg:text-lg",
        "text-primary-200 bg-secondary-100",
        "transition duration-300 ease-in-out",
        "hover:opacity-70",
        "px-4 py-3",
        "lg:px-8 lg:py-6"
      )}
    >
      <div className="flex items-center gap-2">
        {children} <BsArrowRight />
      </div>
    </a>
  );
}
