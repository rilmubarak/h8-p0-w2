function balikKata(kata) {
    var blk = '';

    for (var i=[kata.length-1]; i>=0; i--){
        blk += kata[i];
    }
    return blk;
  }
  
  console.log(balikKata('Hello World and Coders')); 
  console.log(balikKata('John Doe')); 
  console.log(balikKata('I am a bookworm'));
  console.log(balikKata('Coding is my hobby'));
  console.log(balikKata('Super'));