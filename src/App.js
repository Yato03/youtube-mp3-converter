import "./styles.css";
import { useState } from "react";
import { sendUrl } from "./services/mp3-converter/sendUrl";
import { checkConversion } from "./services/mp3-converter/checkConversion";
import { Message } from "./Message";
import { Nav } from "./Nav";
import { Info } from "./Info";
import { Footer } from "./Footer";

export default function App() {
  const [url, setUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [percentage, setPercentage] = useState(-1);
  const [error, setError] = useState("");

  const handleOnChangeUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setError("");
    setDownloadUrl("");
    if (url) {
      setPercentage(0);
      console.log(percentage);
      sendUrl(url, setError).then((res) => {
        checkConversion(res, setDownloadUrl, setPercentage, setError);
      });
    } else {
      setError("Escriba una url");
    }
  };

  return (
    <div className="App">
      <Nav />
      <main>
        <h1>Youtube mp3 converter</h1>
        <form>
          <input
            type="text"
            onChange={handleOnChangeUrl}
            value={url}
            placeholder="Escribe aqui la url..."
            className="btn btn-dark"
            required
          />
          <br />
          <button onClick={handleOnSubmit}>Convertir</button>
        </form>
        <div className="messages">
          <p className="message">
            <Message downloadUrl={downloadUrl} percentage={percentage} />
          </p>
          {error ? <p className="error">{error}</p> : ""}
        </div>
        <Info />
        <Footer />
      </main>
    </div>
  );
}

/*

<a href={downloadUrl} target="_blank" download>
              Descargar...
            </a>

"Aqui va la url..."*/
