import axios from 'axios';

const fetchNews = async () => {
    return await axios
        .get('https://hacker-news.firebaseio.com/v0/newstories.json')
        .then((res) => res.data.slice(0, 10))
        .then((res) => fetchSingleStory(res));
};

const fetchSingleStory = async (stories) => {
    const storyPromises = stories.map(
        async (id) =>
            await axios
                .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then((res) => res.data)
    );
    return Promise.all(storyPromises);
};

export default fetchNews;
