function scuberGreetingForFeet(distance){
  // Write your code here!
  let journey;
if(distance <=400){
    journey = "This is on me!";
if(distance > 400 && distance <= 2000){
  journey= 30*distance;
}
return journey;
   }else {
    journey ="The Ride can not be allowed";
    return journey;
   } 
}
function ternaryCheckCity(city){
  // Write your code here!
return city =='NYC'?'Ok, sounds good.':'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
switch(tip) {
  case 'generous':
    return 'Thank you so much.';
    break;
    case 'not as generous':
      return 'Thank you.';
      break;
  default:
  return 'Bye.';
    break;
}
}