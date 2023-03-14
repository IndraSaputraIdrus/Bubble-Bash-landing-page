import LogoImg from "../assets/Logo.svg";
import clsx from "clsx";

export default function Logo({ className }) {
  return (
    <div className="flex items-center">
      <img
        src={LogoImg}
        alt="logo"
        className="block w-10 mr-1 -ml-[1.5px] object-cover"
      />
      <h1 className={clsx("text-xl font-semibold", className)}>Bubble Bash</h1>
    </div>
  );
}
