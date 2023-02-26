const loadAllData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => showAllData(data));
};

const showAllData = (countries) => {
  // console.log(countries);
  countries.slice(0, 6).forEach((country) => {
    console.log(country.population);
    const countriesContainer = document.getElementById("countries-info");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-full h-full bg-base-100 shadow-2xl m-4">
      <figure class="px-10 pt-10">
        <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
      </figure>
     <div class="card-body items-center text-center">
        <h2 class="card-title">${country.name.common}</h2>
        <p>Population: ${country.population}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Details</button>
          </div>
      </div>
    </div>
    
    `;
    countriesContainer.appendChild(div);
  });
};

loadAllData();
