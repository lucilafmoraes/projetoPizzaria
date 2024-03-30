async function fazFetch(metodo, url, dados = null){
    let configMetod = null;
    if(metodo !== "GET"){
        configMetod = {
            method: metodo,
            body: JSON.stringify(dados),
            headers: {"Content-Type": "application/json;charset=UTF-8"}
        }
    }

    const fazFetch = await fetch(url, configMetod)
    .then(resposta => verificaErro(resposta))
    .then(resposta => resposta.json())

    return fazFetch;
}

function verificaErro(resposta){
    console.log(resposta)
    if(!resposta.ok){
        throw new Error("Erro ao requisitar a API " + resposta.status + " - " + resposta.statusText);
    }

    return resposta;
}

export { fazFetch }  


