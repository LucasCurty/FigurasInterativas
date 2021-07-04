let img = document.getElementById('img')
let res = document.getElementById('res')
let aud = document.getElementById('aud')
let fav = document.getElementById('favi')
let tit = document.getElementById('title')
  res.style.margin = '0px'
function leao(){
    res.innerHTML = 'Leão'
    img.src ="imagens/lion-real.jpg"
    aud.src ="sons/lion.mp3"
    fav.href = '../favicons/lion.ico'
    tit.innerHTML = 'Leão'
    setTimeout(function() {
        window.location.reload();
      }, 7000);
}
function gato(){
    res.innerHTML = 'Gato'
    img.src ="imagens/cat-real.jpg"
    aud.src ="sons/gato.mp3"
    fav.href = '../favicons/cat.ico'
    tit.innerHTML = 'Gato'
    setTimeout(function() {
        window.location.reload();
      }, 7000);
}
function cachorro(){
    res.innerHTML = 'Cachorro'
    img.src ="imagens/dog-real.jpg"
    aud.src ="sons/cachorro.mp3"
    fav.href = '../favicons/dog.ico'
    tit.innerHTML = 'Cachorro'
    setTimeout(function() {
        window.location.reload();
      }, 7000);
   }
function macaco(){
    res.innerHTML = 'Macaco'
    img.src ="imagens/monkey-real.jpg"
    aud.src ="sons/macaco.mp3"
    fav.href = '../favicons/monkey.ico'
    tit.innerHTML = 'Macaco'
    setTimeout(function() {
        window.location.reload();
      }, 7000);
}
 


    
