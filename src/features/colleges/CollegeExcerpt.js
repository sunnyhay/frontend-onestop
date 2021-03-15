import React from "react";
import { Link } from "react-router-dom";

let CollegeExcerpt = ({ college }) => {
  return (
    <article className="college-excerpt" key={college.id}>
      <h3>{college.name}</h3>
      <h3>{college.city}</h3>
      <h3>{college.stateBrief}</h3>
      <h3>{college.url}</h3>
      <Link to={`/colleges/${college.id}`} className="button muted-button">
        View College
      </Link>
    </article>
  );
};

CollegeExcerpt = React.memo(CollegeExcerpt);

export { CollegeExcerpt };
