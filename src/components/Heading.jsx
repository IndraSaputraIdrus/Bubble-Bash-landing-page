export default function Heading({ heading, subHeading }) {
  return (
    <div className="mb-10">
      <h4 className="text-base lg:text-lg">{heading}</h4>
      <h3 className="text-2xl lg:text-4xl font-semibold">{subHeading}</h3>
    </div>
  );
}
