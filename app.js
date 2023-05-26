//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Selección de todas las barras para después manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let net = document.getElementById("net");
crearBarra(net);
let sql = document.getElementById("sql");
crearBarra(sql);
let mantenimiento = document.getElementById("mantenimiento");
crearBarra(mantenimiento);
let testing = document.getElementById("testing");
crearBarra(testing);


let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

//Animacion para las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalNet = setInterval(function(){
            pintarBarra(net, 11, 2, intervalNet);
        },100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 15, 3, intervalSql);
        },100);
        const intervalMantenimiento = setInterval(function(){
            pintarBarra(mantenimiento, 16, 4, intervalMantenimiento);
        },100);
        const intervalTesting = setInterval(function(){
            pintarBarra(testing, 11, 5, intervalTesting);
        },100);
    }
}

//Llenar las barras con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

//Detecta el scroll del mouse para que se carguen las barras
window.onscroll = function(){
    efectoHabilidades();
}