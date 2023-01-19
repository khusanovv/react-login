// import { useState } from "react";

const Input = ({ label, state, setState, type = "text" }) => {
  return (
    <div>
      <div className="form-floating mt-3">
        <input
          value={state}
          type={type}
          className="form-control"
          onChange={(e) => setState(e.target.value)}
          id="floating_input"
          placeholder={label}
        />
        <label htmlFor="floating_input">{label}</label>
      </div>
    </div>
  );
};

export default Input;
