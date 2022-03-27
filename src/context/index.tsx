import React, { FC, createContext, useReducer, useMemo, Reducer, useContext } from "react";

// mui
import { useTheme, PaletteColor } from '@mui/material/styles'

interface State {
  mainColor: PaletteColor;
  sidenav: boolean;
  category: string;
  viewMore: boolean;
}

interface Action {
  type : string,
  value : PaletteColor | boolean | string
}

const MaterialUI = createContext<[State, React.Dispatch<Action>] | undefined>(undefined);

const reducer : Reducer<State, Action> = (state, action) : State => {
  if (action.type === "MAIN_COLOR" && typeof action.value !== 'boolean' && typeof action.value !== 'string') {
    return { ...state, mainColor: action.value };
  } else if (action.type === "SIDENAV" && typeof action.value === 'boolean') {
    return { ...state, sidenav: action.value };
  } else if (action.type === "CATEGORY" && typeof action.value === 'string') {
    return { ...state, category: action.value };
  } else if (action.type === "VIEW_MORE" && typeof action.value === 'boolean') { 
    return { ...state, viewMore: action.value };
  }else {
    throw new Error(`Unhandled : { action type: ${action.type}, action value: ${action.value} }`);
  }
}

const MaterialUIControllerProvider: FC = ({ children }) => {
  const theme = useTheme();

  const initialState : State = {
    mainColor: theme.palette.primary,
    sidenav: true,
    category: 'Dashboard',
    viewMore: true
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value : [State, React.Dispatch<Action>] = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

const setMainColor = (dispatch : React.Dispatch<Action>, value : PaletteColor) => dispatch({ type: "MAIN_COLOR", value});
const setSidenav = (dispatch : React.Dispatch<Action>, value : boolean) => dispatch({ type: "SIDENAV", value});
const setCategory = (dispatch : React.Dispatch<Action>, value : string) => dispatch({ type: "CATEGORY", value});
const setViewMore = (dispatch : React.Dispatch<Action>, value : boolean) => dispatch({ type: "VIEW_MORE", value});

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMainColor,
  setSidenav,
  setCategory,
  setViewMore
};