import React from "react";
import { useSelector } from "react-redux";

import { selectCollegeById } from "./collegesSlice";

export const SingleCollegePage = ({ match }) => {
  const { collegeId } = match.params;

  const college = useSelector((state) => selectCollegeById(state, collegeId));

  if (!college) {
    return (
      <section>
        <h2>College not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="college">
        <h3>{college.name}</h3>
        <h3>{college.city}</h3>
        <h3>{college.stateBrief}</h3>
        <h3>{college.url}</h3>
      </article>
    </section>
  );
};
