/* eslint-disable indent */
function reducer(state, action) {
  switch (action.type) {
    case "SET_FORM_VALUE":
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    default:
      return state;
  }
}

export default reducer;
