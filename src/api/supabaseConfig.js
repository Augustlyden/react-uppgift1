import axios from "axios";

const supabaseClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  }
})

supabaseClient.interceptors.response.use(
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

export default supabaseClient;