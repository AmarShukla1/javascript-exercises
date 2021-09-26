
const reverseString = function(str,index=0) {
  if(index>=str.length){return '';}  
   return reverseString(str,index+1)+str.charAt(index);
 
};

// Do not edit below this line
module.exports = reverseString;
