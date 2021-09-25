import React from "react";
import reducer, { types } from "./reducer";

const initialState = {
  country: {},
  email: "",
  amount: 10,
  mobile: "",
  callingCode: "",
  transactionDetails: {}
};

const Context = React.createContext();
Context.displayName = "App Context";

const AppProvider = props => {
  const { Provider } = Context;
  const [page, setPage] = React.useState(0);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const goBack = React.useCallback(() => {
    setIsLoading(false);

    return setPage(currentpage => {
      if (currentpage > 0) {
        return currentpage - 1;
      } else {
        return currentpage;
      }
    });
  }, []);

  const goGorward = React.useCallback(() => {
    setIsLoading(false);
    return setPage(currentPage => {
      if (currentPage > 5) return;

      return currentPage + 1;
    });
  }, []);

  const setFormValue = React.useCallback((name, value) => {
    dispatch({
      type: types.SET_FORM_VALUE,
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
    setFormValue,
    isLoading,
    setIsLoading,
    dispatch
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
