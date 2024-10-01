import axios from 'axios';

const fetchNews = async () => {
    const response = await axios.get(
        'https://hacker-news.firebaseio.com/v0/newstories.json'
    );
    const storyIds = response.data.slice(0, 10);
    const storyPromises = storyIds.map(async (id) => {
        const storyResponse = await axios.get(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return storyResponse.data;
    });
    return Promise.all(storyPromises);
};

export default fetchNews;
