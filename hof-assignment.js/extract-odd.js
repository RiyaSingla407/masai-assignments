var arr =[1,2,3,4,5,6,7,8,9,10]
var extract= arr.filter(function(element){
    return (element%2!==0);
});
console.log(extract);