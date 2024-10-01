import fetchNews from './fetchNews';
import NewsItem from './NewsItem';

class News {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    async displayNews() {
        this.container.innerHTML = '';
        const items = await fetchNews();
        items.forEach((itemData) => {
            const newsItem = new NewsItem(itemData);
            const newsCard = newsItem.createCard();
            this.container.appendChild(newsCard);
        });
    }
}

export default News;
