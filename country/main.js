const countriesContainer = document.querySelector('.countries-container');
const body = document.querySelector('.body');


const getCountryData = function(country){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  xhr.send();

  xhr.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
      <article class="country">
        <img src="" class="country__img" />
        <div class="country__data">
          <h3 class="country__name"></h3>
          <h4 class="country__region"></h4>
          <p class="country__row"><span> || </span></p>
          <p class="country__row"><span> || </span></p>
          <p class="country__row"><span> || </span></p>
          <br /><br />
          <footer>Copyright by <strong>@Amir</strong> 2022</footer>
        </div>
      </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('bangladesh');