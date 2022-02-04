import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Result from "../components/Result";
import Restart from "../components/Restart";
import IconLogo from "../components/icons/IconLogo";
import IconLetterX from "../components/icons/IconLetterX";
import IconLetterO from "../components/icons/IconLetterO";
import IconRestart from "../components/icons/IconRestart";

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

      <div className="h-full bg-dark-navy flex md:items-center justify-center">
        <div className="p-6 max-w-lg flex-1">
          <div className="w-full grid grid-cols-tic-tac-toe gap-5 items-center justify-center">
            <IconLogo className="h-8" />
            <div className="inline-block w-auto bg-semi-dark-navy h-14 px-4 uppercase text-silver rounded-md shadow-button-sm shadow-[#10212A]">
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
            <button
              type="button"
              title="restart"
              className="ml-auto bg-silver h-14 w-14 flex items-center justify-center rounded-md shadow-button-sm shadow-[#6B8997]"
              onClick={() => setVisibilityRestartModal(true)}
            >
              <div className="pb-1">
                <IconRestart className="h-4" />
              </div>
            </button>
          </div>
          <div className="md:mt-5 mt-16">
            <div className="w-full grid grid-cols-tic-tac-toe gap-5">
              {state.grid.map((cell, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    title={`button ${index + 1}`}
                    disabled={state.grid[index] !== undefined}
                    onClick={(e) =>
                      dispatch({ type: "player-move", chosenTile: index })
                    }
                  >
                    <div className="aspect-square w-full flex items-center justify-center bg-semi-dark-navy rounded-lg shadow-button shadow-[#10212A]">
                      <div className="pb-2">
                        {state.grid[index] === "X" ? (
                          <IconLetterX className="md:h-16 h-12" />
                        ) : (
                          <></>
                        )}
                        {state.grid[index] === "O" ? (
                          <IconLetterO className="md:h-16 h-12" />
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}

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
      </div>
    </>
  );
}
