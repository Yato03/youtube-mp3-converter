export const sendUrl = (url, setError) => {
  const fullUrl = `https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess?url=${url}&format=mp3&responseFormat=json&lang=en`;
  console.log({ fullUrl });
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "534972cf31msh9dfa3047f355576p182fc0jsnd1d2d4d12ed3",
      "X-RapidAPI-Host": "t-one-youtube-converter.p.rapidapi.com"
    }
  };

  return fetch(fullUrl, options)
    .then((res) => res.json())
    .catch((err) => {
      console.error("error:" + err);
      setError("Error enviando los datos");
    });
};
