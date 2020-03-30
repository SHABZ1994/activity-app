import actionTypes from "../constants/action.types";
import getCurrentMember from "../utils/actions.utils";
const INITIAL_STATE = {
  data: [],
  loading: true,
  error: "",
  isOpen: false,
  member: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_DATA:
      return { ...state, loading: true, error: "" };
    case actionTypes.DATA_RECEIVED:
      return { ...state, data: action.data, loading: false, error: "" };
    case actionTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: `Error Fetching Data : ${action.error}`
      };
    case actionTypes.TOGGLE_MODAl:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case actionTypes.SET_MEMBER:
      return {
        ...state,
        member: getCurrentMember(state.data, action.id)
      };
    default:
      return state;
  }
};

export default reducer;
