var arr=[1,2,3,4,,5,6,7,7,,24,5,10];
var output = arr.filter(function(element){
    return (element%2!==0);
}).reduce(function(acc,element){
    return (acc+element);
});
console.log(output);