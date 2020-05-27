const corpoCard = document.querySelector('.cards__digimon');


const exibeDigimons = (nome, level, img) => {
    const card = document.createElement('div');
    const conteudoCard = `
    <div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="${nome}">

    <div class="card-body">
        <h5 class="card-title nome-digimon">${nome}</h5>
        <p class="font-weight-light">Nível: ${level}</p>
        <div class="d-flex justify-content-end">
        <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${nome}">
                <svg class="bi bi-plus" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"/>
              </svg>
            </a>
        </div>

        <div class="modal fade" id="exampleModal${nome}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Informações do ${nome}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
                </div>
                <div class="modal-body d-flex justify-content-center">
                <img src="${img}" class="card-img-top digImg" alt="${nome}">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-primary">Ver mais</button>
                </div>
            </div>
        </div>
    </div>
    `
    card.innerHTML = conteudoCard;
    return card;
}

listarDigimons()
    .then(exibe => {
        console.log(exibe);

        exibe.forEach(indice => {
            // console.log(indice);

            return corpoCard.appendChild(exibeDigimons(indice.name, indice.level, indice.img))
        })
    });