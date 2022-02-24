import axios from "axios";

const instance = axios.create({
  baseURL: "https://mmo-games.p.rapidapi.com/",
  headers: {
    "x-rapidapi-host": "mmo-games.p.rapidapi.com",
    "x-rapidapi-key": "5e8e5c0262mshb511c042844759ep1439d1jsncfcb84b2f768",
  },
});

export const getGameData = (url) => {
    return instance.get(url).then(response => {
        return response.data
    })
}

export const getGameDetails = (url, gameId) => {
  return instance.get(url, {params: {id: gameId}}).then(response => {
      return response.data
  })
}