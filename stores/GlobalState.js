import React, { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducers";
import { getData } from "../utils/fetchData";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    nofity: {},
    auth: {},
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { auth } = state;

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      getData("auth/accessToken").then((res) => {
        if (res.err) return localStorage.removeItem("firstLogin");
        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user,
          },
        });
      });
    }
  });

  useEffect(() => {
    const __next_user = JSON.parse(localStorage.getItem("__next_user"));
    if (__next_user) dispatch({ type: "AUTH", payload: __next_user });
  }, []);

  useEffect(() => {
    localStorage.setItem("__next_user", JSON.stringify(auth));
  }, [auth]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
