import axios from "axios";

export const GET_CLUB_LIST = "GET_CLUB_LIST";

export const getClubList = () => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/jayamiko/db-standing/standings")
      .then((response) => {
        let result = response.data;
        dispatch({
          type: GET_CLUB_LIST,
          payload: {
            data: result,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_CLUB_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};
