import { getStatus } from "./getStatus";

export const checkConversion = (
  res,
  setDownloadUrl,
  setPercentage,
  setError
) => {
  const time = 3000;
  const guid = res.guid;
  let counter = 0;
  const interval = setInterval((res) => {
    getStatus(guid)
      .then((res) => {
        console.log("getStatus:", res);
        setPercentage(res.total_percentage);
        if (res.status.includes("complete")) {
          setDownloadUrl(res.file);
          clearInterval(interval);
        } else if (counter > 11) {
          setError("Video demasiado grande");
          setPercentage(-1);
          clearInterval(interval);
        } else if (res.status.includes("error")) {
          setError(res.message);
          clearInterval(interval);
        }
        counter++;
      })
      .catch((error) => {
        console.error(error);
        setError("Error al convertir");
        setPercentage(-1);
        clearInterval(interval);
      });
  }, time);
};
