// Defines a function declaration called `saturdayFun`
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Defines a function expression called `mondayWork`
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Defines a function declaration called `wrapAdjective`
  function wrapAdjective(flair = '*') {
    return function(adj = 'special') {
      return `You are ${flair}${adj}${flair}!`;
    };
  }
  
  // Test the `saturdayFun` function
  console.log(saturdayFun()); // logs "This Saturday, I want to roller-skate!"
  console.log(saturdayFun('bungee jump')); // logs "This Saturday, I want to bungee jump!"
  
  // Test the `mondayWork` function
  console.log(mondayWork()); // logs "This Monday, I will go to the office."
  console.log(mondayWork('work from home')); // logs "This Monday, I will work from home."
  
  // Test the `wrapAdjective` function
  const wrapStar = wrapAdjective();
  console.log(wrapStar('a hard worker')); // logs "You are *a hard worker*!"
  const wrapPipe = wrapAdjective('||');
  console.log(wrapPipe('a dedicated learner')); // logs "You are ||a dedicated learner||!"