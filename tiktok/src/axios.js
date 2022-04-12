import axios from "axios";

const instance = axios.create({
    baseURL: "https://ticktok-mern-jodrich.herokuapp.com/",
});

export default instance;