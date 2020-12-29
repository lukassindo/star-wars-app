


const getPeoples = () => {
    return fetch('https://swapi.dev/api/people/')  
        .then((response) => response.json())
        // .then((results) => {
            
        //     let data = results.results;
        //     console.log(data);
        //     data = data.map((person) => {
        //          person.films = person.films.map((film) =>  film.split('/')[5]);
        //          return person;
        //     });
        //     return data;
        // });
        .then((results) => {
            let data = results.results;
            
            data = data.map((person)=> {               
                let newFilm = [];
                fetch(person.films[0]) 
                    .then((response) => response.json())
                    .then((result) => {  
                        newFilm.push(result.title, result.episode_id, result.opening_crawl, result.director, result.producer, result.release_date);
                        person.films = newFilm;
                        
                    })
                return person;        
            });
            
            return data;
        })
       
}

const getFirstMan = () => {
    return fetch('https://swapi.dev/api/people/1')  
        .then((response) => response.json())
}



export default {
    getPeoples,
    getFirstMan,
}

