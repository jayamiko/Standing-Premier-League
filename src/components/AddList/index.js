import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addList, getStandings } from "../../actions/StandingsAction";

function AddList() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const { addStandingsResult } = useSelector((state) => state.ListReducer);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addList({ name: name, slug: slug }));
  };

  useEffect(() => {
    if (addStandingsResult) {
      dispatch(getStandings());
    }
  }, [addStandingsResult, dispatch]);

  return (
    <div>
      <h4>Add List</h4>

      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="name"
          placeholder="Name League"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={slug}
          onChange={(event) => setSlug(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddList;
