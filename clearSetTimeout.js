//clearTimeOut: used to stop/cancel/clear the setTimeout funtion 
let x=setTimeout(() => {
    console.log("hello");
    clearTimeout(x);
}, 5000);