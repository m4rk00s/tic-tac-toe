import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Result from "../components/Result";
import Restart from "../components/Restart";
import IconLogo from "../components/icons/Logo";
import IconLetterX from "../components/icons/LetterX";
import IconLetterO from "../components/icons/LetterO";
import IconRestart from "../components/icons/Restart";

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

export type Player = "X" | "O";

interface State {
  user: Player;
  turn: Player;
  grid: Grid;
  winner: (Player | undefined)[];
}

type Action =
  | { type: "player-move"; chosenTile: Number }
  | { type: "restart" }
  | { type: "next-round" };

interface Props {
  user: Player;
}

export default function Game(props: Props) {
  const [visibilityRestartModal, setVisibilityRestartModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, props.user, init);
  const navigate = useNavigate();

  function isFinish(grid: Grid) {
    return (
      calculateWinner(grid) !== undefined ||
      grid.every((tile) => tile !== undefined)
    );
  }

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
        setVisibilityRestartModal(false);
        return {
          ...state,
          turn: init(props.user).turn,
          grid: init(props.user).grid,
        } as State;
      case "next-round":
        return {
          ...state,
          turn: init(props.user).turn,
          grid: init(props.user).grid,
          winner: state.winner.concat([calculateWinner(state.grid)]),
        } as State;
      default:
        throw new Error();
    }
  }

  return (
    <>
      {isFinish(state.grid) ? (
        <Result
          user={props.user}
          winner={calculateWinner(state.grid)}
          onClickQuit={() => navigate("/")}
          onClickNextRound={() => dispatch({ type: "next-round" })}
        />
      ) : (
        <></>
      )}

      {visibilityRestartModal ? (
        <Restart
          onClickCancel={() => setVisibilityRestartModal(false)}
          onClickYes={() => dispatch({ type: "restart" })}
        />
      ) : (
        <></>
      )}

      <div className="p-6 h-full bg-dark-navy">
        <div className="flex items-center">
          <div className="flex-1">
            <IconLogo className="h-8" />
          </div>
          <div className="flex-1 text-center">
            <div className="inline-block w-auto bg-semi-dark-navy h-10 px-4 uppercase text-silver rounded-md shadow-button-sm shadow-[#10212A]">
              <div className="text-sm flex items-center justify-center gap-2 h-full w-full pb-1">
                {state.turn === "X" ? (
                  <IconLetterX className="h-4 text-silver" />
                ) : (
                  <></>
                )}
                {state.turn === "O" ? (
                  <IconLetterO className="h-4 text-silver" />
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
              onClick={() => setVisibilityRestartModal(true)}
            >
              <div className="pb-1">
                <IconRestart className="h-4" />
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
                  {state.grid[0] === "X" ? (
                    <IconLetterX className="h-10" />
                  ) : (
                    <></>
                  )}
                  {state.grid[0] === "O" ? (
                    <IconLetterO className="h-10" />
                  ) : (
                    <></>
                  )}
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
                  {state.grid[1] === "X" ? (
                    <IconLetterX className="h-10" />
                  ) : (
                    <></>
                  )}
                  {state.grid[1] === "O" ? (
                    <IconLetterO className="h-10" />
                  ) : (
                    <></>
                  )}
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
                  {state.grid[2] === "X" ? (
                    <IconLetterX className="h-10" />
                  ) : (
                    <></>
                  )}
                  {state.grid[2] === "O" ? (
                    <IconLetterO className="h-10" />
                  ) : (
                    <></>
                  )}
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
                  {state.grid[3] === "X" ? (
                    <IconLetterX className="h-10" />
                  ) : (
                    <></>
                  )}
                  {state.grid[3] === "O" ? (
                    <IconLetterO className="h-10" />
                  ) : (
                    <></>
                  )}
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
                  {state.grid[4] === "X" ? (
                    <IconLetterX className="h-10" />
                  ) : (
                    <></>
                  )}
                  {state.grid[4] === "O" ? (
                    <IconLetterO className="h-10" />
                  ) : (
                    <></>
                  )}
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
                  {state.grid[5] === "X" ? (
                    <IconLetterX className="h-10" />
                  ) : (
                    <></>
                  )}
                  {state.grid[5] === "O" ? (
                    <IconLetterO className="h-10" />
                  ) : (
                    <></>
                  )}
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
                  {state.grid[6] === "X" ? (
                    <IconLetterX className="h-10" />
                  ) : (
                    <></>
                  )}
                  {state.grid[6] === "O" ? (
                    <IconLetterO className="h-10" />
                  ) : (
                    <></>
                  )}
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
                  {state.grid[7] === "X" ? (
                    <IconLetterX className="h-10" />
                  ) : (
                    <></>
                  )}
                  {state.grid[7] === "O" ? (
                    <IconLetterO className="h-10" />
                  ) : (
                    <></>
                  )}
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
                  {state.grid[8] === "X" ? (
                    <IconLetterX className="h-10" />
                  ) : (
                    <></>
                  )}
                  {state.grid[8] === "O" ? (
                    <IconLetterO className="h-10" />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </button>

            {/* result */}
            <div>
              <div className="bg-light-blue h-16 flex flex-col items-center justify-center rounded-lg">
                <div className="text-sm text-dark-navy">X (YOU)</div>
                <div className="text-xl font-bold text-dark-navy">
                  {state.winner.filter((x) => x === "X").length}
                </div>
              </div>
            </div>
            <div>
              <div className="bg-silver h-16 flex flex-col items-center justify-center rounded-lg">
                <div className="text-sm text-dark-navy">TIES</div>
                <div className="text-xl font-bold text-dark-navy">
                  {state.winner.filter((x) => x === undefined).length}
                </div>
              </div>
            </div>
            <div>
              <div className="bg-light-yellow h-16 flex flex-col items-center justify-center rounded-lg">
                <div className="text-sm text-dark-navy">O (CPU)</div>
                <div className="text-xl font-bold text-dark-navy">
                  {state.winner.filter((x) => x === "O").length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
