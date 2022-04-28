import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mern-asutton2.herokuapp.com/",  
});
export default instance;