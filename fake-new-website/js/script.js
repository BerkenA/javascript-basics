let news = [
    {
        headLine: "Watch Hesh ladning on the moon",
        summary: "He landed with his superjet"
    },
    {
        headLine: "Lorem ipsum dolor sit amet.",
        summary: "Lorem ipsum dolor sit amet."
    },
    {
        headLine: "Lorem ipsum dolor sit amet.",
        summary: "Lorem ipsum dolor sit amet."
    }
];


let newsContainer = document.querySelector(".news");

function createNews(newsArray){
    let newsItems = "";

totalNews = news.length;

for(let i=0; i < totalNews; i++){
    newsItems = newsItems +`
<div>
    <h2>
        ${news[i].headLine}
    </h2>
    <p>
        ${news[i].summary}
    </p>
</div>
`}
}

newsContainer.innerHTML = newsItems;





