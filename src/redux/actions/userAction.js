import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "GET_USERS",
  //   axios
  //     .get("http://172.17.0.90:7777/users")
  //     .then((response) => {
  //       const users = response.data.data.users;
  //       console.log("zzzzzzz", users);
  //       return users;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       throw err;
  //     })
  async () => {
    try {
      const { data } = await axios.get("http://172.17.0.90:7777/users");
      console.log(data.data.users);
      return data.data.users;
    } catch (error) {
      console.log(error);
    }
  }
);
