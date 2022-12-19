//
const reducer = (state, action) => {
  if (action.type === "ADD_TAB_TO_STATE") {
    return {
      ...state,
      tabBarState: [...state.tabBarState, { name: action.payload }],
    };
  }
  //
  if (action.type === "REMOVE_DISTRICT_FROM_TABBAR") {
    const newTabBarState = state.tabBarState.filter(
      (districtObj) => districtObj.name !== action.payload
    );
    //
    return {
      ...state,
      tabBarState: newTabBarState,
    };
  }
  //
  return state;
};
//
export default reducer;
