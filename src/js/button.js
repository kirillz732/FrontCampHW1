import { getNews } from './getNews';
import { remove } from './remove';

document.getElementById('RU').addEventListener('click', () => { remove(); getNews('ru') });
document.getElementById('US').addEventListener('click', () => { remove(); getNews('us') });
document.getElementById('UA').addEventListener('click', () => { remove(); getNews('ua&') });
