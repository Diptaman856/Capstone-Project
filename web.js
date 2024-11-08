var image = 0;
function carousel(){
    var a;
    var b = document.getElementsByClassName("sc1");

    for( a = 0; a < b.length; a++ ) {
     b[a].style.display = "none";   
}

image++;

if( image > b.length ){
    image = 1;
}

b[image - 1].style.display = "block";


  setTimeout(carousel, 3000);
}
carousel()