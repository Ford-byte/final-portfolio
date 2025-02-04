export default function Header({ className }) {
  return (
    <>
      <svg
        width="1366"
        height="100"
        viewBox="0 0 1366 100"
        className={className}
        fill="currentColor"
        aria-labelledby="svgTitle"
      >
        <title id="svgTitle">Decorative circles</title>
        <circle cx="1009" r="25" fill="black" />
        <circle cx="350" cy="75" r="10" fill="black" />
        <circle cx="224" cy="12" r="25" fill="black" />
      </svg>
    </>
  );
}
