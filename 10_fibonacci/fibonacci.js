const fibonacci = function(a) {
 if(a<=0){return 'OOPS';}
   
    let ans=1,ans1=0;
 for(let i=2;i<=a;i++){//when comparing string and number javascript converts the string into number
  let temp=ans;   
  ans=ans+ans1;
  ans1=temp;
 }
 return ans;
};

// Do not edit below this line
module.exports = fibonacci;
