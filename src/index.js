import './assets/styles/main.scss';
import icon from './assets/img/news-icon.png';
import News from './News';

const newsImg = document.querySelector('#newsImg');
newsImg.src = icon;

const newsBtn = document.getElementById('newsBtn');
const news = new News('news');

newsBtn.addEventListener('click', async () => {
    await news.displayNews();
});

async function initializeNews() {
    await news.loadInitialStoryIds();
    await news.displayNews();
}

initializeNews();
