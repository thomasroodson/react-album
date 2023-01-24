import axios from "axios";

const http = axios.create({
  baseURL: "https://api.unsplash.com/",
});

const ACCESS_KEY = "8QBTNzLJQIUYJszTvjwS9WVGIaoKHegUFzDM8zcpfNE";

export const api = {
  getAllPhotos: async () => {
    let response = await http.get(
      `photos/?order_by=popular&per_page=15&client_id=${ACCESS_KEY}`
    );
    return response.data;
  },

  getPhoto: async (payload: string | undefined) => {
    let response = await http.get(`photos/${payload}?client_id=${ACCESS_KEY}`);
    return response.data;
  },
};
