import axios from 'axios';

// Create an Axios Instance
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: process.env.EXPO_PUBLIC_TMDB_API_KEY
    }
});

// Get Popular Movie Data from an TMDB API
export const getMovies = () => {
    return api.get("/movie/popular")
};