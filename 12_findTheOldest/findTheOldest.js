const findTheOldest = function(arr) {
  for(let i=0;i<arr.length;i++){
      if(!arr[i].yearOfDeath){arr[i].yearOfDeath=2021;}
  }  
 arr.sort(function(a,b){
  
  if((a.yearOfDeath-a.yearOfBirth)>(b.yearOfDeath-b.yearOfBirth)){
      return -1;
  }
  else{
      return 1;
  }
 });//this 1,-1 return is the best way warna c++ ki tarike kar rahe the to bug aa raha tha wasn't 
 //correctly sorting itself.
 
 return arr[0].name;
};


// Do not edit below this line
module.exports = findTheOldest;
