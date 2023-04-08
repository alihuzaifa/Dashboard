import axios from "axios";
import baseUrl from "commonUnit";
const service = axios.create({
  baseUrl: baseUrl,
});

//Global api use...
export const getApiData = async (url) => {
  try {
    const res = await service.get(url);
    return res;
  } catch (error) {
    return error.message;
  }
};

export const postApiData = async (url, data) => {
  try {
    const res = await service.post(url, data);
    return res;
  } catch (error) {
    return error.message;
  }
};
