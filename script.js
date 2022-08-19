
var cards = document.querySelectorAll('.card');
var seg = 0;
var intervalo;


[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    
    var maximo = document.querySelector("#quantidade").value
    var sorteio = Math.floor(Math.random() * maximo)
    document.getElementById('numero').innerText = sorteio
    intervalo = setInterval(inicio, 10)
    function inicio(){
      seg++
      if (seg == 350){
       card.classList.toggle('is-flipped')
       seg= 0;
       clearInterval(intervalo)
      }
   }
  });
});
