// FilterContext.js

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { FilterAction, FilterState, SET_GENDER, SET_SEARCH } from "../types";

const FilterContext = createContext<
  | {
      state: FilterState;
      dispatch: React.Dispatch<FilterAction>;
    }
  | undefined
>(undefined);

const initialState: FilterState = {
  gender: "all",
  search: "",
};

const filterReducer = (
  state: FilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case SET_GENDER:
      return { ...state, gender: action.payload || "" };
    case SET_SEARCH:
      return { ...state, search: action.payload || "" };
    default:
      return state;
  }
};

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
