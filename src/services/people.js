import data from "../data";



const getPeoples = () => {
    return fetch('https://swapi.dev/api/people/')  
        // .then((response) => {
            
        //      return response.json();
        // })

        
        // .then((results) => {
        //     let data = results.results;
            
        //     data = data.map((person)=> {               
        //         let newFilm = [];
        //         fetch(person.films[0]) 
        //             .then((response) => response.json())
        //             .then((result) => {  
        //                 newFilm.push(result.title, result.episode_id, result.opening_crawl, result.director, result.producer, result.release_date);
        //                 person.films = newFilm;
                        
        //             })
        //         return person;        
        //     });
            
        //     return data;

           
        // })
    .then((response) => response.json())
    .then((results) => {
        let data = results.results;
        return Promise.all(data.map(person => {
            return fetch(person.films[0])
                .then((response)=>response.json())
                
        }))
    .then((result) => {
        console.log(result);
        data = data.map((person, index) => {
            let newFilm = [];
            newFilm.push(result[index].title, result[index].episode_id, result[index].opening_crawl, result[index].director, result[index].producer, result[index].release_date);
            person.films = newFilm;
            return person;
        })
        console.log(data);
        return data;
        
    })

 
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

