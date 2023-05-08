var arr=[1,2,3,4,5,6,,77,,8,89,11];
var any= [];
var output = arr.filter(function(ele){
    return (ele%3===0);
}).forEach(function(ele){
any.push(ele*ele*ele);
});
var final= any.reduce(function(acc,ele){
    return (acc+ele);
});
console.log(final);