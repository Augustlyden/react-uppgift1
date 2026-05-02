import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/2014',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 404:
                    console.error("Resursen hittades ej");
                    break;
                case 500:
                    console.error("Serverfel");
                    break;
                default:
                    console.error("Något gick fel:", error.message);
            }
        } else if (error.request) {
            console.error("Nätverksfel");
        }
        return Promise.reject(error);
    }
)

export default apiClient;