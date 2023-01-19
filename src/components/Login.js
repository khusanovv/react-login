import React from "react";
import { useState, useEffect } from "react";

import { iconLogo } from "../consttants";
import Input from "../ui/Input";

const Login = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div>
      <main class="form-signin w-25 m-auto">
        <form>
          <img
            class="mb-4 mt-5"
            src={iconLogo}
            alt=""
            width="150"
            height="150"
          />
          <h1 class="h3 mb-3 fw-normal">Please Login</h1>

          <Input
            label={"User name or number"}
            state={name}
            setState={setName}
          />
          <Input
            label={"Password"}
            type={"Password"}
            state={pwd}
            setState={setPwd}
          />

          <button class=" mt-5 w-100 btn btn-lg btn-primary" type="submit">
            Login
          </button>
          <p class="mt-5 mb-3 text-muted">© 2020–2023 Invoice</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
