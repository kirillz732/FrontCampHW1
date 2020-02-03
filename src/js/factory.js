let apis = {
  count10: function (country) {
    let api = 'https://newsapi.org/v2/top-headlines?pageSize=10&country='
      + country + '&' + 'apiKey=52b388a921624383a19131605b5f1bfc';
    return fetch(api)
  },
  count20: function (country) {
    let api = 'https://newsapi.org/v2/top-headlines?pageSize=20&country='
      + country + '&' + 'apiKey=52b388a921624383a19131605b5f1bfc';
    return fetch(api)
  },
};

export function proxy() {
  let p = new Proxy(apis, {
    get: function(target, propName, receiver) {
      const targetValue = Reflect.get(target, propName, receiver);
      if (typeof targetValue === 'function') {
       return function(...args) {
         console.log(`Called method ${propName} with arguments ${args}`);
         return targetValue.apply(this, args);
       }
      } else {
        return targetValue;
      }
    }
  });

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
