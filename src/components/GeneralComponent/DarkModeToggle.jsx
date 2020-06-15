import React, { useState } from "react";


function DarkModeToggle() {
  const [mode, setMode] = useState(false);

  const onClickHandler = () => {
    setMode(!mode);
  };

  return (
    <div className="App" style={{ background: `${mode ? "#111" : "#fff"}` }}>
      <h1 style={{ color: `${mode ? "#fff" : "#111"}` }}>
        {mode ? "Dark" : "Light"}
      </h1>
      <button
        className="toggle"
        onClick={onClickHandler}
        style={{ background: `${mode ? "rgba(255,255,255,1)" : "#333"}` }}
      >
        <div
          className="btn"
          style={{
            marginLeft: `${mode ? "53px" : "2px"}`,
            background: `${mode ? "#333" : "#fff"}`
          }}
        />
      </button>
    </div>
  );
}

export default DarkModeToggle;