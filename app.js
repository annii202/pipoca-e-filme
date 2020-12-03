const APYKEY = '38574189a7a21dc5327051d4f1d3b619';
function MostraFilme() {
  let card = document.getElementById("teste");
  let texto = '';
  let dados = JSON.parse(this.responseText);
  for (let i = 0; i < 3; i++) {
    let movie = dados.results[i];
    texto +=
      `   
    <div class="card" style="width: 18rem;">
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${movie.original_title}</h5>
        <p class="card-text">${movie.overview}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    
    `
  }
  card.innerHTML = texto;
}
function PesquisaFilme() {
  let querry = document.getElementById('input-search').value;

  let xhr = new XMLHttpRequest();
  xhr.onload = MostraFilme;
  xhr.open('GET', `http://api.themoviedb.org/3/search/movie?query=${querry}&api_key=${APYKEY}`);
  xhr.send();
}

