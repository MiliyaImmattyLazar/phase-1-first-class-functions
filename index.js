function receivesAFunction(callback){
    callback()

}
receivesAFunction(sayhello)
function sayhello(){

}

function returnsANamedFunction() {
   
    function namedFunction() {
      console.log("I am a named function!");
    }
  
    return namedFunction;
  }
  const myFunction = returnsANamedFunction();
  myFunction();

  function returnsAnAnonymousFunction(){
    return function() {
        console.log("hi")
    }
  }
  const myAnonymousFunction = returnsAnAnonymousFunction();
  myAnonymousFunction(); 