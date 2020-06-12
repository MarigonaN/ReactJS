import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


import './App.css';
import NavBar from './components/NavBar';

import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
  
      <Footer/>
    </div>
     
  );
}


let rockArtists = [
  "queen",
  "u2",
  "thepolice",
  "eagles",
  "thedoors",
  "oasis",
  "thewho",
  "bonjovi",
];

let popArtists = [
  "maroon5",
  "coldplay",
  "onerepublic",
  "jamesblunt",
  "katyperry",
  "arianagrande",
];

let hipHopArtists = [
  "eminem",
  "snoopdogg",
  "lilwayne",
  "drake",
  "kanyewest",
];

let headers = new Headers({
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  "x-rapidapi-key": "4013e328ffmsh3feb54311ce7296p1c3cc4jsnd3ad09e0821d",
});

window.onload = () => {
  let fetchArtists = (artist) => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist, {
      method: "GET",
      headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((songs) => {
        let songInfo = songs.data;
        let div = document.querySelector(
          "#" + artist.charAt(0).toUpperCase() + artist.slice(1)
        );

        for (let i = 0; i < 12; i++) {
          div.innerHTML += `
            <div class="col text-center" id=${songInfo[i].id}>
              <img class="img-fluid w-100" src=${
                songInfo[i].album.cover_medium
              } alt="1" />
              <p class="mb-5">
                Album: "${
                  songInfo[i].album.title.length < 16
                    ? `${songInfo[i].album.title}`
                    : `${songInfo[i].album.title.substring(0, 16)}...`
                }"<br>
                Artist: ${songInfo[i].artist.name}
              </p>
            </div>
            `;
        }
      });
  };

  fetchArtists("eminem");
  fetchArtists("Rihanna");
  fetchArtists("Metallica");
};

export default App;
