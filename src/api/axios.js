import axios from "axios";
// import "dotenv/config";

export default axios.create({
  baseURL: "http://localhost:4000",
});
