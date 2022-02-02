import React from "react";
import Modal from "./Modal";

interface Props {
  onClickCancel: () => void;
  onClickYes: () => void;
}

export default function Restart(props: Props): JSX.Element {
  return (
    <Modal
      header={
        <div className="mt-4 flex items-center justify-center text-2xl gap-2">
          <div className="text-silver uppercase font-bold tracking-wider">
            Restart Game?
          </div>
        </div>
      }
      footer={
        <div className="mt-6 flex gap-4">
          <button
            type="button"
            className="uppercase bg-silver font-bold px-4 rounded-lg shadow-button-sm shadow-[#6B8997] text-dark-navy h-[3.25rem]"
            onClick={props.onClickCancel}
          >
            No, Cancel
          </button>
          <button
            type="button"
            className="uppercase bg-light-yellow font-bold px-4 rounded-lg shadow-button-sm shadow-[#CC8B13] text-dark-navy h-[3.25rem]"
            onClick={props.onClickYes}
          >
            Yes, Restart
          </button>
        </div>
      }
    />
  );
}
