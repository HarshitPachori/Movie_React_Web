import axios from "axios";

export default axios.create({
  // baseURL: "https://nutty-marble-production.up.railway.app/",
  baseURL: "http://localhost:8080/",
});
