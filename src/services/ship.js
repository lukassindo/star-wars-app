
const getShips = () => {
    return fetch('https://swapi.dev/api/starships/')  
        .then((response) => response.json())
        .then((results) => {
           let newData = [];
           let data = results.results;
           data.forEach((itemArr) => {
               newData.push([itemArr.name, itemArr.model, itemArr.cost_in_credits, itemArr.crew, itemArr.cargo_capacity]);
           })
           return newData;
        });
}


export default {
    getShips,
}