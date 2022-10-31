o=[];
s="";

function preload(){
    b=loadImage('dc.jpg');
}
function setup(){
    canvas=createCanvas(670,550);

    canvas.center();
    h=ml5.objectDetector('cocossd', ok);
    document.getElementById("l").innerHTML="PROGRESS : DETECTING";
}

function ok(){
    console.log("model is loaded");
   s=true;
   h.detect(b ,gotResults);
}
function gotResults(error, results){
    if(error){
        console.error(error);
    }

        console.log("results");
        o=results;

}

function draw(){
    image(b,0,0, 670,550);

    if(s != ""){
        for(i=0; i<o.length; i++){
            document.getElementById("l").innerHTML="STATUS = OBJECT DETCTED";

            fill("red");
            n=floor(o[i].confidence*100);

            noFill();
            stroke("crimson");
            text(o[i].label+" "+n+"%",o[i].x+15,o[i].y+15);
             rect(o[i].x,o[i].y,o[i].width,o[i].height);
        }
    }
}