const APIKEY = "531d66617411187594ca95b4c30da09d";


/*Appel à l'api openweather avec ville en param de fonction*/ 
let apiCall = function (city) {
  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
  
  
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML =
          '<i class="fa-solid fa-temperature-half"></i>' + data.main.temp + "°";
        document.querySelector("#humidity").innerHTML =
          '<i class="fa-solid fa-droplet"></i>' + data.main.humidity + "%";
        document.querySelector("#wind").innerHTML =
          '<i class="fa-solid fa-wind"></i>' + data.wind.speed + "km/h";
      })
    )
    .catch((err) => console.log("Erreur : " + err));
};


// écouteur d'événement sur la soumission du formulaire
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#inputCity").value;

  apiCall(ville);
});


// Appel par défaut au chargment de la page 
apiCall('Reims');
