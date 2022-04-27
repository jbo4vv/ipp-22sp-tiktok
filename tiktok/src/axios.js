import axios from 'axios';

const instance = () => axios.create({
    baseURL: "https://tiktok-mern-pkim.herokuapp.com/",
});

export default instance;