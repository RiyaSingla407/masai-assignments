function getdata(){
    const fetchurl= "https://api.escuelajs.co/api/v1/products";
   // console.log(fetchurl);
    fetchdata(fetchurl);
}

async function fetchdata(url){
try{
const fetched= await fetch(url);
const data= await fetched.json();
//console.log(fetched);
console.log(data);
arrayofobj(data);
}
catch(err){
    console.log(err);
}
}

function arrayofobj(arr){
arr.forEach(function(el,index){
    const card= document.createElement("div");
    card.setAttribute("class","card");
    const image= document.createElement("img");
    image.src= el.category.image;
    const name= document.createElement("h3");
    name.textContent= el.category.name;
    const price= document.createElement("p");
    price.textContent= el.price;
    const button= document.createElement("button");
    button.textContent= "Add to Cart";
    button.addEventListener("click",function(){
        addtocart(el,index)
    });
     card.append(image,name,price,button);
    document.getElementById("groceries").append(card);
})
}

var cartlist=JSON.parse( localStorage.getItem("cartitem"))||[];

function addtocart(e){
    var sum= cartlist.reduce(function(acc,el){
        return(acc + el.price);
    },0)
    
   var newwallet= 700-sum;
    document.getElementById("wallet").innerText=newwallet;
    if(newwallet<0){
        alert("Insufficient Balance")    
    }
    else{
        document.getElementById("wallet").innerText= newwallet;
    
      var selectedproduct= {
        image:e.category.image,
        name: e.category.name,
        price:e.price
    }
    cartlist.push(selectedproduct);
    localStorage.setItem("cartitem",JSON.stringify(cartlist));
    }
}


