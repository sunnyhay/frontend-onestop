import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  colleges: [],
  search: {
    gpa: "3.6",
    satAvg: "1501",
    satRead: "740",
    satMath: "780",
    satWrt: "760",
    actCum: "33",
    actEng: "34",
    actMath: "32",
    actWrt: "31",
    rank: "10",
  },
  status: "idle",
  error: null,
};

export const fetchColleges = createAsyncThunk(
  "colleges/fetchColleges",
  async () => {
    try {
      const resp = await axios.get("http://localhost:5000/College");
      return resp.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

export const searchColleges = createAsyncThunk(
  "colleges/searchColleges",
  async (input) => {
    try {
      const resp = await axios.post("http://localhost:5000/College", input);
      console.info("Response: " + JSON.stringify(resp.data));
      return resp.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

const collegesSlice = createSlice({
  name: "colleges",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchColleges.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchColleges.fulfilled]: (state, action) => {
      state.status = "succeeded";
      // replace colleges using API response
      state.colleges = action.payload;
    },
    [fetchColleges.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [searchColleges.fulfilled]: (state, action) => {
      console.info("Current state: " + JSON.stringify(state));
      console.info("Current action: " + JSON.stringify(action.payload));
      state.colleges = action.payload;
    },
    [searchColleges.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default collegesSlice.reducer;

export const selectAllColleges = (state) => state.colleges.colleges;

export const selectCollegeById = (state, collegeId) =>
  state.colleges.colleges.find((college) => college.id === collegeId);
