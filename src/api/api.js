import axios from "axios"
import { getToken } from "../utils/storage"
const authToken = getToken();
const apiClient = axios.create({
    baseURL: `http://localhost:8080`,
    headers: {
        "Authorization": authToken ? "Bearer " + authToken : "",

    }
})

export default apiClient