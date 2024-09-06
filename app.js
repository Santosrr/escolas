function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhuma solicitação informada. Você precisa digitar o serviço.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";
// para cada dado dentro da lista de dados 
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes (campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
    <div class="item-resultado">
                <h2>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9O6_bEEY2T_wNXr4uJ6BZ425F7PV87ZgqfM/viewform" target="_blank">${dado.titulo}</a></h2>
                    
                <p class="descricao-meta">${dado.descricao}            
                </p>
                <p>A escola está localizada em: <a href=${dado.link} target="_blank">Ir para o Google Maps</a></p>
            </div>
            
    
    `;
    }
    
    }
    if (!resultados) {
        resultados = "<p>Nenhuma Solicitação Informada</p>"
    }

     // atribui os resultados gerados à seção HTML
    section.innerHTML = resultados

;
}




