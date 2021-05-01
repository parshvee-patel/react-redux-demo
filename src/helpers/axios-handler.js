import axios from "axios"

/**
 * Create Base URL Axios
 */
const baseUrl = process.env.REACT_APP_BASE_URL
let instance = axios.create({
    baseURL: baseUrl
})
export default instance