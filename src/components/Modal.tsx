import React from "react";

interface Props {
  header?: JSX.Element;
  footer?: JSX.Element;
}

export default function Modal(props: Props) {
  return (
    <>
      <div className="inset-0 absolute z-10 h-full w-full bg-black mix-blend-normal opacity-50"></div>
      <div className="inset-0 absolute z-20 items-center flex">
        <div className="bg-dark-navy flex-1 flex flex-col items-center px-12 pt-10 pb-12">
          <div>{props.header}</div>
          <div>{props.footer}</div>
        </div>
      </div>
    </>
  );
}
