import * as module from './errorPopup';

import { proxy } from "./factory";

export async function getNews(country) {
  const proxyFactory = proxy();
  let url = proxyFactory.count10(country);
  let response;
  let news;
  let request = new Request(url);

  try {
    response = await fetch(request);
  } finally {
    if (response.status !== 200) {
      module.default.errorPopup('error status: ' + response.status + ' ' + response.statusText);
    }
  }

  try {
    news = await response.json();
  } catch (e) {
    module.default.errorPopup("JSON Error");
  }

  let articles = news.articles;
  let moment = require('moment');
  if (response.status === 200) {
    articles.forEach((article) => {
      let date = moment(article.publishedAt).format("YYYY-MM-DD, h:mm:ss a");
      let author = article.author === null ? 'Unknown' : article.author;
      let content = (article.content === null || article.content === '') ? 'Unknown' : article.content;
      let description = article.description === null ? 'Unknown' : article.description;
      let title = article.title === null ? 'Unknown' : article.title;
      let sourceName = article.source.name === null ? 'Unknown' : article.source.name;
      let articleCard = `<div class="col-sm-5">

    <div class="card">
      <img class="card-img-top" src="${article.urlToImage}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${author}, ${sourceName}</p>
      </div>
      <ul class="list-group list-group-flush">
        <div class="list-group-item">${description}</div>
        <div class="list-group-item">${content}</div>
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
}

