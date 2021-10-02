const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	let ans=a.reduce(function(old,new1){
    return new1+old;
  },0);
  return ans;
};

const multiply = function(a) {
  let ans=a.reduce(function(old,new1){
    return new1*old;
  },1);
  return ans;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let f=1;
  for(let i=2;i<=a;i++){
    f*=i;
  }
  return f;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
