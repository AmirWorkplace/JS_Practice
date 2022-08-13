const countriesContainer = document.querySelector(".country");
const body = document.querySelector('.body');


const getCountryData = function(country){
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://restcountries.com/v2/name/${country}`);
  xhr.send();

  xhr.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
      <article class="country">
        <img src="${data.flag}" class="country__img" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>${data.languages[0].name} || ${data.demonym}</span></p>
          <p class="country__row"><span>${data.borders[0]} & ${data.borders[1]} || ${(+data.population / 1000000).toFixed(2)} Millions</span></p>
          <p class="country__row"><span>${data.timezones[0]} || ${data.borders[0]}</span></p>
          <br />
          <footer>Copyright by <strong>@Amir</strong> 2022</footer><br /><br />
        </div>
      </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.classList.add('opacity');
  });
};//alpha3Code

getCountryData('bangladesh');
getCountryData("china");
getCountryData("usa");
