import axios from "axios";

export const GET_STANDINGS = "GET_STANDINGS";

export const getStandings = () => {
  console.log("2. Masuk Action");
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
      url: "https://api-football-standings.azharimm.site/leagues",
      timeout: 120000,
    })
      .then((response) => {
        // Berhasil get API
        console.log("3. Berhasil Get Data", response);
        dispatch({
          type: GET_STANDINGS,
          payload: {
            loading: false,
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        // Gagal get API
        dispatch({
          type: GET_STANDINGS,
          payload: {
            loading: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          },
        });
      });
  };
};
