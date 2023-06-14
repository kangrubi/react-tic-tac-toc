"use client";
import React, { useState } from "react";

interface Props {
  value: string | null;
  onSquareClick: () => void;
}

const Square = (props: Props) => {
  return (
    <button className="square" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
};

export default Square;
