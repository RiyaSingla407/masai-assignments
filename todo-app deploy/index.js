document.querySelector("form").addEventListener("submit", Todoapp);
//document.getElementById("submit").addEventListener("click", addvalue);

function Todoapp(){
    event.preventDefault();
    var row1 = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText= document.getElementById("task").value ;
    var td2 = document.createElement("td");
    td2.innerText= document.getElementById("priority").value ;
    if(td2.innerText==="Low"){
        td2.style.backgroundColor= "green";
    }
    else {
        td2.style.backgroundColor= "red";
    };

    var td3 = document.createElement("td");
    td3.innerText= "Delete"; 
  td3.style.color= "red";

    td3.addEventListener("click", removerow);
    function removerow(){
        event.target.parentNode.remove();
          };
    row1.append(td1,td2,td3); 
   
    document.querySelector("tbody").append(row1);
};



