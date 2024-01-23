import axios from "axios";
const JSONSERVER = import.meta.env.VITE_JSONSERVER;
console.log(JSONSERVER);

const SI_Api = axios.create({
  baseURL: JSONSERVER,
});

SI_Api.getAll = async function () {
  const response = await SI_Api.get("/cities");
  return response.data;
};

SI_Api.getCity = async function (cityUrl) {
  try {
    const response = await SI_Api.get(`/cities?url=${cityUrl}`);
    if (response.length > 0) return response;
    else console.log("City not found");
  } catch (error) {
    console.log(error);
  }
};

export default SI_Api;
