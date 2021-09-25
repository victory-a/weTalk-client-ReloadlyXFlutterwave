export const types = {
  SET_FORM_VALUE: "SET_FORM_VALUE",
  SET_TRANSACTION_DETAILS: "SET_TRANSACTION_DETAILS"
};

/* eslint-disable indent */
function reducer(state, action) {
  switch (action.type) {
    case types.SET_FORM_VALUE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    case types.SET_TRANSACTION_DETAILS:
      return {
        ...state,
        transactionDetails: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
