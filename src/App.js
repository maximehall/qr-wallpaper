import "./App.css";
import mergeImages from "merge-images";
import background from "./images/iOS-13-wallpaper.jpg";
import { useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>QR wallpaper</h1>
        {/* <img className="App-logo" alt="logo" /> */}
        <div>
          {selectedImage && (
            <div>
              <img
                alt="not fount"
                width={"250px"}
                src={URL.createObjectURL(selectedImage)}
              />
              <br />
              <button onClick={() => setSelectedImage(null)}>Retirer</button>
              <button
                onClick={() => {
                  mergeImages([
                    background,
                    {
                      src: URL.createObjectURL(selectedImage),
                      x: 170,
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
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
