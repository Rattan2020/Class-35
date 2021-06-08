var ball;
var database,position;
var loc;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

database=firebase.database();
loc=database.ref("ball/position");
loc.on("value",ReadOp,ShowErr);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        WritePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        WritePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        WritePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        WritePosition(0,+1);
    }
    drawSprites();
}

function WritePosition(x,y){
    database.ref("ball/position").set({
        x:ball.x+x,
        y:ball.y+y
    });

}

function ReadOp(data){

    position=data.val();
    ball.x=position.x;
    ball.y=position.y;

}

function ShowErr(){

console.log("THIS IS AN ERROR");

}