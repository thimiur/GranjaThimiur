//Asi invocamos el aleatorio, o sea escribiriamos numeros aleatorios entre 10-20 usando el ciclo for.
//var z;
//for(var i = 0; i<10; i++)
//{
  //z = aleatorio(10 , 20);
  //document.write(z + ",");
//}
//function aleatorio(min, max)
//{
  //var resultado;
  //resultado = Math.floor(Math.random() * (max - min + 1)) + min;
//  return resultado;vvfgawdcdfgfghhgsdsdsddefgfgfrcdaffcdffffdredredfdfghnfdfd
//}

var gth = document.getElementById("granjathimiur");
var papel = gth.getContext("2d");

var fondo = {
  url: "tile.webp",
  cargaOK: false
}
var vaca = {
  url: "vaca.webp",
  cargaOK: false
};


var pollo = {
  url: "pollo.webp",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.webp",
  cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas)

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos)

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos)

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
if(fondo.cargaOK)
 {
  papel.drawImage(fondo.imagen, 0, 0);
 }
if(vaca.cargaOK)
 {
   var cantidad = aleatorio(5, 25);
   for(var v=0; v < cantidad; v++)
   {
    var x = aleatorio(0, 420);
    var y = aleatorio(0, 420);
    papel.drawImage(vaca.imagen, x, y);
   }
 }
  if(pollo.cargaOK)
   {
     var cantidad = aleatorio(15, 50);
     for(var p=0; p < cantidad; p++)
     {
       var x = aleatorio(0, 420);
       var y = aleatorio(0, 420);
      papel.drawImage(pollo.imagen, x, y);
     }
   }
   if(cerdo.cargaOK)
    {
      var cantidad = aleatorio(2, 20);
      for(var c=0; c < cantidad; c++)
      {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
     papel.drawImage(cerdo.imagen, x, y);
      }
   }
}

//Debo dibujar entre 0-420 pixeles,//
// para q las imagenes queden dentro del fondo que es de 500 x 500, //
//ya que cada imagen es de 80x80//

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
