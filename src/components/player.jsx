import React, { useState } from "react";

export default function Player({ name, symbol,isActive }) {
  const [playername, setplayername] = useState(name);
  const [isEditing, setisEditing] = useState(false);
  const handleEditing = () => {
    setisEditing((prev) => !prev);
  };
  const handleplayername = (e) => {
    setplayername(e.target.value)
  };
  return (
    <>
      <li className={isActive? "active":undefined}>
        <span className="player">
          {isEditing ? (
            <input type="text" value={playername} onChange={handleplayername} />
          ) : (
            <span className="player-name">{playername}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
