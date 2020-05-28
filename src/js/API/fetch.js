const listarDigimons = () => {
    return fetch("https://digimon-api.herokuapp.com/api/digimon/level/rookie")
        .then(resp => (resp.status = 200) ? resp.json() : Promise.reject(resp.statusText))
        .then(resp => resp)
        .catch(err => console.log(err));
}