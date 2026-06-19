// Immediately Invoked Function Expressions (IIFE)

(function rhn (){
    //named iife
    console.log("DB connected");
    
})();
( (name) => {
    //unnamed iffe
    console.log(`DB connected two ${name}`);
    
})("rohan")