function displaytrending() {
    const popularapi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=25&key=AIzaSyCDWmW-czuytrZvThYE029Hf9T-b5PY0qA`;
    fetchapi(popularapi);
}
function displayresult(){
    const searchword=document.getElementById("searchwrd").value;
    const api=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchword}&key=AIzaSyCDWmW-czuytrZvThYE029Hf9T-b5PY0qA`;
  fetchapi(api);
}
async function fetchapi(url) {
    const oncefetch = await fetch(url);
    const jsonres = await oncefetch.json();
    console.log(jsonres.items);
    displaythumb(jsonres.items);
}

function displaythumb(arr) {
    document.getElementById("content").innerHTML = "";

    arr.forEach(function (el) {
        let cards = document.createElement("div");
        cards.setAttribute("class", "cards");
        let image = document.createElement("img");
        image.src = el.snippet.thumbnails.high.url;
        let title = document.createElement("p");
        title.textContent = el.snippet.title;
        let id= document.createElement("p");
        if(el.id.videoId){
            id.textContent=el.id.videoId;
        }
        else{
            id.textContent = el.id;
        }
        let channeltitle = document.createElement("h3");
        channeltitle.textContent = el.snippet.channelTitle;
        var views = document.createElement("p");
        if(el.statistics && el.statistics.viewCount && el.statistics.likeCount)
        {
           views.textContent = `Views:${el.statistics.viewCount} || Likes:${el.statistics.likeCount}`;
        }
     
        cards.append(image, channeltitle, views, title);
        cards.addEventListener("click", function(){
            showvideo(id.textContent)
        });
        document.getElementById("content").append(cards);
    })
}

function showvideo(movieid) {
   localStorage.setItem("videoId", movieid);
    window.location = "playvideo.html";
 // console.log(movieid)
}