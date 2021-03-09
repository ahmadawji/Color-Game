
var color="";
var random=Math.floor(Math.random()*color.length);
var NumSqua=6;//to assign how many squares we want and keeps track of number of squares
var squares= document.querySelectorAll(".square");//select the squres that we want to change their color
var picked; //to take the value we assigned so that we can preview to the gamer which color he should guess
var PickedColor=document.querySelector("#RGB-val").textContent=picked;
var header=document.querySelector(".header");
var messageDisplay= document.querySelector("#message");
var NewColors= document.querySelector(".NC");
var Easy= document.querySelector("#Easy");
var Hard= document.querySelector("#Hard");

function StartGame(Num){
    NumColor=Num //number of colors we want to generate
    
    NewColors.textContent="New Colors";
    color=GenerateRandomColors(NumColor);
    messageDisplay.textContent="";
    header.style.backgroundColor="rgb(19, 163, 163)";
    random=Math.floor(Math.random()*color.length);
    picked=color[random];//the first random is for choosing the color from color list we declared
    PickedColor=document.querySelector("#RGB-val").textContent=picked;
    for (var i=0; i<squares.length; i++){
        //add initial colors to square 
        if (color[i]){//the if here to tell the program to give color for only 3 squares when the user choses easy mode 
        squares[i].style.display="block";
        squares[i].style.backgroundColor=color[i];
        }
        else{
            squares[i].style.display="none";
        }

        //add event listeners to squares
        squares[i].addEventListener("click", function(){
            var clickedColor=this.style.backgroundColor;
                if(clickedColor===picked){
                    messageDisplay.style.color="rgb(19, 163, 163)"
                    messageDisplay.textContent="You Win!";
                    NewColors.textContent="Play Again!"
                    header.style.backgroundColor=picked;
                    for(var j=0 ; j<color.length; j++){
                        squares[j].style.backgroundColor=picked;
                    }
            }
            else{
                this.style.backgroundColor="#232323";
                messageDisplay.style.color="rgb(19, 163, 163)"
                messageDisplay.textContent="Try Again!"
            }
        }
        )//for the event listener
    }
}

function GenerateRandomColors(Num){//where N is the number of colors we want to generate
    var arr=[];
    for (var i=0; i<Num; i++){
        arr.push(RandomColor());
    }
    return arr;

}

function RandomColor(){
    var r= Math.floor(Math.random()*256);//r for red 
    var g= Math.floor(Math.random()*256);//g for green
    var b= Math.floor(Math.random()*256);//b for blue
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

NewColors.addEventListener("click",function(){
    StartGame(NumSqua)});

    NewColors.addEventListener("mouseover",function(){
            NewColors.classList.toggle("hover");
        });
    
    NewColors.addEventListener("mouseleave",function(){
            NewColors.classList.toggle("hover");
        });

Easy.addEventListener("click", function(){
    NumSqua=3;
    StartGame(NumSqua);
    Easy.classList.add("selected");
    Hard.classList.remove("selected");
});
Easy.addEventListener("mouseover",function(){
    Easy.classList.toggle("hover");
});

Easy.addEventListener("mouseleave",function(){
    Easy.classList.toggle("hover");
});

Hard.addEventListener("click", function(){
    NumSqua=6;
    StartGame(NumSqua);  
    Hard.classList.add("selected");
    Easy.classList.remove("selected");
});

Hard.addEventListener("mouseover",function(){
    Hard.classList.toggle("hover");
});


Hard.addEventListener("mouseleave",function(){
    Hard.classList.toggle("hover");
});

StartGame(6);
    



