import axios from "axios";

export const GET_STANDINGS = "GET_STANDINGS";
export const ADD_LIST = "ADD_LIST";

export const getStandings = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_STANDINGS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "http://localhost:3000/standings",
      timeout: 120000,
    })
      .then((response) => {
        // Berhasil get API
        dispatch({
          type: GET_STANDINGS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // Gagal get API
        dispatch({
          type: GET_STANDINGS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

// POST API
export const addList = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_LIST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // Post API
    axios({
      method: "POST",
      url: "http://localhost:3000/standings",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // Berhasil add API
        console.log("Berhasil Post Data", response);
        dispatch({
          type: ADD_LIST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error.message);
        // Gagal add API
        dispatch({
          type: ADD_LIST,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
