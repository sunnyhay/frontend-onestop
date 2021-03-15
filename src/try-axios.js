const axios = require("axios");

const input = {
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
};

const sendGetReq = async () => {
  try {
    const resp = await axios.post("http://localhost:5000/College", input);
    console.info(resp.data);
  } catch (err) {
    console.error(err);
  }
};

sendGetReq();
