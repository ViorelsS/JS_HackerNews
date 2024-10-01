import axios from 'axios';

const fetchNews = async (start = 0, limit = 10) => {
    const response = null;
    if (start < 10) {
        response = await axios.get(
            'https://hacker-news.firebaseio.com/v0/newstories.json'
        );
    }
    const storyIds = response.data.slice(start, start + limit);
    const storyPromises = storyIds.map(async (id) => {
        const storyResponse = await axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return storyResponse.data;
    });
    return Promise.all(storyPromises);
};

export default fetchNews;
