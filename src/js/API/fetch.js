const listarDigimons = () => {
    return fetch("https://digimon-api.herokuapp.com/api/digimon/level/rookie")
        .then(resp => resp.json())
        .then(resp => resp);
}