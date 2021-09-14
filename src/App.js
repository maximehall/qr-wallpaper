import "./App.css";
import mergeImages from "merge-images";
import background from "./images/iOS-13-wallpaper.jpg";
import { useState } from "react";

function App() {
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [selectedQr, setSelectedQr] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>QR wallpaper</h1>
        {/* <img className="App-logo" alt="logo" /> */}
        <div>
          {selectedQr && (
            <div>
              <img
                alt="not fount"
                width={"250px"}
                src={URL.createObjectURL(selectedQr)}
              />
              <br />
              <button onClick={() => selectedQr(null)}>Retirer</button>
              <button
                onClick={() => {
                  mergeImages([
                    background || URL.createObjectURL(selectedBackground),
                    {
                      src: URL.createObjectURL(selectedQr),
                      x: 220,
                      y: 1700,
                    },
                  ]).then((b64) => (document.querySelector("img").src = b64));
                }}
              >
                Générer
              </button>
            </div>
          )}
          <br />
          Ajouter un fond d'écran
          <input
            type="file"
            name="myBackground"
            placeholder="Ajouter un fond d'écran"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedBackground(event.target.files[0]);
            }}
          />
          <br />
          Ajouter un QR code
          <input
            type="file"
            name="myQr"
            placeholder="Ajouter un QR code"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedQr(event.target.files[0]);
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
