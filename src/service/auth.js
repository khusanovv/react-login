import axios from "./api";

const AuthSevice = {
  async userLogin(user) {
    const { data } = await axios.post("", { user });
    return data;
  },
};

export default AuthSevice;
