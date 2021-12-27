import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStandings } from "../../actions/StandingsAction";

function Standings() {
  const { getStandingsResult, getStandingsLoading, getStandingsError } =
    useSelector((state) => state.TeamReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // getList Klasemen
    console.log("1. Use Effect Component Did Mount");
    dispatch(getStandings());
  }, [dispatch]);

  console.log(getStandingsResult);

  return (
    <div>
      <h4>Standings World Football</h4>
      {getStandingsResult ? (
        getStandingsResult.map((standing) => {
          return (
            <ul key={standing.id}>
              <li>{standing.name}</li>
            </ul>
          );
        })
      ) : getStandingsLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getStandingsError ? getStandingsError : "Empty Data"}</p>
      )}
    </div>
  );
}

export default Standings;
