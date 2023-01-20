import React from "react";
import { useState, useEffect } from "react";
import { iconLogo } from "../consttants";
import Input from "../ui/Input";
import {
  loginUserFeilure,
  loginUserSucces,
  loginUserStart,
} from "../slice/auth";
import AuthService from "../service/auth";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  console.log(isLoading);

  useEffect(() => {
    console.log(name);
  }, [name]);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
    const user = { name };
    try {
      const response = await AuthService.userLogin(user);
      console.log(response);
      dispatch(loginUserSucces());
    } catch (error) {
      dispatch(loginUserFeilure());
    }
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

          <button
            className=" mt-5 w-100 btn btn-lg btn-primary"
            onClick={loginHandler}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "loading.." : "Login"}
          </button>
          <p className="mt-5 mb-3 text-muted">© 2020–2023 Invoice</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
