import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-76c71-default-rtdb.firebaseio.com/",
    headers: {
        'Access-Control-Allow-Headers': 'Origin',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':  'http://localhost:3000/',
    }
});

export default instance;



