const removeFromArray = function(a,...val) {
   for(let i=0;i<val.length;i++){
       a=a.filter(function(ele){
         if(typeof(ele)!=typeof(val[i])){return true;}  
         return ele!=val[i];
       });
    
   }
   return a;
};

// Do not edit below this line
module.exports = removeFromArray;
