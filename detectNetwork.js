// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  card = String(cardNumber);

  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or
  //6759 and a length of 16, 18, or 19.  
  if(['4903', '4905', '4911', '4936', '6333', '6759'].includes(card.slice(0,4))){
    if([16, 18, 19].includes(card.length)){
      return 'Switch';
    }
  }
  if(['564182', '633110'].includes(card.slice(0,6))){
    if([16, 18, 19].includes(card.length)){
      return 'Switch';
    }
  } 
  
  //Diner's Club
  if(card.slice(0,2) === '38' || card.slice(0,2) === '39'){
    if(card.length === 14){
      return 'Diner\'s Club'
    }
  }
  
  if(card.slice(0,2) === '34' || card.slice(0,2) === '37'){
    if(card.length === 15){
      return 'American Express'
    }
  }
  
  if(card.slice(0,1) === '4'){
    if(card.length === 13 || card.length === 16 || card.length === 19){
      return 'Visa'
    }
  }
  
  if(Number(card.slice(0,2)) >=  51 && Number(card.slice(0,2)) <= 55){
    if(card.length === 16){
      return 'MasterCard'
    }
  }
  
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if(card.slice(0,4) === '6011' || card.slice(0,2) == '65'){
    if(card.length === 16 || card.length === 19){
      return 'Discover'
    }
  }
  if(Number(card.slice(0,3)) >= 644 && Number(card.slice(0,3)) <= 649){
    if(card.length === 16 || card.length === 19){
      return 'Discover'
    }
  }
  
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if(card.slice(0,4) === '5018' || card.slice(0,4) === '5020' 
  || card.slice(0,4) === '5038' || card.slice(0,4) === '6304'){
    if(card.length >= 12 && card.length <= 19){
      return 'Maestro'
    }
  }
  
  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19."
  if( Number(card.slice(0,6)) >= 622126 && Number(card.slice(0,6)) <= 6222925){
    if(card.length >= 16 && card.length <= 19){
      return 'China UnionPay'
    }
  }
  
  if( Number(card.slice(0,3)) >= 624 && Number(card.slice(0,3)) <= 626){
    if(card.length >= 16 && card.length <= 19){
      return 'China UnionPay'
    }
  }
  
  if( Number(card.slice(0,4)) >= 6282 && Number(card.slice(0,4)) <= 6288){
    if(card.length >= 16 && card.length <= 19){
      return 'China UnionPay'
    }
  } 
  
  else{ 
    console.log('No match found. This should not happen.');
  }
};


