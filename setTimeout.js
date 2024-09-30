//********JavaScript is a Single Threaded Synchronous language******

//Timing functions are used to delay the execution of code.
//SetTimeout(function, delay, args):- used to delay the execution of code for particular time.

//any thing which has setTimeout or setInterval is asynchrnous in nature

// setTimeout(() => {
//     console.log("hello friend");
// },3000);// delay the execution by 3 seconds

//the JS interpreter will first runs all the synchronous operation then it will run the asynchrnous operations

function myfn(){
    setTimeout(() => {
        console.log("Hi Hello")
    }, 5000);// delays the first statemnt by 5 sec  
    console.log("Vanakkam");// executed first
}
myfn();