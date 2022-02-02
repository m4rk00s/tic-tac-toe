import React from "react";
import { Player } from "../routes/Game";
import IconLetterO from "./icons/LetterO";
import IconLetterX from "./icons/LetterX";
import Modal from "./Modal";

interface Props {
  user: Player;
  winner?: Player;
  onClickQuit: () => void;
  onClickNextRound: () => void;
}

export default function Result(props: Props): JSX.Element {
  return (
    <Modal
      header={
        props.winner !== undefined ? (
          <div className="flex flex-col items-center">
            <div className="text-silver text-sm uppercase font-bold tracking-wider">
              {props.winner === props.user ? "You won!" : "Oh no, you lost..."}
            </div>

            <div className="mt-4 flex items-center justify-center text-2xl gap-2">
              {props.winner === "O" ? (
                <IconLetterO className="h-8 text-light-yellow" />
              ) : (
                <></>
              )}

              {props.winner === "X" ? (
                <IconLetterX className="h-8 text-light-yellow" />
              ) : (
                <></>
              )}

              <div className="text-light-yellow uppercase font-bold tracking-wider">
                takes the round
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-4 flex items-center justify-center text-2xl gap-2">
              <div className="text-silver uppercase font-bold tracking-wider">
                Round Tied
              </div>
            </div>
          </>
        )
      }
      footer={
        <div className="mt-6 flex gap-4">
          <button
            type="button"
            className="uppercase bg-silver font-bold px-4 rounded-lg shadow-button-sm shadow-[#6B8997] text-dark-navy h-[3.25rem]"
            onClick={props.onClickQuit}
          >
            Quit
          </button>
          <button
            type="button"
            className="uppercase bg-light-yellow font-bold px-4 rounded-lg shadow-button-sm shadow-[#CC8B13] text-dark-navy h-[3.25rem]"
            onClick={props.onClickNextRound}
          >
            Next Round
          </button>
        </div>
      }
    />
  );
}
