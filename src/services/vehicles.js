
const getVehicles = () => { 
    return fetch('https://swapi.dev/api/films/')  
    .then((response) => response.json())
    .then((results) => {
       let newData = [];
       let titles = [];
       let vehicles = []
       let data = results.results;
       data.forEach(item => {
            titles.push(item.title);
            vehicles.push(item.vehicles.length);
       });
       newData.push(titles, vehicles);

       console.log(newData);
       return newData;
    });


}

export default {
    getVehicles,
}
