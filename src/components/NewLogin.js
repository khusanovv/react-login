import React, { useState, useEffect } from "react";
import axios from "axios";
import { iconLogo } from "../consttants";
import Input from "../ui/Input";

const NewLogin = () => {
  let body = {
    phone: "998990065551",
    password: "123456",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    return fetch("http://apiservice.gx.uz/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((res) => console.log(res));
  };

  return (
    <div>
      <main className="form-signin w-25 m-auto">
        <form>
          <img
            className="mb-4 mt-5"
            src={iconLogo}
            alt=""
            width="150"
            height="150"
          />
          <h1 className="h3 mb-3 fw-normal">Please Login</h1>

          <Input label={"User name or number"} />
          <Input label={"Password"} type={"Password"} />

          <button
            className=" mt-5 w-100 btn btn-lg btn-primary"
            onClick={onSubmit}
            type="submit"
          >
            Click
          </button>
          <p className="mt-5 mb-3 text-muted">© 2020–2023 Invoice</p>
        </form>
      </main>
    </div>
  );
};

export default NewLogin;
