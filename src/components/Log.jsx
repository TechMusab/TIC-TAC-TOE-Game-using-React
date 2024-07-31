import React from "react";

export default function Log({ log }) {
  return (
    <>
    <ol id="log">
      <li>
        <span>Player: {log.name}</span>
        <span>Row:{log.rowindex}</span>
        <span>Column:{log.colindex}</span>
      </li>
      </ol>
    </>
  );
}
