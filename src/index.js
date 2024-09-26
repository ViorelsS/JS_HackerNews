import fetchNews from './fetchNews';
import './assets/styles/main.scss';
import icon from './assets/news.png';

const newsImg = document.querySelector('#newsImg');
newsImg.src = icon;

const newsBtn = document.getElementById('newsBtn');

newsBtn.addEventListener('click', () => fetchNews(Math.random() * 100));

fetchNews().then((res) => console.log(res));
