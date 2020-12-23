


const getPeoples = () => {
    return fetch('https://swapi.dev/api/people/')  
        .then((response) => response.json())
        .then((results) => {
            
            let data = results.results;
            
            data = data.map((person) => {
                 person.films = person.films.map((film) =>  film.split('/')[5]);
                 return person;
            });
            return data;
        });
}

const getFirstMan = () => {
    return fetch('https://swapi.dev/api/people/1')  
        .then((response) => response.json())
}



export default {
    getPeoples,
    getFirstMan,
}

