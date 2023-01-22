import axios from "axios";

const http = axios.create({
  baseURL: "https://api.unsplash.com/",
});

const ACCESS_KEY = "8QBTNzLJQIUYJszTvjwS9WVGIaoKHegUFzDM8zcpfNE";

export const api = {
  getAllPhotos: async () => {
    let response = await http.get(`photos/?client_id=${ACCESS_KEY}`);
    return response.data;
  },
};
