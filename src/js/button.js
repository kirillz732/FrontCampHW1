import { getNews } from './getNews';
import { remove } from './remove';
import { selectCountry } from './select';

selectCountry();

let select = document.getElementById('countries');
select.addEventListener('change', () => {
  let country = select.options[select.selectedIndex].text;
  remove();
  getNews(country);
});
