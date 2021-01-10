const login = (username, password) => {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username: username, password: password}),
    }
    fetch('http://localhost:4000', requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result));
}

export default {
    login,
}