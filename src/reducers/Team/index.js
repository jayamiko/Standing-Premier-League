import { GET_STANDINGS } from "../../actions/StandingsAction";

const initialState = {
  getStandingsResult: false,
  getStandingsLoading: false,
  getStandingsError: false,
};

const team = (state = initialState, action) => {
  switch (action.type) {
    case GET_STANDINGS:
      return {
        ...state,
        getStandingsResult: action.payload.data,
        getStandingsLoading: action.payload.loading,
        getStandingsError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default team;
