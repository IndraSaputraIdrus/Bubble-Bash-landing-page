import clsx from "clsx";
import Button from "./Button";

export default function Contacts() {
  return (
    <section id="contactUs" className="bg-primary-100">
      <div className="container mx-auto px-7 py-14">
        <div className="flex items-center justify-center text-center">
          <div className="max-w-2xl">
            <h2
              className={clsx(
                "font-bold",
                "text-secondary-100",
                "leading-relaxed",
                "text-3xl lg:text-5xl "
              )}
            >
              Have a project idea and want to make it come true?
            </h2>
            <p
              className={clsx(
                "text-base lg:text-lg",
                "text-secondary-100/70",
                "mt-2 mb-5",
                "lg:mt-5 lg:mb-8"
              )}
            >
              Please contact us and we will discuss about your project, don't
              forget we are always here for you
            </p>
            <Button href="#contactUs">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
