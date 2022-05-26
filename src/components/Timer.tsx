/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";

interface TimerProps {
  currentPlayer: Player;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback = currentPlayer.isWhite
      ? decrementWhiteTimer
      : decrementBlackTimer;

    timer.current = setInterval(callback, 1000);
  };

  const decrementBlackTimer = () => {
    setBlackTime((prev) => prev - 1);
  };
  const decrementWhiteTimer = () => {
    setWhiteTime((prev) => prev - 1);
  };

  return (
    <div>
      <div>
        <button onClick={restart}>Restart</button>
        <h2>black time - {blackTime}</h2>
        <h2>white time - {whiteTime}</h2>
      </div>
    </div>
  );
};

export default Timer;
