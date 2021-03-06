var bandas = [
                //dicionario
                {"id":1,"nome":"Black Sabbath","gen":"Rock","pais":"EUA"},
                {"id":2,"nome":"Iron Maiden","gen":"Rock","pais":"EUA"}
            ];
var id=2;

function cadastrar(){
    id++;
    let nome = document.getElementById("nome").value;
    let gen = document.getElementById("gen").value;
    let pais = document.getElementById("pais").value;
    bandaCadastradas = {"id":id,"nome":nome,"gen":gen,"pais":pais};
    bandas.push(bandaCadastradas);
    localStorage.setItem('bandas',JSON.stringify(bandas));
    localStorage.setItem('id',JSON.stringify(id));
    limpar(); 
    // window.location = "listagem.html";
}

function carregaStorage(){
    let bandasJson = localStorage.getItem("bandas");
    let idJson = localStorage.getItem("id")

    if(bandasJson != null){
        bandas = JSON.parse(bandasJson);
        id = JSON.parse(idJson);
    }
}

function carregaTabela(){
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = '';
    bandas.forEach(x =>{
        tbody.innerHTML += `<tr><td>${x['id']}</td> <td>${x['nome']}</td>  <td>${x['gen']}</td> <td>${x['pais']}</td></tr>`;
    });
}

function limpar(){
    document.getElementById("nome").value ='';
    document.getElementById("gen").value ='';
    document.getElementById("pais").value ='';
}

window.onload = function(){
    carregaStorage();
    carregaTabela();
}