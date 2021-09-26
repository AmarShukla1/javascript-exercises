const repeatString = function(a,b) {
    let str='';
    if(b<0){return 'ERROR';}
    
    for(let i=0;i<b;i++){
     str+=a;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
