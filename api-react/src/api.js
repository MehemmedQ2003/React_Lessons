import axios from "axios";

export const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID NgIyhi5QtQ9Be2VyS13JmQP4ZGEhVKdNiAGhSDC7FiQ"
        },
        params: {
            query: term
        }
    });
    return response.data.results;
}