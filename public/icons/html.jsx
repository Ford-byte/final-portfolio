export default function Html({ className }) {
    return (
      <svg
        width="512"
        height="512"
        x="0"
        y="0"
        viewBox="0 0 512 512"
        enableBackground="new 0 0 512 512" // Directly pass this as an attribute
        className={className}
      >
        <g>
          <path
            d="M31.86 448.059 226.112 512l194.254-63.941L452.227 0H0zM371.616 75l-4.277 60H145.094l5.418 77h211.48l-12.879 180.602-123 41.101-123.004-41.101L98.906 332h60l1.215 16.492 65.992 21.903 66.004-21.899 5.39-76.496H94.41L80.61 75zm0 0"
            fill="#ffffff"
            opacity="1"
            className="hovered-path"
          ></path>
        </g>
      </svg>
    );
  }
  