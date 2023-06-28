
document.addEventListener("DOMContentLoaded", function() {
    let videoId = localStorage.getItem("videoId");
    let frame = document.getElementById("videoframe");
    frame.src = `https://www.youtube.com/embed/${videoId}`;
});