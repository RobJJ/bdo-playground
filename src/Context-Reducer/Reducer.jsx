//
const reducer = (state, action) => {
  if (action.type === "ADD_TAB_TO_STATE") {
    return {
      ...state,
      tabBarState: [...state.tabBarState, { name: action.payload }],
    };
  }
  //
  return state;
};
//
export default reducer;
