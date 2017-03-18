/**
 * Created by osp39 on 18/3/17.
 */
/** global variables*/
var clickedArray = [];
var interval;
var started = false;
var time = 0;
var ready = true;
var numCompleted = 0;
/**** */

setup();
function generateRandomNumber(){
    var array = [1,1,2,2,3,3,4,4,5];
    array.sort(function () {
        return  0.5 - Math.random();
    })
    return array;
}

function setup() {
    var grid = document.getElementsByTagName('td');
    var numbers = generateRandomNumber();

    for(var i = 0; i < grid.length; i++){
        var cell = grid[i];
        cell.completed = false;
         cell.clicked = false;
         cell.value = numbers[i];
    cell.addEventListener('mouseenter',function () {
        if(this.completed == false && this.clicked == false){
            this.style.background = "orange"
        }
    });
    cell.addEventListener('mouseleave',function () {
        if(this.completed == false && this.clicked == false) {
            this.style.background = "blue"
        }
    })
     cell.addEventListener("click",function () {
         if(ready == false){
             return;
         }
        startTimer();
        if(this.clicked == false && this.completed == false){
            clickedArray.push(this);
            reveal(this); /*here this == cell*/

        }

        if(clickedArray.length ==2){

            if(clickedArray[0].value == clickedArray[1].value){
                completed(clickedArray[0]);
                completed(clickedArray[1]);
                clickedArray = [];
                if(numCompleted == 8){
                    alert("you won in " + time +  "Seconds");
                    clearInterval(interval);
                }
            }else{
                /*if matching pair is not found*/
                ready = false;
                document.getElementById("gridTable").style.border = "5px solid red";
                setTimeout(function () {
                    hide(clickedArray[0]);
                    hide(clickedArray[1]);
                    clickedArray = [];
                    ready = true;
                    document.getElementById("gridTable").style.border = "5px solid black"
                },500);
            }


        }
    })


    }
    document.addEventListener('keydown', function(event){
        if(event.key > 0 && event.key < 10 ){
            grid[event.key - 1].click();
        }

    });
    document.getElementById('restart').addEventListener('click', function(){
        location.reload();
    });
}

function reveal(cell){
    cell.style.background = "red";
    cell.innerHTML = cell.value;
    cell.clicked = true;
}

function startTimer(){
    console.log("here");
    if(started == false){
        interval = setInterval(function () {
            time++;
            document.getElementById("timer").innerHTML = "Time elapsed : " + time;

        },1000);
        started = true;
    }
}

function hide(cell){
    cell.style.background = "blue";
    cell.innerHTML = "";
    cell.clicked = false;
}
function completed(cell){
    cell.style.background = "purple";
    cell.completed = true;
    numCompleted ++;
}