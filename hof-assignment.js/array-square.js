var arr= [2,3,4,5,6,7,8];
var square = [];
var sq = arr.forEach(function(element,index){
square.push(element*element);
});
console.log(square);