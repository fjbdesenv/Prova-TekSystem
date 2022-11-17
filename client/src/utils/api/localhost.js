import axios from "axios";

const consult = axios.create({
  baseURL: "http://localhost:5000/"
});

export default consult;
