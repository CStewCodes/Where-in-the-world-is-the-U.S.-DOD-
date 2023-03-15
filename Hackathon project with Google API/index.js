const images = [];
//Google variables


//DVIDS variables
const API_ENDPOINT = "https://api.dvidshub.net/";


async function fetchDvidsData() {
  const url = `${API_ENDPOINT}v1/search?public_key=${PUBLIC_KEY}&secret_key=${SECRET_KEY}&limit=10`
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
console.log(fetchDvidsData());

async function getCoordinates(city, state, country) {
  const address = `${city}, ${state}, ${country}`;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${googleMapsAPIKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.status === "OK") {
    const { lat, lng } = data.results[0].geometry.location;
    return new google.maps.LatLng(lat, lng);
  } else {
    return `Unable to get coordinates for ${address}`;
  }
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 31, lng: 100 },
    zoom: 5,
  });

  fetchDvidsData().then((data) => {
    Promise.all(
      data.results.map(async (image) => {
        const city = image.metadata.city;
        const state = image.metadata.state;
        const country = image.metadata.country;
        const location = await getCoordinates(city, state, country);
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });

        const html = `
          <img src="${image.preview_image_url}" height="300px" width="auto" />
          <p>${city}, ${state}, ${country}</p>
          <p>${image.caption}</p>
        `;
        const infowindow = new google.maps.InfoWindow({
          content: html,
        });
        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      })
    );
  });
}



//-----------






//Below is a build I never got working but I think I'm close

/*
// const { get } = require("http");
const images = [];
//Google variables

//DVIDS variables
const API_ENDPOINT = "https://api.dvidshub.net/";

import fetch from 'node-fetch';
const response_type = 'code';
const scope = 'basic email';
const redirect_uri = "http://127.0.0.1:5500/Hackathon%20project%20with%20Google%20API/index.html";
const url = `${API_ENDPOINT}auth/authorize?client_id=${PUBLIC_KEY}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;

fetch(url)
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  
  

async function fetchDvidsData() {
  const url = `${API_ENDPOINT}v1/search?public_key=${PUBLIC_KEY}&secret_key=${SECRET_KEY}&limit=10`
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function getCoordinates(city, state, country) {
  const address = `${city}, ${state}, ${country}`;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${googleMapsAPIKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.status === "OK") {
    const { lat, lng } = data.results[0].geometry.location;
    return new google.maps.LatLng(lat, lng);
  } else {
    return `Unable to get coordinates for ${address}`;
  }
}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 31, lng: 100 },
    zoom: 5,
  });

  fetchDvidsData().then((data) => {
    Promise.all(
      data.results.map(async (image) => {
        const city = image.metadata.city;
        const state = image.metadata.state;
        const country = image.metadata.country;
        const location = await getCoordinates(city, state, country);
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });

        const html = `
          <img src="${image.preview_image_url}" height="300px" width="auto" />
          <p>${city}, ${state}, ${country}</p>
          <p>${image.caption}</p>
        `;
        const infowindow = new google.maps.InfoWindow({
          content: html,
        });
        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });
      })
    );
  });
}
*/

/*
------------
Previously written code for reference back to if needed below
------------
*/
// // Define a function to fetch data from the DVIDS API
// async function fetchDvidsData() {
//   //giving it the `async` prefix allows the browser to work on other fun stuff and doesn't have to wait on this funcion!
//   const response = await fetch(
//     `${API_ENDPOINT}v1/search?public_key=${PUBLIC_KEY}&secret_key=${SECRET_KEY}&limit=10`
//   );
//   const data = await response.json();
//   return data;
// }

// async function getCoordinates(city, state, country) {
//     const address = `${city}, ${state}, ${country}`;
//     const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleMapsAPIKey}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     if (data.status === "OK") {
//       const { lat, lng } = data.results[0].geometry.location;
//       return new google.maps.LatLng(lat, lng);
//     } else {
//       return `Unable to get coordinates for ${address}`;
//     }
//   }

// const script = document.createElement('script');
// script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&callback=initMap`;
// script.defer = true;

// document.head.appendChild(script);


// function initMap() {
//   let map;map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 31, lng: 100 },
//     zoom: 5,
//   });
// }



// // Define a function to create a Leaflet marker and popup
//     fetchDvidsData().then((data) => {
//       Promise.all(
//         data.results.map(async (image) => {
//           const city = image.metadata.city;
//           const state = image.metadata.state;
//           const country = image.metadata.country;
//           const location = await getCoordinates(city, state, country);
//           const marker = L.marker(location).addTo(map);
  
//           const html = `
//             <img src="${image.preview_image_url}" height="300px" width="auto" />
//             <p>${city}, ${state}, ${country}</p>
//             <p>${image.caption}</p>
//           `;
//           marker.bindPopup(html);
//         })
//       );
//     });
