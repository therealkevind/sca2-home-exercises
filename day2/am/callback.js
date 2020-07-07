// In an alternate universe, coins have a `true` and a `false` side.
// Write code that first gets a user via a getUser() call, then in the callback,
// flips a coin and tells the user whether or not their guess was correct

const coinToss = (guess, callback) => {
  const result = Math.round(Math.random());
  const didWin = guess === result;
  callback(didWin);
};

const getUser = callback => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    guess: Math.round(Math.random())
  };
  callback(user);
};

const handleWin = didWin => {
  if (didWin) console.log("You won!");
  else console.log("Sorry, try again.");
};

getUser(({guess})=>coinToss(guess, handleWin));