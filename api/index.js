import axios from "axios";
const API_KEY = "";
const baseUrl = "";

const formatUrl = () => {
  let url = baseUrl + "";
  if (!params) return url;
  let paramKeys = Object.keys(params);
  paramKeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });
  console.log("first", url);
  return url;
};

export const apiCallBack = async (params) => {
  try {
    const res = await axios.get(formatUrl(params));
  } catch (error) {
    console.log("error", error);
  }
};
