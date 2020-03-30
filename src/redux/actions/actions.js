import axios from "axios";
import actionTypes from "../constants/action.types";

export const fetchDataAction = () => {
  fetchingData();

  return dispatch => {
    axios
      .get("/members")
      .then(res => dispatch(receivedDataAction(res.data)))
      .catch(err => encounteredError(err));
  };
};

const fetchingData = () => ({
  type: actionTypes.FETCHING_DATA
});

const encounteredError = error => ({
  type: actionTypes.ERROR,
  error
});

export const receivedDataAction = data => ({
  type: actionTypes.DATA_RECEIVED,
  data
});

export const toggleModalAction = () => ({
  type: actionTypes.TOGGLE_MODAl
});

export const setMemberAction = id => ({
  type: actionTypes.SET_MEMBER,
  id
});
