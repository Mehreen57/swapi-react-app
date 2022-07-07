import axios from 'axios';

export default axios.create({
  baseURL: `https://swapi.dev/api/`
});



// baseURL: 'https://swapi.dev/api/',
// peopleURL:  'https://swapi.dev/api/people/',
// filmsURL:  'https://swapi.dev/api/films/',
// vehicleURL:  'https://swapi.dev/api/vehicles'