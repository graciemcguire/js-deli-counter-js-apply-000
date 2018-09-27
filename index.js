function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}



function takeANumber(line){
  let count = 1;
  line.push(count);
  return `Welcome! You're ticket number #${count++}`;
}

// takeANumber(katzDeli) => "Welcome! You're ticket number #1" [1]
// takeANumber(katzDeli) => "Welcome! You're ticket number #2" [1, 2]

// nowServing(katzDeli) => "Currently serving #1" [2]
// nowServing(katzDeli) => "Currently serving #2" []

// takeANumber(katzDeli) => "Welcome! You're ticket number #3" [3]




function nowServing(line){
  if (!line.length){
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + line.shift() + '.';
  }
}

function currentLine(line){
  if (!line.length){
    return 'The line is currently empty.';
  } 
  
  let namesAndPlace =[];
    
  for (let i = 0; i < line.length; i++){
    namesAndPlace.push(i + 1 + '. ' + line[i]);
  }
    
  return `The line is currently: ${namesAndPlace.join(', ')}`;
}