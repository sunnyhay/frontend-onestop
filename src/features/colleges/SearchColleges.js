import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { searchColleges } from "./collegesSlice";

export const SearchColleges = () => {
  const [gpa, setGpa] = useState("");
  const [satAvg, setSatAvg] = useState("1580");
  const [satRead, setSatRead] = useState("790");
  const [satMath, setSatMath] = useState("790");
  const [satWrt, setSatWrt] = useState("790");
  const [actCum, setActCum] = useState("34");
  const [actEng, setActEng] = useState("34");
  const [actMath, setActMath] = useState("34");
  const [actWrt, setActWrt] = useState("34");
  const [rank, setRank] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  const onGpaChanged = (e) => setGpa(e.target.value);
  const onSatAvgChanged = (e) => setSatAvg(e.target.value);
  const onSatReadChanged = (e) => setSatRead(e.target.value);
  const onSatMathChanged = (e) => setSatMath(e.target.value);
  const onSatWrtChanged = (e) => setSatWrt(e.target.value);
  const onActCumChanged = (e) => setActCum(e.target.value);
  const onActEngChanged = (e) => setActEng(e.target.value);
  const onActMathChanged = (e) => setActMath(e.target.value);
  const onActWrtChanged = (e) => setActWrt(e.target.value);
  const onRankChanged = (e) => setRank(e.target.value);

  const canSave =
    [
      gpa,
      satAvg,
      satRead,
      satMath,
      actCum,
      actEng,
      actMath,
      actWrt,
      rank,
    ].every(Boolean) && addRequestStatus === "idle";

  const onSaveSearchClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        const resultAction = await dispatch(
          searchColleges({
            gpa,
            satAvg,
            satRead,
            satMath,
            satWrt,
            actCum,
            actEng,
            actMath,
            actWrt,
            rank,
          })
        );
        unwrapResult(resultAction);
        setGpa("");
        setRank("");
      } catch (err) {
        console.error("Failed to retrieve colleges: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <section>
      <h2>Search your favorite colleges</h2>
      <form>
        <label htmlFor="collegeGpa">Provide your GPA:</label>
        <input
          type="text"
          id="collegeGpa"
          name="collegeGpa"
          value={gpa}
          onChange={onGpaChanged}
        />
        <label htmlFor="collegeSatAvg">Provide your SAT average:</label>
        <input
          id="collegeSatAvg"
          name="collegeSatAvg"
          value={satAvg}
          onChange={onSatAvgChanged}
        />
        <label htmlFor="collegeSatRead">Provide your SAT read:</label>
        <input
          id="collegeSatRead"
          name="collegeSatRead"
          value={satRead}
          onChange={onSatReadChanged}
        />
        <label htmlFor="collegeSatMath">Provide your SAT math:</label>
        <input
          id="collegeSatMath"
          name="collegeSatMath"
          value={satMath}
          onChange={onSatMathChanged}
        />
        <label htmlFor="collegeSatWrt">Provide your SAT writing:</label>
        <input
          id="collegeSatWrt"
          name="collegeSatWrt"
          value={satWrt}
          onChange={onSatWrtChanged}
        />
        <label htmlFor="collegeActCum">Provide your ACT cumulative:</label>
        <input
          id="collegeActCum"
          name="collegeActCum"
          value={actCum}
          onChange={onActCumChanged}
        />
        <label htmlFor="collegeActEng">Provide your ACT english:</label>
        <input
          id="collegeActEng"
          name="collegeActEng"
          value={actEng}
          onChange={onActEngChanged}
        />
        <label htmlFor="collegeActMath">Provide your ACT math:</label>
        <input
          id="collegeActMath"
          name="collegeActMath"
          value={actMath}
          onChange={onActMathChanged}
        />
        <label htmlFor="collegeActWrt">Provide your ACT writing:</label>
        <input
          id="collegeActWrt"
          name="collegeActWrt"
          value={actWrt}
          onChange={onActWrtChanged}
        />
        <label htmlFor="collegeRank">
          Provide your ranking in your school:
        </label>
        <input
          id="collegeRank"
          name="collegeRank"
          value={rank}
          onChange={onRankChanged}
        />
        <button type="button" onClick={onSaveSearchClicked}>
          Search
        </button>
      </form>
    </section>
  );
};
