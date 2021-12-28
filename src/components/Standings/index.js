import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStandings } from "../../actions/StandingsAction";

function Standings() {
  const { getStandingsResult, getStandingsLoading, getStandingsError } =
    useSelector((state) => state.ListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // getList Klasemen
    dispatch(getStandings());
  }, [dispatch]);

  return (
    <div>
      <h4>Standings World Football</h4>
      {getStandingsResult ? (
        getStandingsResult.map((standing) => {
          return (
            <ul key={standing.id}>
              <li>
                {standing.name}
                <br />
                {standing.slug}
              </li>
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
