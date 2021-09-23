import React from "react";
import reducer from "./reducer";

const initialState = {
  country: {},
  email: "",
  amount: null,
  mobile: ""
};

const Context = React.createContext();
Context.displayName = "App Context";

const AppProvider = props => {
  const { Provider } = Context;
  const [page, setPage] = React.useState(0);

  const [formValues, setFormValues] = React.useState(initialState);

  function goBack() {
    return setPage(currentpage => {
      if (currentpage > 0) {
        return currentpage - 1;
      } else {
        return currentpage;
      }
    });
  }

  function goGorward() {
    return setPage(currentPage => {
      if (currentPage > 5) return;

      return currentPage + 1;
    });
  }

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const values = { page, setPage, state, dispatch, goBack, goGorward, formValues, setFormValues };
  return <Provider value={values} {...props} />;
};

export default AppProvider;

export const useProvider = () => {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error("useProvider must be used within a AppProvider");
  }

  return context;
};
