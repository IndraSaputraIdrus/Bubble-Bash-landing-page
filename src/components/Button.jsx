import clsx from "clsx";
import { BsArrowRight } from "react-icons/bs";

export default function Button({ children, href }) {
  return (
    <a
      href={href}
      className={clsx(
        "inline-block",
        "font-bold",
        "text-primary-200 bg-secondary-100",
        "px-8 py-6",
        "transition duration-300 ease-in-out",
        "hover:opacity-70"
      )}
    >
      <div className="flex items-center gap-2">
        {children} <BsArrowRight />
      </div>
    </a>
  );
}
