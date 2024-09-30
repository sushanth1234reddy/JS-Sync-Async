//clearInterval:- it is used to stop or cancel the setInterval Function i.e acts as a breakpoint(where to stop the function).
let val=setInterval(() => {
    console.log("Value is:",x);
    x++;
    if(x==11){
        clearInterval(val);
    }
}, 1000,x=1);