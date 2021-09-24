import React from "react";
import reducer from "./reducer";

const initialState = {
  country: {},
  email: "",
  amount: 10,
  mobile: "",
  callingCode: ""
};

const Context = React.createContext();
Context.displayName = "App Context";

const AppProvider = props => {
  const { Provider } = Context;
  const [page, setPage] = React.useState(0);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const goBack = React.useCallback(() => {
    return setPage(currentpage => {
      if (currentpage > 0) {
        return currentpage - 1;
      } else {
        return currentpage;
      }
    });
  }, []);

  const goGorward = React.useCallback(() => {
    return setPage(currentPage => {
      if (currentPage > 5) return;

      return currentPage + 1;
    });
  }, []);

  const setFormValue = React.useCallback((name, value) => {
    dispatch({
      type: "SET_FORM_VALUE",
      payload: {
        name,
        value
      }
    });
  }, []);

  const providerValues = {
    page,
    setPage,
    goBack,
    goGorward,
    state,
    setFormValue
  };
  return <Provider value={providerValues} {...props} />;
};

export default AppProvider;

export const useProvider = () => {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error("useProvider must be used within a AppProvider");
  }

  return context;
};
