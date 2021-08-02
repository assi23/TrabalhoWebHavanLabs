let elemento = document.getElementById("conteudo2");
listaCerveja = [];

function alterar(vlr){
    h3 = document.getElementById("h3");
    if (vlr == 1){
        h3.innerHTML = '';
        h3.innerHTML = "<h3>Cadastrar</h3>";
    }
    else{
        h3.innerHTML = '';
        h3.innerHTML = "<h3>Listar</h3>";
    }
}

function salvar(){
    nome = document.getElementById('marca').value;
    tipo = document.getElementById('tipo').value;
    distri = document.getElementById('distri').value;
    listaCerva = {'nome':nome,'tipo':tipo,'distri':distri};
    listaCerveja.push(listaCerva);
    localStorage.setItem('listaCerveja',JSON.stringify(listaCerveja));
    alert('Cadastrando... Cadastro Realizado com sucesso!!')
    limpar();
}

function addLista(){
    let lista = document.getElementsByTagName('tbody')[0];
    lista.innerHTML = '';
    listaCerveja.forEach(c => {
        let info = `<tr> <td>${c['nome']}</td> <td>${c['tipo']}</td> <td>${c['distri']}</td> </tr>`
        lista.innerHTML += info;
    });
}

function carregarLista(){
    let request = new XMLHttpRequest();
    request.open('GET', './listar.html');
    request.onload = function (){
        let conteudoResponse = this.responseText;
        elemento.innerHTML = conteudoResponse;
        addLista();
}
    request.send();            
}

function carregarCadastro(){
    let requestCad = new XMLHttpRequest();
    requestCad.open('GET','./cadastrar.html');
    requestCad.onload = function(){
        let contRespCad = this.responseText;
        elemento.innerHTML = contRespCad;
    }
    requestCad.send();
}

function limpar(){
    nome = document.getElementById('marca').value = '';
    tipo = document.getElementById('tipo').value = '';
    distri = document.getElementById('distri').value = '';
}

function carregaStorage(){
    let listaCervejaJson = localStorage.getItem("listaCerveja");

    if(listaCervejaJson != null){
        //transforma a lista em tipo dicionário
        listaCerveja = JSON.parse(listaCervejaJson);
    }
}

window.onload = function(){
    carregaStorage();
}