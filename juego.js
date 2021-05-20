//|•••••••••••••••••••••••••••••••••••••••••••••••••••
//|      :::::::: Documento Javascript :::::::::::
//|  •••••••••••••••••••••••••••••••••••••••••••••••••

/*
Autor: Santiago Valencia Álvarez
Día de estudio: 4
Fecha 20 de mayo de 2021

Descripción: Se utilizó lo apendido  elcursos anteriores como las variables (var), las condiciones 
(if y else if), además los inputs y el canvas de HTML.
A lo anterior se le adiciona la creación de variables aleatorias, con la función "aleatorio", que 
junto con la habilidad de cargar contenido como imagenes a nuestro scrip, da como resultado la posibilidad
de crear imagenes aleatorias.
Como objetivo personal se buscó crear un juego en el que una imagen se mueva mediante el mouse, se tenga 
como meta llegar a tres imagenes (pollos) diferentes, sin tocar nueve imagenes(lobos), todas las anteriores 
se generan de manera aleatoria; si el usuario logra el objetivo de llegar a la ubicación de victoria (vaca),
luego de tocar los tres pollos gana, en caso de tocar un lobo se pierde; además se añade boton reinicio.
*/

//|•••••••••••••••••••••••••••••••••••••••••••••••••••
//|::::::::INICIO Módulo varibles globales :::::::::::
//|•••••••••••••••••••••••••••••••••••••••••••••••••••
var vs = document.getElementById("villaSanty");
var papel = vs.getContext("2d");
var boton = document.getElementById ("boton");
var aleat = aleatorio (0,10);
var lobo1x;
var lobo1y;
var lobo2x;
var lobo2y;
var lobo3x;
var lobo3y;
var lobo4x;
var lobo4y;
var lobo5x;
var lobo5y;
var lobo6x;
var lobo6y;
var lobo7x;
var lobo7y;
var lobo8x;
var lobo8y;
var lobo9x;
var lobo9y;
var pollo1X;
var pollo1Y;
var pollo2X;
var pollo2Y;
var pollo3X;
var pollo3Y;
var muerto ={
    url: "perder.png",
    cargaOK: false
}
var fondo ={
    url: "title.png",
    cargaOK: false
}
var vaca ={
    url: "vaca.png",
    cargaOK: false
}
var cerdo ={
    url: "cerdo.png",
    cargaOK: false
}
var pollo ={
    url: "pollo.png",
    cargaOK: false
   
}
var lobo ={
    url: "lobo.png",
    cargaOK: false
}
var win ={
    url:"win.png",
    cargaOK: false
}
//:::::::: Fin Módulo varibles globales :::::::::::
//••••••••••••••••••••••••••••••••••••••••••••••••••••
//|•••••••••••••••••••••••••••••••••••••••••••••••••••
//|::::::::Inicio Módulo de Algoritmo :::::::::::
//|•••••••••••••••••••••••••••••••••••••••••••••••••••
fondo.objeto = new Image();
vaca.objeto = new Image();
cerdo.objeto = new Image();
pollo.objeto = new Image(); 
lobo.objeto = new Image();
muerto.objeto = new Image();
win.objeto = new Image();
fondo.objeto.src = fondo.url;
vaca.objeto.src = vaca.url;
cerdo.objeto.src = cerdo.url;
pollo.objeto.src = pollo.url;
lobo.objeto.src = lobo.url;
muerto.objeto.src = muerto.url;
win.objeto.src = win.url;
// Ejecución de funciones.
fondo.objeto.addEventListener("load", cargarFondo);
vaca.objeto.addEventListener("load", cargarVacas);
pollo.objeto.addEventListener("load", cargarPollos);
cerdo.objeto.addEventListener("load", cargarCerdos);
lobo.objeto.addEventListener("load", cargarLobos);
muerto.objeto.addEventListener("load", cargarMuerto);
win.objeto.addEventListener("load", cargarwin)
vs.addEventListener("mousemove", movercerdo);
boton.addEventListener("click",reiniciar);
//:::::::: Fin Módulo de Algoritmo :::::::::::
//••••••••••••••••••••••••••••••••••••••••••••••••••••
//|•••••••••••••••••••••••••••••••••••••••••••••••••••
//|::::::::INICIO FUNCIONES :::::::::::
//|•••••••••••••••••••••••••••••••••••••••••••••••••••
function crearvariables()
{//Crea variables de las imagenes a dibujar
lobo1x = (aleatorio(0,5)) *70;
lobo1y = (aleatorio(0,5)) *70;
lobo2x = (aleatorio(0,5)) *70;
lobo2y = (aleatorio(0,5)) *70;
lobo3x = (aleatorio(0,5)) *70;
lobo3y = (aleatorio(0,5)) *70;
lobo4x = (aleatorio(0,5)) *70;
lobo4y = (aleatorio(0,5)) *70;
lobo5x = (aleatorio(0,5)) *70;
lobo5y = (aleatorio(0,5)) *70;
lobo6x = (aleatorio(0,5)) *70;
lobo6y = (aleatorio(0,5)) *70;
lobo7x = (aleatorio(0,5)) *70;
lobo7y = (aleatorio(0,5)) *70;
lobo8x = (aleatorio(0,5)) *70;
lobo8y = (aleatorio(0,5)) *70;
lobo9x = (aleatorio(0,5)) *70;
lobo9y = (aleatorio(0,5)) *70;
pollo1X = (aleatorio(0,5)) *70;
pollo1Y = (aleatorio(0,5)) *70;
pollo2X = (aleatorio(0,5)) *70;
pollo2Y = (aleatorio(0,5)) *70;
pollo3X = (aleatorio(0,5)) *70;
pollo3Y = (aleatorio(0,5)) *70;
}
function movercerdo(mouse)
{//Mueve según ubicación del mouse, borra y dibuja la imagen constantemente, determina victoria o perdida
    console.log (mouse);
    papel.clearRect(0,0,500,500);    
    dibujar();
    var x = mouse.layerX-20;
    var y = mouse.layerY-30; 
    if (cerdo.cargaOK)
    {   
    papel.drawImage(cerdo.objeto,x,y); 
    }
    if (x >= lobo1x && x < lobo1x+60 && y >= lobo1y && y < lobo1y+30)
    {          
        perder();
    }
    if (x >= lobo2x && x < lobo2x+60 && y >= lobo2y && y < lobo2y+30)
    {          
        perder();
    }
    if (x >= lobo3x && x < lobo3x+60 && y >= lobo3y && y < lobo3y+30)
    {          
        perder();
    }
    if (x >= lobo4x && x < lobo4x+60 && y >= lobo4y && y < lobo4y+30)
    {          
        perder();
    }
    if (x >= lobo5x && x < lobo5x+60 && y >= lobo5y && y < lobo5y+30)
    {          
        perder();
    }
    if (x >= lobo6x && x < lobo6x+60 && y >= lobo6y && y < lobo6y+30)
    {          
        perder();
    }
    if (x >= lobo7x && x < lobo7x+60 && y >= lobo7y && y < lobo7y+30)
    {          
        perder();
    }
    if (x >= lobo8x && x < lobo8x+60 && y >= lobo8y && y < lobo8y+30)
    {          
        perder();
    }
    if (x >= lobo9x && x < lobo9x+60 && y >= lobo9y && y < lobo9y+30)
    {          
        perder();
    }
    if (x >= pollo1X && x < pollo1X +50 && y >= pollo1Y && y < pollo1Y+50)
    {          //condición vctoria 1
        pollo.pollo1 = false;
    }
    if (x >= pollo2X && x < pollo2X +50 && y >= pollo2Y && y < pollo2Y+50)
    {           //condición vctoria 2
        pollo.pollo2 = false;
    }
    if (x >= pollo3X && x < pollo3X +50 && y >= pollo3Y && y < pollo3Y+50)
    {           //condición vctoria 2
        pollo.pollo3 = false;
    }
    if (x >= 420 && x < 500 && y >= 420 && y < 500 && !pollo.pollo1 && !pollo.pollo2 && !pollo.pollo3)
    {          //analisis de condición de victoria
        ganar ();
    }
}
function cargarFondo ()
{ //cargar Fondo
    fondo.cargaOK = true;
    crearvariables();
    dibujar();
}
function cargarMuerto ()
{ //Cargar imagen de perdida
    muerto.cargaOK = true;
}
function cargarwin()
{ //Cargar imagen de ganar
    win.cargaOK = true;
}
function cargarVacas ()
{ //Cargar Vacas
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollos ()
{ //Cargar Pollos
    pollo.cargaOK = true;
    pollo.pollo1 = true;
    pollo.pollo2 = true;
    pollo.pollo3 = true;
    dibujar();
}
function cargarCerdos ()
{   // condición para continuar el juego
    cerdo.cargaOK = true;
    dibujar();
}
function cargarLobos ()
{  // cargar lobos
    lobo.cargaOK = true;    
    dibujar();
     
}
function dibujar()
{   // dibujar todas las imagenes (salvo del cerdo)
    if (fondo.cargaOK)
    {
    papel.drawImage(fondo.objeto,0,0);
    }
    else if (muerto.cargaOK)
    {
    papel.drawImage(muerto.objeto,0,0);
    }
    else if (win.cargaOK)
    {
        papel.drawImage(win.objeto,0,0);
    };
    if (vaca.cargaOK)
    {
    papel.drawImage(vaca.objeto,420,420); 
    }
    if (pollo.cargaOK && pollo.pollo1)
    {
    papel.drawImage(pollo.objeto,pollo1X,pollo1Y);
    };
    if (pollo.cargaOK && pollo.pollo2)
    {
    papel.drawImage(pollo.objeto,pollo2X,pollo2Y);
    };
    if (pollo.cargaOK && pollo.pollo3)
    {
    papel.drawImage(pollo.objeto,pollo3X,pollo3Y);
    };
    if (lobo.cargaOK)
    {
    papel.drawImage(lobo.objeto,lobo1x,lobo1y); 
    papel.drawImage(lobo.objeto,lobo2x,lobo2y); 
    papel.drawImage(lobo.objeto,lobo3x,lobo3y); 
    papel.drawImage(lobo.objeto,lobo4x,lobo4y); 
    papel.drawImage(lobo.objeto,lobo5x,lobo5y); 
    papel.drawImage(lobo.objeto,lobo6x,lobo6y); 
    papel.drawImage(lobo.objeto,lobo7x,lobo7y); 
    papel.drawImage(lobo.objeto,lobo8x,lobo8y); 
    papel.drawImage(lobo.objeto,lobo9x,lobo9y); 
    }
}
function perder ()
{  // se cumple condición de perdida
  
    fondo.cargaOK=false;
    vaca.cargaOK=false;
    pollo.cargaOK=false;
    cerdo.cargaOK=false;
    lobo.cargaOK=false;
    dibujar();
    
}

function ganar()
{  // se cumple condición de victoria
    fondo.cargaOK=false;
    vaca.cargaOK=false;
    pollo.cargaOK=false;
    cerdo.cargaOK=false;
    lobo.cargaOK=false;
    muerto.cargaOK=false;
    dibujar();
}

function aleatorio (min, maxi)
{   // se crean números aleatorios
    var resultado
    resultado = Math.floor(Math.random() * (maxi - min + 1))+min;
    return resultado;
}
function reiniciar()
{   //Se reinicia el juego
    fondo.cargaOK=true;
    vaca.cargaOK=true;
    pollo.cargaOK=true;
    cerdo.cargaOK=true;
    lobo.cargaOK=true;
    muerto.cargaOK=true;
    pollo.pollo1=true;
    pollo.pollo2=true;
    pollo.pollo3=true;
    crearvariables();
    dibujar();
}//:::::::: FIN FUNCIONES :::::::::::
//••••••••••••••••••••••••••••••••••••••••••••••••••••