import { GET_STANDINGS, ADD_LIST } from "../../actions/StandingsAction";

const initialState = {
  getStandingsResult: false,
  getStandingsLoading: false,
  getStandingsError: false,

  addStandingsResult: false,
  addStandingsLoading: false,
  addStandingsError: false,
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case GET_STANDINGS:
      return {
        ...state,
        getStandingsResult: action.payload.data,
        getStandingsLoading: action.payload.loading,
        getStandingsError: action.payload.errorMessage,
      };

    case ADD_LIST:
      console.log("4. Masuk Reducer : ", action);
      return {
        ...state,
        addStandingsResult: action.payload.data,
        addStandingsLoading: action.payload.loading,
        addStandingsError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default list;
