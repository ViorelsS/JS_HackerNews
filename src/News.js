import axios from 'axios';
import NewsItem from './NewsItem';

class News {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.counter = 0;
        this.storyIds = [];
    }

    async loadInitialStoryIds() {
        return await axios
            .get('https://hacker-news.firebaseio.com/v0/newstories.json')
            .then((res) => (this.storyIds = res.data));
    }

    async displayNews() {
        const items = await this.fetchNews(this.counter, 10);
        items.forEach((itemData) => {
            const newsItem = new NewsItem(itemData);
            const newsCard = newsItem.createCard();
            this.container.appendChild(newsCard);
        });
        this.counter += 10;
    }

    async fetchNews(start, limit) {
        const storyIds = this.storyIds.slice(start, start + limit);
        const storyPromises = storyIds.map(async (id) => {
            return await axios
                .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then((res) => res.data);
        });
        return Promise.all(storyPromises);
    }
}

export default News;
