function add(x,y){
    return x+y;
}


function calculate1(x,y,add) {
    return compute(x,y);
}

function calculate(x,y,compute){
    return compute(x,y);
}
console.log(a);


var a = calculate(10,5,function (x,y) {
    return x+y;
});


/*another type of callback*/
function operation(callback){
    var p=10;
    var q = 20;
    callback(q-p);
}

operation(function (q) {
    console.log(q);
})


/*built in callback function*/

var array=[1,2,3,4,5,6];

var squareArray = array.map(function (x) {
    return x*x;
});

console.log(squareArray);

var oddArray = array.filter(function (x) {
    return x%2 == 1;
})

console.log(oddArray);

/*chaining callback*/

function myFunction(x,callback){
    console.log("called");
    callback(x);
}


var ans = 10;
myFunction(x,function (x) {
    console.log("step1");
    var result = x*x;
    myFunction(result,function (x) {
        console.log("Step2");
        var result2 = x+x;
        myFunction(result2,function (x) {
            console.log("step3");
            var answer = x+100
            console.log(answer );
            console.log("exit1");

        });
        console.log("exit2");

    })
    console.log("exit3");

})


/**timer */

setTimeout(function(){
    console.log("hello")
},1000); //waits 1 second


/** clear timeout*/

var timeout = setTimeout(function () {
    console.log("abc");
},1000)

clearTimeout(timeout);


/*setInterval used to schedule reoccurring task*/

/*** */

function asyncLog(val){ //logs values asynchronously
    setTimeout(function(){  //setTimeout with a time of 0 will execute asynchronously
        console.log(val);
    },0)
}

console.log("first");
asyncLog("second");
console.log("third");

/*  Console Output
 > first
 > third   <---notice this is out of order!!
 > second  <---this occurs only after the call stack is empty, which is why it appears last

 */