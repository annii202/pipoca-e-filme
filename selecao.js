let variavel = "0";
clearInput = function () {
    document.getElementById('input-search').value = '';
  }
  function ocultarExibir(){
    variavel = document.getElementById('select-destaque').value;
    if(variavel == '0'){
      document.getElementsByClassName('destaque-imagens')[0].style.display = "grid";
      document.getElementsByClassName('destaque-imagens2')[0].style.display = "none";  
      document.getElementsByClassName('destaque-imagens3')[0].style.display = "none";
      document.getElementsByClassName('destaque-imagens4')[0].style.display = "none";
    }
    else if(variavel =='1'){
      document.getElementsByClassName('destaque-imagens')[0].style.display = "none";
      document.getElementsByClassName('destaque-imagens2')[0].style.display = "grid";  
      document.getElementsByClassName('destaque-imagens3')[0].style.display = "none";
      document.getElementsByClassName('destaque-imagens4')[0].style.display = "none";
    }
    else if(variavel =='2'){
      document.getElementsByClassName('destaque-imagens')[0].style.display = "none";
      document.getElementsByClassName('destaque-imagens2')[0].style.display = "none";  
      document.getElementsByClassName('destaque-imagens3')[0].style.display = "grid";
      document.getElementsByClassName('destaque-imagens4')[0].style.display = "none";
    }
    else{
      document.getElementsByClassName('destaque-imagens')[0].style.display = "none";
      document.getElementsByClassName('destaque-imagens2')[0].style.display = "none";  
      document.getElementsByClassName('destaque-imagens3')[0].style.display = "none";
      document.getElementsByClassName('destaque-imagens4')[0].style.display = "grid";
    }
  }