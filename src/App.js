import React, { useState } from "react";
import "./styles.css";

const MusicLibrary = {
  Classical: [
    { name: "Bagatelle No. 25 ", rating: "4/5" },
    { name: "Piano Sonata", rating: "3.1/5" }
  ],
  Opera: [
    { name: "Largo al factotum", rating: "4.78/5" },
    { name: "Un Bel Di Vedremo", rating: "1.1/5" }
  ],
  Salsa: [
    { name: "Dile a Ella", rating: "3.4/5" },
    { name: "La Rebelión", rating: "2.55/5" }
  ]
};

var musiccollection = Object.keys(MusicLibrary);

export default function App() {
  const [selectedgenre, setgenre] = useState("Salsa");
  function clickhandler(genre) {
    setgenre(genre);
  }
  return (
    <div className="App">
      <h1>My favorite Music</h1>
      <hr style={{ maxWidth: "30%", border: "1px dotted black" }} />
      <p style={{ fontSize: "larger" }}>
        Select a genre and check my favorite song in that category with ratings.
      </p>

      <div>
        {musiccollection.map(function (genre) {
          return (
            <button
              onClick={() => clickhandler(genre)}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem 1rem",
                border: "1px solid black",
                margin: "1rem auto",
                display: "block"
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <hr style={{ maxWidth: "70%" }} />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {MusicLibrary[selectedgenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px dotted black",
                margin: "1rem 0.5rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller", padding: "0.3rem" }}>
                {" "}
                {music.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
