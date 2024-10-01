import axios from 'axios';
import NewsItem from './NewsItem';

class News {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.counter = 0;
        this.storyIds = [];
    }

    async loadInitialStoryIds() {
        const response = await axios.get(
            'https://hacker-news.firebaseio.com/v0/newstories.json'
        );
        this.storyIds = response.data.slice(0, 500);
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
            const storyResponse = await axios.get(
                `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            );
            return storyResponse.data;
        });
        return Promise.all(storyPromises);
    }
}

export default News;
