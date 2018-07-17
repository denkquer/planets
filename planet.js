//Little Planets by denkquer
//MIT License
//panolens by pchen66
//three.js by mrdoob and others



//holt den string aus der URL.. oder nicht..
function addInfo(variable)
{
    var syns = ["link", "url", "coin", "img", "x", "src", "sosse", "source", "arg0","soße"];
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(variable === "url"){
            for(let j=0;j<syns.length;j++){
                if(pair[0] == syns[j]){
                    return pair[1];
                }
            }
        }
    }
    return(false);
}



//initalised canvas und filter..
var littlePlanet, viewer, drawerElement;

    drawerElement = document.querySelector('#drawer');
    var url = "care.png";
        if(addInfo("url")){
            url = addInfo("url");
            console.log(url);
        }





    viewer = new PANOLENS.Viewer({controlBar: false});
    littlePlanet = new PANOLENS.ImageLittlePlanet(url);

    viewer.add(littlePlanet);