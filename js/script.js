const loadAllData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showData(data.slice(0, 9)));
};

const showData = (countries) => {
  // console.log(countries);
  const countriesContainer = document.getElementById("countries-info");
  countriesContainer.innerHTML = "";
  countries.forEach((country) => {
    console.log(country.cca2);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-3/4 h-96 bg-base-100 shadow-2xl m-4">
      <figure class="px-10 pt-10">
        <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
      </figure>
     <div class="card-body items-center text-center">
        <h2 class="card-title">${country.name.common}</h2>
        <p class="text-lg">Continents: ${country.continents}</p>
          <div class="card-actions">
            <label onclick="showDetails('${country.cca2}')" for="my-modal-6" class="btn btn-outline btn-primary">Details</label>
          </div>
      </div>
    </div>
    
    `;
    countriesContainer.appendChild(div);
  });
};
const showAllDataTogether = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showData(data));
};
// show details modal
const showDetails = (id) => {
  const URL = `https://restcountries.com/v3.1/alpha/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};

const displayCountryDetails = (country) => {
  console.log(country);
  document.getElementById("country-name").innerText = country.name.common;
  const countryDetails = document.getElementById("country-details-body");
  countryDetails.innerHTML = `
  <img src="${country.flags.png}">
  <p class="text-lg font-semibold mt-6">Capital: ${country.capital}</p>
  <p class="text-lg font-semibold">Language: ${country.languages.cca3}</p>
  <p class="text-lg font-semibold">Population: ${country.population}</p>
  <p class="text-lg font-semibold">Region: ${country.region}</p>
  <p class="text-lg font-semibold">Sub-region: ${country.subregion}</p>
  <p class="text-lg font-semibold">TimeZone: ${country.timezones[0]}</p>
  <p class="text-lg font-semibold">Is Independent: ${country.independent}</p>
  `;
};

loadAllData();
