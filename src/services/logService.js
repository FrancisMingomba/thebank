import http from "./httpService";
import config from '../config.json';

const userEndpoint = config.apiEndpoint + "/register";

export function signup(user) {
    // console.log(userEndpoint);
   return  http.post(userEndpoint, {
        name: user.name,
        email: user.username,
        password: user.password
    });
}