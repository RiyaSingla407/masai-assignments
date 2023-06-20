var amar= {
    place:"Goa",
    skill:"singer",
}

var akbar= {
    skill:"Magician",
    place:"Mumbai"
}

var anthony= {
    place:"Kashmir",
    skill:"chef",  
}
var object={
    skills:function(s){
        this.skill=s
    },
}
object.skills.call(akbar, "chef")
console.log(akbar)

/*function objects(a,b){
    this.skill=a,
    this.place=b
}

var amar = new objects("singer", "Goa");
var akbar = new objects("chef", "Mumbai");
var anthony = new objects("Magician", "Kashmir");
*/