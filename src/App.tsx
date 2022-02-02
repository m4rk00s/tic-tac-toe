import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconLetterO from "./components/icons/IconLetterO";
import IconLetterX from "./components/icons/IconLetterX";

export default function App(): JSX.Element {
  const navigate = useNavigate();
  const [playerMark, setPlayerMark] = useState("X");

  return (
    <div className="h-full bg-dark-navy flex flex-col items-center justify-center gap-8 px-6">
      <div className="flex gap-2">
        <IconLetterX className="h-8 w-8" />
        <IconLetterO className="h-8 w-8" />
      </div>

      <div className="shadow-button bg-semi-dark-navy text-silver rounded-xl w-full p-6 flex flex-col justify-center items-center">
        <div className="uppercase tracking-widest font-bold">
          Pick Player 1&apos;s Mark
        </div>
        <div className="flex mt-6 w-full bg-dark-navy rounded-lg p-2">
          <button
            type="button"
            title="X"
            className={
              "h-14 rounded-xl flex-1 " +
              (playerMark === "X" ? "bg-silver " : "")
            }
            onClick={(e) => setPlayerMark("X")}
          >
            <IconLetterX
              className={
                "h-8 w-8 mx-auto " +
                (playerMark === "X" ? "text-dark-navy " : "text-silver ")
              }
            />
          </button>
          <button
            type="button"
            title="O"
            className={
              "h-14 rounded-xl flex-1 " +
              (playerMark === "O" ? "bg-silver " : "")
            }
            onClick={(e) => setPlayerMark("O")}
          >
            <IconLetterO
              className={
                "h-8 w-8 mx-auto " +
                (playerMark === "O" ? "text-dark-navy " : "text-silver ")
              }
            />
          </button>
        </div>
        <div className="uppercase tracking-widest mt-4 text-sm opacity-50">
          Remember: X Goes First
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <button
          type="button"
          className="uppercase h-14 rounded-2xl bg-light-blue shadow-button shadow-[#118C87]"
          onClick={() => navigate("/game")}
        >
          <span className="font-bold text-dark-navy tracking-widest flex items-center justify-center pb-2">
            New Game (vs Player)
          </span>
        </button>
      </div>
    </div>
  );
}
