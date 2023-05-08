var arr= [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },  
];
//console.log(arr[0].firstName);
var ans = arr.map(function(element,index){
return (element.firstName+" "+element.lastName );
});
console.log(ans);

// ["Nrupul Dev", "Prateek Shukla", "Yogesh Bhat"]