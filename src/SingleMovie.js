import React, {useState, useEffect} from 'react';
export default function(props) {


    const [movieCount, setMovieCount] = useState(JSON.parse(window.sessionStorage.getItem('moviecount')) || [0,0,0],);
    const [likes, setLikes] = useState(JSON.parse(window.sessionStorage.getItem('likes')) || [0,0,0],);
    useEffect(()=>{
        window.sessionStorage.setItem('moviecount', JSON.stringify(movieCount));
        window.sessionStorage.setItem('likes', JSON.stringify(likes));
    }, [movieCount, likes])
   

    const changeCounts = (index) => {
        let newArr = [...movieCount];
        newArr[index] += 1;
        setMovieCount(newArr);
    }

   const changeLikes = (e,index) => {
        let newArr = [...likes];
        newArr[index] = e;
        setLikes(newArr);
   }

    return (
        <>
        {props.movies.map((movie, index) => (
        <li key={index}>{movie}{movieCount[index]}
            <button onClick={() => changeCounts(index)}>Increment</button>
            <select onChange={(e)=> changeLikes(e.target.value, index)}>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            <p>Likes: {likes[index]}</p>
        </li>
        ))}
        </>
    )
    
}