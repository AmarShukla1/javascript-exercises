const palindromes = function (s) {
  let a='';
  s=s.toLowerCase();
  let regex=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
  s=s.replace(regex,"");
  for(let i=s.length-1;i>=0;i--){
      a+=s[i];
  }
  
  if(a===s){return true;}
  return false;
};

// Do not edit below this line
module.exports = palindromes;
