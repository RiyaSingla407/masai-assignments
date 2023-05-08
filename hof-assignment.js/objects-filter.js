var arr = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
  var few = arr.filter(function(element,index){
    return (element.place==="Banglore");
  }).map(function(element,index){
    return (element.firstName+" "+element.lastName);
  });
  console.log(few);