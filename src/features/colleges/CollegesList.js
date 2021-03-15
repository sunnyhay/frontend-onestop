import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectAllColleges, fetchColleges } from "./collegesSlice";
import { CollegeExcerpt } from "./CollegeExcerpt";

export const CollegesList = () => {
  const dispatch = useDispatch();
  const colleges = useSelector(selectAllColleges);

  const collegeStatus = useSelector((state) => state.colleges.status);
  const error = useSelector((state) => state.colleges.error);

  useEffect(() => {
    if (collegeStatus === "idle") {
      dispatch(fetchColleges());
    }
  }, [collegeStatus, dispatch]);

  let content;

  if (collegeStatus === "loading") {
    content = <div className="loader">Loading...</div>;
  } else if (collegeStatus === "succeeded") {
    content = colleges.map((college) => (
      <CollegeExcerpt key={college.id} college={college} />
    ));
  } else if (collegeStatus === "failed") {
    //content = <div>{error}</div>;
    console.error(`Error ${error} happens when trying to load!`);
  }

  return (
    <section className="colleges-list">
      <h2>Colleges</h2>
      {content}
    </section>
  );
};
