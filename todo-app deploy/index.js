document.querySelector("form").addEventListener("submit", Todoapp);
var todoarr= JSON.parse(localStorage.getItem("todo"))||[];
displayTodos(todoarr);
function Todoapp(){
    event.preventDefault();  
    var todoobj = {
       task:   document.getElementById("task").value,
       priority :document.getElementById("priority").value,
    };
    todoarr.push(todoobj);
    localStorage.setItem("todo", JSON.stringify(todoarr));
    displayTodos(todoarr);
};
function displayTodos(arr){
    document.querySelector("tbody").innerText="";
    arr.map(function(element){
        var row1 = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText= element.task;
        var td2 = document.createElement("td");
        td2.innerText= element.priority ;
        if( element.priority ==="Low"){
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
    })
}



