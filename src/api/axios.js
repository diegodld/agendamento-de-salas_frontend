import axios from "axios";
import "./dotenv/config";

axios.defaults.baseURL = process.env.BASE_URL;
