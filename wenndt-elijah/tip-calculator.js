function calculateTip(amount, rating) {
  
  var tip = 0 
  rating = rating.toLowerCase();
  
  if (rating === 'terrible') {
    tip = amount * 0;
  }
  else if (rating === 'poor'){
    tip = amount * .05
  }
  else if (rating === 'good'){
    tip = amount * .1
  }
  else if (rating === 'great'){
    tip = amount * .15
  }
  else if (rating === 'excellent') {
    tip = amount * .2
  }
  else {
    return "Rating not recognised";
    
  }
  tip = Math.ceil(tip);
  
  return tip;
  console.log(tip)
}
