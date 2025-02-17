// const rapidApiKey = "d030507913msh0f32368a40772e4p166eddjsn79426fb14b47"; used
const rapidApiKey = "f7ecb3f80emsh53660291bd62e23p15ab1fjsn78402de6a945";
// const rapidApiKey = "d8bbccf172msh744a6d844ea5a80p101835jsn08be4d125c45";
// const rapidApiKey = "";

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
