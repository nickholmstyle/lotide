/* NOTES:
INPUT: An array of emojis

- try defining the emoji as a variable
- iterate through the array
- if the array finds a raison
  * return the fail string
- if it doesn't find a raisin
  * return the all clear

OUTPUT: A string that says "Raisin alert!" if there are raisins in the array
        or a string that says "All good!"
*/

const raisinAlarm = function (cookie) {

  const raisin = "🍇";
  
  for (let ing of cookie) {
    let currentIng = '';
    if (ing === raisin) {
      return "Raisin alert!";
    }
  }
  return "All good!";
};


console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

/* INPUT: An array of emojis that contains and array of emojis.
- Define grape as a variable.
- define an empty array
- Iterate through the outer loop.
- Iterate through the inner loop.
- If it's a grape push message to an empty array.
- If it's not a grape then push All Good! message
OUTPUT: Return an array the contains all of our messages.
*/


//STRETCH:
const raisinAlarmArray = function (cookies) {
    const raisin = "🍇";
    let returnArray = [];
  
    for (let ingGroup of cookies) {
      if (ingGroup.includes(raisin)) {
        returnArray.push("STOP THERE'S A RAISIN")
      } else {
        returnArray.push("Eat the cookie you coward.")
      }
    }
  
    return returnArray;
  };

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

//["Raisin alert!", "Raisin alert!", "All good!"]