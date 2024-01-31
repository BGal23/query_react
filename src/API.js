import axios from "axios";

axios.defaults.baseURL = "https://65907536cbf74b575ecace6e.mockapi.io/bg";

const fetchData = async () => {
  try {
    const resp = await axios.get("/contacts");
    return resp.data;
  } catch (error) {
    console.error(error.message);
  }
};

const sendData = async ({ name, number }) => {
  try {
    const resp = await axios.post("/contacts", { name, number });
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error.message);
  }
};

export { fetchData, sendData };
