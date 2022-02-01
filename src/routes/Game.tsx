import React from "react";
import { useNavigate } from "react-router-dom";
import LetterX from "../components/Icons/LetterX";
import OutlinedLetterX from "../components/Icons/OutlinedLetterX";
import LetterO from "../components/Icons/LetterO";
import OutlinedLetterO from "../components/Icons/OutlinedLetterO";
import Logo from "../components/Icons/Logo";
import Restart from "../components/Icons/Restart";

export default function Game() {
  return (
    <>
      {/* shadow-drop */}
      <div className="hidden inset-0 absolute z-10 h-full w-full bg-black mix-blend-normal opacity-50"></div>

      {/* main */}
      <div className="p-6 h-full bg-dark-navy">
        <div className="flex items-center">
          <div className="flex-1">
            <Logo className="h-8" />
          </div>
          <div className="flex-1 text-center">
            <div className="inline-block w-auto bg-semi-dark-navy h-10 px-4 uppercase text-silver rounded-md shadow-button-sm shadow-[#10212A]">
              <div className="text-sm flex items-center justify-center gap-2 h-full w-full pb-1">
                <LetterX className="h-4 text-silver " />
                <span>turn</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <button
              type="button"
              title="restart"
              className="ml-auto bg-silver h-10 w-10 flex items-center justify-center rounded-md shadow-button-sm shadow-[#6B8997]"
            >
              <div className="pb-1">
                <Restart className="h-4" />
              </div>
            </button>
          </div>
        </div>
        <div className="mt-16">
          <div className="w-full grid grid-cols-tic-tac-toe gap-5">
            <div>
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                {/* empty */}
              </div>
            </div>
            <div>
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  <LetterX className="h-10" />
                </div>
              </div>
            </div>
            <div>
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  <LetterO className="h-10" />
                </div>
              </div>
            </div>
            <div>
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  <LetterX className="h-10" />
                </div>
              </div>
            </div>
            <div>
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  <LetterO className="h-10" />
                </div>
              </div>
            </div>
            <div>
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  <LetterX className="h-10" />
                </div>
              </div>
            </div>
            <div>
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">{/* empty */}</div>
              </div>
            </div>
            <div>
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  <LetterO className="h-10" />
                </div>
              </div>
            </div>
            <div>
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  <LetterX className="h-10" />
                </div>
              </div>
            </div>

            {/* result */}
            <div>
              <div className="bg-light-blue h-16 flex flex-col items-center justify-center rounded-lg">
                <div className="text-sm text-dark-navy">X (YOU)</div>
                <div className="text-xl font-bold text-dark-navy">14</div>
              </div>
            </div>
            <div>
              <div className="bg-silver h-16 flex flex-col items-center justify-center rounded-lg">
                <div className="text-sm text-dark-navy">TIES</div>
                <div className="text-xl font-bold text-dark-navy">32</div>
              </div>
            </div>
            <div>
              <div className="bg-light-yellow h-16 flex flex-col items-center justify-center rounded-lg">
                <div className="text-sm text-dark-navy">O (CPU)</div>
                <div className="text-xl font-bold text-dark-navy">11</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal win/lose */}
      <div className="hidden inset-0 absolute z-20 flex items-center">
        <div className="bg-dark-navy flex-1 flex flex-col items-center px-12 pt-10 pb-12">
          <div className="text-silver text-sm uppercase font-bold tracking-wider">
            Oh no, you lose...
          </div>

          <div className="mt-4 flex items-center justify-center text-2xl gap-2">
            <LetterO className="h-8 text-light-yellow" />
            <div className="text-light-yellow uppercase font-bold tracking-wider">
              takes the round
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <button className="bg-silver font-bold px-4 rounded-lg shadow-button-sm shadow-[#6B8997] text-dark-navy h-[3.25rem]">
              QUIT
            </button>
            <button className="bg-light-yellow font-bold px-4 rounded-lg shadow-button-sm shadow-[#CC8B13] text-dark-navy h-[3.25rem]">
              NEXT ROUND
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
