import {GET_CLUB_LIST} from "../actions/clubActions";

let initialState = {
  getClubList: false,
  errorClubList: false,
  title: "Premier League",
};

const clubs = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLUB_LIST:
      return {
        ...state,
        getClubList: action.payload.data,
        errorClubList: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default clubs;
