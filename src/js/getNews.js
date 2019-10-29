export async function getNews(contry) {
  let url = 'https://newsapi.org/v2/top-headlines?' +
    + 'country=' + contry + '&' +
    'apiKey=52b388a921624383a19131605b5f1bfc';
  let request = new Request(url);
  let response = await fetch(request);
  let news = await response.json();
  let articles = news.articles.slice(0, 10);

  articles.forEach((article) => {
    let date = moment(article.publishedAt).format("YYYY-MM-DD, h:mm:ss a");
    let articleCard = `<div class="col-sm-5">
<div class="card">
  <img class="card-img-top" src="${article.urlToImage}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${article.title}</h5>
    <p class="card-text">${article.author}, ${article.source.name}</p>
  </div>
  <ul class="list-group list-group-flush">
    <div class="list-group-item">${article.description}</div>
    <div class="list-group-item">${article.content}</div>
    <div class="list-group-item">${article.description}</div>
    <div class="list-group-item">${date}</div>
  </ul>
  <div class="card-body">
  <div class="link">
    <a href="${article.url}" class="card-link">News link</a>
  </div>
  </div>
</div>
</div>`;
    document.getElementById('news').insertAdjacentHTML('beforeend', articleCard);
  })
}

