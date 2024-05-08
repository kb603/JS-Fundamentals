"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// API = https://restcountries.com/v3.1/name/portugal

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/portugal");
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText)[0];
  console.log(data);

  const card = `<article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span> ${data.population} people </p>
            <p class="country__row"><span>🗣️</span>${data.languages}</p>
            <p class="country__row"><span>💰</span>${data.currencies}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", card);
  countriesContainer.style.opacity = 1;
});
