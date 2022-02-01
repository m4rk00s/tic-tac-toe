import React from "react";

interface Props extends React.SVGAttributes<SVGElement> {
  color?: string;
}

export default function OutlinedLetterX(props: Props) {
  return (
    <svg
      {...props}
      color={props.color ?? "#31C3BD"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
    >
      <path
        d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611a1.994 1.994 0 0 1-1.415.586 1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145a1.99 1.99 0 0 1-1.414.586 1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855a1.99 1.99 0 0 1 1.414-.586Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
