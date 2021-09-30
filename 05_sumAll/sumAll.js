const sumAll = function(start,end) {
  if((typeof(start)!='number')||(typeof(end)!='number')){return 'ERROR';}
  if(start<0||end<0){return 'ERROR';}
  if(start>end){
    [start,end]=[end,start];
  }
  let res=(end*(end+1))/2;
  let res1=(start*(start-1))/2;
  return res-res1;
};

// Do not edit below this line
module.exports = sumAll;
