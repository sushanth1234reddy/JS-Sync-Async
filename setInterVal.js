//setInterval:- it is used to repeat the function execution at a specified interval
//setInterval(function, interval, args)


setInterval(() => {
    console.log("value is:",x);//it repeats printing the the value with delay of 2 sec
    x++;
    
}, 2000,x=1);