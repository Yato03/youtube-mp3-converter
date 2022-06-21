export const getStatus = (guid) => {
  const url = `https://t-one-youtube-converter.p.rapidapi.com/api/v1/statusProcess?guid=${guid}&responseFormat=json&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "534972cf31msh9dfa3047f355576p182fc0jsnd1d2d4d12ed3",
      "X-RapidAPI-Host": "t-one-youtube-converter.p.rapidapi.com"
    }
  };

  return fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err.message));
};
