import clsx from "clsx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Hamburger({ active, onClick }) {
  return (
    <button
      className={clsx("block", "text-secondary-100", "lg:hidden")}
      onClick={() => onClick((prev) => !prev)}
    >
      {active ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
    </button>
  );
}
