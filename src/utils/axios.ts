import axios from "axios";
// ----------------------------------------------------------------------

const HOST_API = "https://www.omdbapi.com";
const axiosInstance = axios.create({
  baseURL: HOST_API,
});

//GET REQUEST
export const sendGet = (api: string, options?: any, dataOnly: boolean = true) =>
  new Promise((resolve, reject) => {
    axiosInstance
      .get(api, options)
      .then((response) => {
        if (dataOnly) resolve(response?.data);
        else resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

//Post REQUEST
export const sendPost = (
  api: string,
  payload: any,
  options?: any,
  dataOnly: boolean = true
) =>
  new Promise((resolve, reject) => {
    axiosInstance
      .post(api, payload, options)
      .then((response) => {
        if (dataOnly) resolve(response?.data);
        else resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

//Put REQUEST
export const sendPut = (
  api: string,
  payload: any,
  options?: any,
  dataOnly: boolean = true
) =>
  new Promise((resolve, reject) => {
    let requestInstance = axiosInstance;

    requestInstance
      .put(api, payload, options)
      .then((response) => {
        if (dataOnly) resolve(response?.data);
        else resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const sendPatch = (
  api: string,
  payload: any,
  options?: any,
  dataOnly: boolean = true
) =>
  new Promise((resolve, reject) => {
    let requestInstance = axiosInstance;

    requestInstance
      .patch(api, payload, options)
      .then((response) => {
        if (dataOnly) resolve(response?.data);
        else resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

//Delete REQUEST
export const sendDelete = (
  api: string,
  options?: any,
  dataOnly: boolean = true
) =>
  new Promise((resolve, reject) => {
    let requestInstance = axiosInstance;

    requestInstance
      .delete(api, options)
      .then((response) => {
        if (dataOnly) resolve(response?.data);
        else resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });

export default axiosInstance;
