import clsx from "clsx";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <header
      className={clsx(
        "bg-primary-100",
        "fixed top-0 left-0 z-10",
        "w-full",
        "lg:static",
        "shadow lg:shadow-none"
      )}
    >
      <div className="container mx-auto px-7">
        <div
          className={clsx("flex items-center justify-between", "py-5 lg:py-10")}
        >
          <Logo className="text-secondary-100" />
          <Navlinks active={active} onClick={setActive} />
          <Hamburger active={active} onClick={setActive} />
        </div>
      </div>
    </header>
  );
}
