import axios from 'axios';
const  baseURL = `https://swapi.dev/api`

// fetch data from api
export const fetchPeople = async()=>{
  try{
    const response = await axios.get(`${baseURL}/people`);
    const displayPeople = await response.data.results;
    return displayPeople;

  } catch(error){
    alert("you have following" + error)
    }
  }

  // fetch single person from api
export const fetchSinglePeople = async(id)=>{
  try {
    const response = await axios.get(`${baseURL}/people/${id}`)
    return response.data;
  } catch (error) {
      console.log(error)
    }
}

// fetch films from api
export const fetchSpecificFilm = async(id)=>{
  try{
    const response = await axios.get(`${baseURL}/films/${id}`);
    const displayFilm = await response.data;
    return displayFilm;

  } catch(error){
    alert("you have following" + error)
    }
  }

// fetch vehicles from api
export const fetchSpecificVehicle = async(id)=>{
  try{
    const response = await axios.get(`${baseURL}/vehicles/${id}`);
    const displayVehicle = await response.data;
    return displayVehicle;

  } catch(error){
    alert("you have following" + error)
    }
  }

// fetch starships from api
export const fetchSpecificStarship = async(id)=>{
  try{
    const response = await axios.get(`${baseURL}/starships/${id}`);
    const displayStarships = await response.data;
    return displayStarships;

  } catch(error){
    alert("you have following" + error)
    }
  }