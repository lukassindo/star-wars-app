const getCharacters = () => {
    let results;
    return fetch('https://www.swapi.tech/api/people')
        .then((response) => response.json())
        .then((data)=> {
            results = data.results;
            return Promise.all(results.map(person => {
                return fetch(person.url)
                    .then((response)=>response.json()) 
            }))
          
        })
        .then(info => {
    
            results = results.map((item, index) => {
                item.hair_color = info[index].result.properties.hair_color;
                return item;
            })
            return results;
        })

}

export default {
    getCharacters,
}