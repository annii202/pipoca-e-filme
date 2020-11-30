const APYKEY = '38574189a7a21dc5327051d4f1d3b619';
function MostraFilme(){
let card = document.getElementsByClassName("card");
let dados = JSON.parse(this.responsetext);
for (let i = 0; i < 2; i++) {
    let movie = dados.results[i];
    
}
function PesquisaFilme(){
    let querry = document.getElementById('input-search').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = MostraFilme;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/q=${querry}&api_key=${APYKEY}`);
    xhr.send();
}