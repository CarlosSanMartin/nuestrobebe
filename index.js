const Modulo = (() => {
  let objModule = {};
  let arrayOpt = [1, 1, 1, 1, 2, 2, 2, 3];
  let arrayOptTar = [1, 2, 3, 4,1,2,3,4];
  arrayOpt.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  arrayOptTar.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  objModule.lista = arrayOpt;
  objModule.tarjetas = arrayOptTar;
  return objModule;
})();

ArrayOpt    = Modulo.lista;
ArrayOptTar = Modulo.tarjetas;
ArrayOpt.forEach((element, i) => {

    let sexo='';
    if(element==1){
        sexo='NIÑA';
        gif=' <iframe src="https://giphy.com/embed/1GrsfWBDiTN60" width="190" height="162" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';

    }else if (element==2){
        sexo='NIÑO';
        gif='<iframe src="https://giphy.com/embed/10AhEVcozj23de" width="190" height="162" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    }else{
        sexo='NULO';
        gif='<iframe src="https://giphy.com/embed/P5AGXvRzq1MWY" width="190" height="162" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';

    }
  let card = ` <div class="col-md-3 col-sm-6" style="text-center,align-content:center">
        <div class="card-container manual-flip text-center" >
            <div class="card" style="border:0px">
                <div  id="fondo-imag" class="front img text-center" onclick="rotateCard(this,`+element+`)">                         
                                          
                <img src="tarjeta`+ArrayOptTar[i]+`.png" alt="una imagen" style="width:154px;" />  
                </div> <!-- end front panel -->

                <div class="back text-center">                   
                     <p style="font-family: 'Press Start 2P', cursive;"> `+sexo+`</p>
                     `+gif+`
                    
                </div> <!-- end back panel -->
            </div> <!-- end card -->
        </div> <!-- end card-container -->
    </div>
        
        `;

  var tarjetas = document.getElementById("tarjetas");
  tarjetas.innerHTML += card;
});

function rotateCard(btn,sexo) {
    actualizarContador(sexo);


  var $card = $(btn).closest(".card-container");
  
  if ($card.hasClass("hover")) {
    $card.removeClass("hover");
  } else {
    $card.addClass("hover");
  }
}

function actualizarContador(sexo) {
    
    if(sexo==1){
        var cantidad = $("#cantidadMujer").val();
        var total=parseInt(cantidad)+parseInt(1);
        $("#cantidadMujer").val(total);
        if(total==4){
          

            var x = document.createElement("canvas");
            x.id='confetti';
            
            document.body.appendChild(x);
            Confetti();

            var imag= document.createElement("img");
            imag.src="bebe.png";
            imag.addClass='animate__animated animate__fadeInDown';

           
            var divbebe=document.getElementById('bebelugar');
           divbebe.appendChild(imag);
           
            
         console.log('entro1');
            
        }
       
       
        
       
    }else if (sexo==2){
       
        var cantidad = $("#cantidadHombre").val();
        var total=parseInt(cantidad)+parseInt(1);
        $("#cantidadHombre").val(total);
    }else{
       
        var cantidad = $("#cantidadNulo").val();
        var total=parseInt(cantidad)+parseInt(1);
        $("#cantidadNulo").val(total);
    }

}


function Confetti() {
    //canvas init
    var canvas = document.getElementById("confetti");
    var ctx = canvas.getContext("2d");
  
    //canvas dimensions
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    
    //particles
    var mp = 150; //max particles
    var types = ['circle', 'circle', 'triangle', 'triangle', 'line'];
    var colors = [
      [238, 96, 169],
      [68, 213, 217],
      [245, 187, 152],
      [144, 148, 188],
      [235, 234, 77]
    ];
    var angles = [
      [4,0,4,4],
      [2,2,0,4],
      [0,4,2,2],
      [0,4,4,4]
    ]
    var particles = [];
    for (var i = 0; i < mp; i++) {
      particles.push({
        x: Math.random() * W, //x-coordinate
        y: Math.random() * H, //y-coordinate
        r: Math.random() * 4 + 1, //radius
        d: Math.random() * mp, //density
        l: Math.floor(Math.random()*65+-30), // line angle
        a: angles[Math.floor(Math.random()*angles.length)], // triangle rotation
        c: colors[Math.floor(Math.random()*colors.length)], // color
        t: types[Math.floor(Math.random()*types.length)] //shape 
      })
    }
    
    function draw(){
      ctx.clearRect(0, 0, W, H);
      
  
      for (var i = 0; i < mp; i++) {
        var p = particles[i];
        var op = (p.r <= 3) ? 0.4 : 0.8;
        
        if (p.t == 'circle'){
          ctx.fillStyle = "rgba(" + p.c + ", "+ op +")";
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
          ctx.fill();
        } else if (p.t == 'triangle'){
          ctx.fillStyle = "rgba(" + p.c + ", "+ op +")";
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + (p.r*p.a[0]), p.y + (p.r*p.a[1]));
          ctx.lineTo(p.x + (p.r*p.a[2]), p.y + (p.r*p.a[3]));
          ctx.closePath();
          ctx.fill(); 
        } else if (p.t == 'line') {
          ctx.strokeStyle = "rgba(" + p.c + "," + op +")";
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.l, p.y + (p.r * 5));
          ctx.lineWidth = 2;
          ctx.stroke();
        } 
  
      }
      update();
    }
  
  
  
    function update() {
  
      for (var i = 0; i < mp; i++) {
        var p = particles[i];
        p.y += Math.cos(p.d) + 1 + p.r / 2;
        p.x += Math.sin(0) * 2;
        
        if (p.x > W + 5 || p.x < -5 || p.y > H) {
          particles[i] = {
            x: Math.random() * W,
            y: -10,
            r: p.r,
            d: p.d,
            l: p.l,
            a: p.a,
            c: p.c,
            t: p.t
          };
        }
      }
    }
  
    //animation loop
    setInterval(draw, 23);
  
  }
  
  window.onload = function(){
    Confetti();
    
  //   window.resizeWindow = function() {
  //     Confetti();
  //   };
  
  //   window.addEventListener('resize', resizeWindow, false);
  }