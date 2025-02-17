const rapidApiKey = "d8bbccf172msh744a6d844ea5a80p101835jsn08be4d125c45";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapidApiKey,
    "X-RapidAPI-Host": "imdb236.p.rapidapi.com",
  },
};
export async function fetchTopMovies() {
  const url = "https://imdb236.p.rapidapi.com/imdb/most-popular-movies";
  const response = await fetch(url, options);
  const data = await response.json();  
  return data;
}

export const searchMovies = async (query) => {
  const url = `https://imdb236.p.rapidapi.com/imdb/search?originalTitle=${encodeURIComponent(
    query
  )}`;
  const response = await fetch(url, options);
  const data = await response.json();
  return data.results;
};
