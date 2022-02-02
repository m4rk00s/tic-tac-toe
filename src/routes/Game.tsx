import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import LetterX from "../components/icons/LetterX";
import OutlinedLetterX from "../components/icons/OutlinedLetterX";
import LetterO from "../components/icons/LetterO";
import OutlinedLetterO from "../components/icons/OutlinedLetterO";
import Logo from "../components/icons/Logo";
import Restart from "../components/icons/Restart";

type Grid = [
  Player?,
  Player?,
  Player?,
  Player?,
  Player?,
  Player?,
  Player?,
  Player?,
  Player?
];

type Player = "X" | "O";

interface State {
  user: Player;
  turn: Player;
  grid: Grid;
  winner: Player[];
}

type Action =
  | { type: "player-move"; chosenTile: Number }
  | { type: "restart" }
  | { type: "next-round" };

interface Props {
  user: Player;
}

export default function Game(props: Props) {
  const [state, dispatch] = useReducer(reducer, props.user, init);
  const navigate = useNavigate();

  function calculateWinner(grid: Grid): Player | undefined {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }
    return undefined;
  }

  function init(user: Player) {
    return {
      turn: "X",
      grid: Array(9).fill(undefined),
      winner: [] as Player[],
      user,
    } as State;
  }

  function reducer(state: State, action: Action) {
    switch (action.type) {
      case "player-move":
        return {
          ...state,
          turn: state.turn === "X" ? "O" : "X",
          grid: state.grid.map((tile, index) =>
            index === action.chosenTile ? state.turn : tile
          ),
        } as State;
      case "restart":
        return {
          ...state,
          turn: init(props.user).turn,
          grid: init(props.user).grid,
        } as State;
      case "next-round":
        let winner = calculateWinner(state.grid);

        if (winner === undefined) return state;

        return {
          ...state,
          turn: init(props.user).turn,
          grid: init(props.user).grid,
          winner: state.winner.concat([winner]),
        } as State;
      default:
        throw new Error();
    }
  }

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
                {state.turn === "X" ? (
                  <LetterX className="h-4 text-silver" />
                ) : (
                  <></>
                )}
                {state.turn === "O" ? (
                  <LetterO className="h-4 text-silver" />
                ) : (
                  <></>
                )}
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
            <button
              type="button"
              title="0"
              disabled={state.grid[0] !== undefined}
              onClick={(e) => dispatch({ type: "player-move", chosenTile: 0 })}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  {state.grid[0] === "X" ? <LetterX className="h-10" /> : <></>}
                  {state.grid[0] === "O" ? <LetterO className="h-10" /> : <></>}
                </div>
              </div>
            </button>

            <button
              type="button"
              title="1"
              disabled={state.grid[1] !== undefined}
              onClick={(e) => dispatch({ type: "player-move", chosenTile: 1 })}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  {state.grid[1] === "X" ? <LetterX className="h-10" /> : <></>}
                  {state.grid[1] === "O" ? <LetterO className="h-10" /> : <></>}
                </div>
              </div>
            </button>

            <button
              type="button"
              title="2"
              disabled={state.grid[2] !== undefined}
              onClick={(e) => dispatch({ type: "player-move", chosenTile: 2 })}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  {state.grid[2] === "X" ? <LetterX className="h-10" /> : <></>}
                  {state.grid[2] === "O" ? <LetterO className="h-10" /> : <></>}
                </div>
              </div>
            </button>

            <button
              type="button"
              title="3"
              disabled={state.grid[3] !== undefined}
              onClick={(e) => dispatch({ type: "player-move", chosenTile: 3 })}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  {state.grid[3] === "X" ? <LetterX className="h-10" /> : <></>}
                  {state.grid[3] === "O" ? <LetterO className="h-10" /> : <></>}
                </div>
              </div>
            </button>

            <button
              type="button"
              title="4"
              disabled={state.grid[4] !== undefined}
              onClick={(e) => dispatch({ type: "player-move", chosenTile: 4 })}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  {state.grid[4] === "X" ? <LetterX className="h-10" /> : <></>}
                  {state.grid[4] === "O" ? <LetterO className="h-10" /> : <></>}
                </div>
              </div>
            </button>

            <button
              type="button"
              title="5"
              disabled={state.grid[5] !== undefined}
              onClick={(e) => dispatch({ type: "player-move", chosenTile: 5 })}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  {state.grid[5] === "X" ? <LetterX className="h-10" /> : <></>}
                  {state.grid[5] === "O" ? <LetterO className="h-10" /> : <></>}
                </div>
              </div>
            </button>

            <button
              type="button"
              title="6"
              disabled={state.grid[6] !== undefined}
              onClick={(e) => dispatch({ type: "player-move", chosenTile: 6 })}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  {state.grid[6] === "X" ? <LetterX className="h-10" /> : <></>}
                  {state.grid[6] === "O" ? <LetterO className="h-10" /> : <></>}
                </div>
              </div>
            </button>

            <button
              type="button"
              title="7"
              disabled={state.grid[7] !== undefined}
              onClick={(e) => dispatch({ type: "player-move", chosenTile: 7 })}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  {state.grid[7] === "X" ? <LetterX className="h-10" /> : <></>}
                  {state.grid[7] === "O" ? <LetterO className="h-10" /> : <></>}
                </div>
              </div>
            </button>

            <button
              type="button"
              title="8"
              disabled={state.grid[8] !== undefined}
              onClick={(e) => dispatch({ type: "player-move", chosenTile: 8 })}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                <div className="pb-2">
                  {state.grid[8] === "X" ? <LetterX className="h-10" /> : <></>}
                  {state.grid[8] === "O" ? <LetterO className="h-10" /> : <></>}
                </div>
              </div>
            </button>

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
            <button
              type="button"
              className="bg-silver font-bold px-4 rounded-lg shadow-button-sm shadow-[#6B8997] text-dark-navy h-[3.25rem]"
              onClick={(e) => navigate("/")}
            >
              QUIT
            </button>
            <button
              type="button"
              className="bg-light-yellow font-bold px-4 rounded-lg shadow-button-sm shadow-[#CC8B13] text-dark-navy h-[3.25rem]"
            >
              NEXT ROUND
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
