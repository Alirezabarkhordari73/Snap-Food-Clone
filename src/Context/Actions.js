export const checkBoxFilter = (dispatch, payload) => {
  dispatch({
    type: "CHECKBOX_FILTER",
    payload: payload,
  });
};
