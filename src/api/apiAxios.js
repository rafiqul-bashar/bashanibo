import axios from "axios";

export default axios.create({
  baseURL: "https://murmuring-springs-08845.herokuapp.com",
  // baseURL: "http://localhost:5000",
});
