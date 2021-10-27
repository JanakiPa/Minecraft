var canvas=new fabric.Canvas('myCanvas');
var block_height=30;
var block_width=30;
var player_x=10;
var player_y=10;
var player_object="";
var block_object="";
function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    })
}
function blockUpdate(new_image){
    fabric.Image.fromURL(new_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_object);
    })
};
window.addEventListener("keydown", aFunction);
function aFunction(e){
    var key_pressed=e.keyCode;
    if(e.shiftKey==true && key_pressed=='80'){
        console.log("shift and p are pressed together");
        block_height=block_height+10;
        block_width=block_width+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && key_pressed=='77'){
        console.log("shift and m are pressed together");
        block_height=block_height-10;
        block_width=block_width-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(key_pressed=='38'){
        up();
    }
    if(key_pressed=='40'){
        down();
    }
    if(key_pressed=='37'){
        left();
    }
    if(key_pressed=='39'){
        right();
    }
    if(key_pressed=='87'){
        blockUpdate("wall.jpg");
        console.log("w");
    }
    if(key_pressed=='71'){
        blockUpdate("ground.jpg");
        console.log("g");
    }
    if(key_pressed == '76') { 
        blockUpdate('light_green.png'); 
        console.log("l"); 
    } 
    if(key_pressed == '84') { 
        blockUpdate('trunk.jpg'); 
        console.log("t"); 
    } 
    if(key_pressed == '82') { 
        blockUpdate('roof.jpg'); 
        console.log("r"); 
    } 
    if(key_pressed == '89') { 
        blockUpdate('yellow_wall.png'); 
        console.log("y"); 
    } 
    if(key_pressed == '68') { 
        blockUpdate('dark_green.png'); 
        console.log("d"); 
    } 
    if(key_pressed == '85') { 
        blockUpdate('unique.png'); 
        console.log("u"); 
    } 
    if(key_pressed == '67') { 
        blockUpdate('cloud.jpg'); 
        console.log("c"); 
    }

}
function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        canvas.remove(player_object);
        playerUpdate();
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        canvas.remove(player_object);
        playerUpdate();
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_height;
        canvas.remove(player_object);
        playerUpdate();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_height;
        canvas.remove(player_object);
        playerUpdate();
    }
}
