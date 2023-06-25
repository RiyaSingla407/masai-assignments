var cartlist=JSON.parse( localStorage.getItem("cartitem"))||[];

function groceriesincart(){
    document.getElementById("cart").innerHTML="";
   cartlist.forEach(function(el,index){
    const card= document.createElement("div");
    card.setAttribute("class","card");
    const image= document.createElement("img");
    image.src= el.image;
    const name= document.createElement("h3");
    name.textContent= el.name;
    const price= document.createElement("p");
    price.textContent= el.price;
    const button= document.createElement("button");
    button.textContent= "Remove";
    button.addEventListener("click",function(){
        remove(el,index)
    });
     card.append(image,name,price,button);
    document.getElementById("cart").append(card);
    })
  
    total();
    balance();
}


function total(){
 var sum= cartlist.reduce(function(acc,el){
 return(acc + el.price);
    },0)
  // console.log(sum);
   document.getElementById("totalvalue").innerText= sum;
}

function balance(){
const sum= cartlist.reduce(function(acc,el){
    return(acc + el.price);
       },0)
   var  newwallet= 700-sum;
document.getElementById("balanceamount").innerText=newwallet;

}

function remove(e,i){
cartlist.splice(i,1);
localStorage.setItem("cartitem",JSON.stringify(cartlist));
groceriesincart()
}