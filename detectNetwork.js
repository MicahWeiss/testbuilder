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
  console.log('card is ', card);
  console.log('prefix ', card.slice(0,2), ' length ', card.length);
  
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
  
  else{ 
    return 'No match found. This should not happen.'
  }
};


