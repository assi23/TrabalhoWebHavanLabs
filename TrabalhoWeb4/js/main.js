function alterar(vlr){
    cont = document.getElementById("conteudo");
    if (vlr == 1){
        cont.innerHTML = '';
        cont.innerHTML = "<h3>Cadastrar</h3>";
    }
    else{
        cont.innerHTML = '';
        cont.innerHTML = "<h3>Listar</h3>";
    }
}