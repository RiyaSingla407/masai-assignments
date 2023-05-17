document.getElementById("submit").value = "CONTINUE";
document.getElementById("submit").addEventListener("click",conti);


function conti(){
    var signuparr= [];
    event.preventDefault();
    var username= document.getElementById("name").value;
console.log(username);
    var signupobj= {
         name: username,
         email: document.getElementById("email").value,
         pass: document.getElementById("pass").value,
    }
   signuparr.push(signupobj);
    localStorage.setItem("signup",JSON.stringify(signuparr));
  alert("SignUp successful");
}
