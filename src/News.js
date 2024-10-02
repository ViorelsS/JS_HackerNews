import axios from 'axios';
import NewsItem from './NewsItem';
import isEmpty from 'lodash/isEmpty';

const API_BASE_URL = process.env.API_BASE_URL;

class News {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.counter = 0;
        this.storyIds = [];
        this.invalidTitleCount = 0;
    }

    async loadInitialStoryIds() {
        return await axios
            .get(`${API_BASE_URL}/newstories.json`)
            .then((res) => (this.storyIds = res.data));
    }

    async loadMoreStoryIds(count) {
        const newStoryIds = await axios
            .get(`${API_BASE_URL}/newstories.json`)
            .then((res) => res.data.slice(0, count));
        this.storyIds = [...this.storyIds, ...newStoryIds];
    }

    async displayNews() {
        if (this.counter >= 500 || this.invalidTitleCount >= 500) {
            await this.loadMoreStoryIds(500);
            this.invalidTitleCount = 0;
        }

        const items = await this.fetchNews(this.counter, 10);
        items.forEach((itemData) => {
            if (isEmpty(itemData.title)) {
                this.invalidTitleCount++;
                return;
            }
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
                .get(`${API_BASE_URL}/item/${id}.json`)
                .then((res) => res.data);
        });
        return Promise.all(storyPromises);
    }
}

export default News;
