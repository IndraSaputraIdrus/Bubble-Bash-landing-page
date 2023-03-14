import clsx from "clsx";
import Button from "./Button";

export default function Contacts() {
  return (
    <section id="contacts" className="bg-primary-100">
      <div className="container mx-auto px-7 py-14">
        <div className="flex items-center justify-center text-center">
          <div className="max-w-2xl">
            <h2
              className={clsx(
                "text-5xl font-bold",
                "text-secondary-100",
                "leading-relaxed"
              )}
            >
              Have a project idea and want to make it come true?
            </h2>
            <p
              className={clsx("text-lg", "text-secondary-100/70", "mt-5 mb-8")}
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
