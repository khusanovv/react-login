// import { useState } from "react";

const Input = ({ label, state, setState, type = "text" }) => {
  return (
    <div>
      <div class="form-floating mt-3">
        <input
          value={state}
          type={type}
          class="form-control"
          onChange={(e) => setState(e.target.value)}
          id="floatingInput"
          placeholder={label}
        />
        <label for="floatingInput">{label}</label>
      </div>
    </div>
  );
};

export default Input;
