
var zeit;
var imgh;
var foo;
//Download resizing..

function setup() {
    noLoop();
}

//kondition für download d button 1 sekunde gedrückt lassen
function keyPressed(){
    if(keyCode === 68){ //d
        console.log("d gedrückt..");
       zeit = new Date().getTime();
    }
}

function keyReleased(){
    if(new Date().getTime()-zeit>=1000){
        console.log("Wird generiert..");
        dl();
        console.log("und heruntergeladen..");
    }
}

function dl(){

    // para des bildes lesen
    imgh = loadImage(addInfo("url"), 0 ,function(){console.log("Error beim erstellen der Datei.. Sry");});
    
    foo = document.createElement('canvas');
    foo.width = int(imgh.width);
    foo.height = int(imgh.width);
    foo.id = "hr";
    foo.className = "panolens-container";
    var ctx = foo.getContext('2d')


    viewer = new PANOLENS.Viewer({controlBar: false});
    littlePlanet = new PANOLENS.ImageLittlePlanet(url);
    viewer.add(littlePlanet);


    var new_image_url = foo.toDataURL();
    var bild = document.createElement('img');
    bild.src = new_image_url;

    document.body.appendChild(bild);


    

}
