import fetchNews from './fetchNews';
import './assets/styles/main.scss';
import icon from './assets/news.png';

const newsImg = document.querySelector('#newsImg');
newsImg.src = icon;

const newsBtn = document.getElementById('newsBtn');
const news = document.querySelector('#news');

const createDiv = (className, innerHTML = '') => {
    let div = document.createElement('div');
    div.classList.add(className);
    div.innerHTML = innerHTML;
    return div;
};

const displayNews = async () => {
    news.innerHTML = '';

    const items = await fetchNews();

    console.log(items);
    items.forEach((item) => {
        const newsCard = createDiv(
            'news-item',
            `
            <div class="news-header">
                <span class="news-descendants">${
                    item.descendants || 0
                } articles inside</span>
                <span class="news-type">${item.type}</span>
            </div>
            <p class="news-title">${item.title}</p>
            <p class="news-author">${item.by}</p>
            <span class="news-score">Score: ${item.score}</span>
            <span class="news-date">${new Date(
                item.time * 1000
            ).toLocaleDateString()}</span>
            `
        );
        news.append(newsCard);
    });
};

newsBtn.addEventListener('click', async () => {
    displayNews();
});

displayNews();
