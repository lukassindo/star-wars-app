import jwt from 'jsonwebtoken';


const login = (username, password) => {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: username, password: password}),
    }
    return fetch('http://localhost:4000', requestOptions)
        .then((response) => response.json())
        .then((result) => {
            let decoded = jwt.decode(result.token);
            console.log(decoded);
            return decoded;
        })
}

export default {
    login,
}