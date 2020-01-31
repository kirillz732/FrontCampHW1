let apis = {
  count10: function (country) {
    let api = 'https://newsapi.org/v2/top-headlines?pageSize=10&country='
      + country + '&' + 'apiKey=52b388a921624383a19131605b5f1bfc';
    return api
  },
  count20: function (country) {
    let api = 'https://newsapi.org/v2/top-headlines?pageSize=20&country='
      + country + '&' + 'apiKey=52b388a921624383a19131605b5f1bfc';
    return api
  },
};

export function proxy() {
  let p = new Proxy(apis, {});
  console.log(apis);
  return p
}

// function ApiFactory(country) {
//   this.country = country;
// }

// ApiFactory.prototype = {
//   constructor: ApiFactory,
//
//   get10() {
//     return apis.count10(this.country)
//   },
//   get20() { return apis.count20(this.country)}
// };
