import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconX from "./components/Icons/LetterX";
import IconXOutline from "./components/Icons/OutlinedLetterX";
import IconO from "./components/Icons/LetterO";
import IconOOutline from "./components/Icons/OutlinedLetterO";

function App(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-dark-navy flex flex-col items-center justify-center gap-8 px-6">
      <div className="flex gap-2">
        <IconX className="h-8 w-8" />
        <IconO className="h-8 w-8" />
      </div>

      <div className="shadow-button bg-semi-dark-navy text-silver rounded-xl w-full p-6 flex flex-col justify-center items-center">
        <div className="uppercase tracking-widest font-bold">
          Pick Player 1&apos;s Mark
        </div>
        <div className="flex mt-6 w-full bg-dark-navy rounded-lg p-2">
          <button type="button" title="X" className="h-14 rounded-xl flex-1">
            <IconX className="h-8 w-8 text-silver mx-auto" />
          </button>
          <button
            type="button"
            title="O"
            className="h-14 rounded-xl flex-1 bg-silver"
          >
            <IconO className="h-8 w-8 text-dark-navy mx-auto" />
          </button>
        </div>
        <div className="uppercase tracking-widest mt-4 text-sm opacity-50">
          Remember: X Goes First
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <button
          type="button"
          className="relative uppercase h-14 bg-light-yellow rounded-2xl shadow-button shadow-[#CC8B13]"
          onClick={() => navigate("/game")}
        >
          <span className="font-bold text-dark-navy tracking-widest absolute origin-center flex items-center justify-center mb-2 inset-0">
            New Game (vs CPU)
          </span>
        </button>
        <button
          type="button"
          className="relative uppercase h-14 rounded-2xl bg-light-blue shadow-button shadow-[#118C87]"
          onClick={() => navigate("/game")}
        >
          <span className="font-bold text-dark-navy tracking-widest absolute origin-center flex items-center justify-center mb-2 inset-0">
            New Game (vs Player)
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
