function ABCheck(str) {
  for(var i=0; i < str.length; i++) {
    if(str[i] === 'a' && str[i+4] === 'b' ) 
        return true;
  }
  return false; 
} 