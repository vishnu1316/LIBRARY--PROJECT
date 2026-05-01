import axios from "axios";

const USER_API = "https://library-project-kxc3.onrender.com/api/users";

// CREATE USER (request)
export const createUser = (data) => axios.post(`${USER_API}/create`, data);

// APPROVE USER
export const approveUser = (data) => axios.post(`${USER_API}/approve`, data);

// GET USERS
export const getUsers = () => axios.get(USER_API);