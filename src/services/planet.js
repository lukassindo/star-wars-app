

const getPlanets = () => {
    return fetch('https://swapi.dev/api/planets/')  
        .then((response) => response.json())
        .then((results) => {
           let newData = [];
           let data = results.results;
           data.forEach((itemArr) => {
               newData.push([itemArr.name, itemArr.climate, itemArr.diameter, itemArr.terrain, itemArr.gravity]);
           })
           return newData;
        });
}


export default {
    getPlanets,
}