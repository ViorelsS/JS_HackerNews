import axios from 'axios';

const fetchNews = async (count) => {
    return await axios
        .get('https://hacker-news.firebaseio.com/v0/newstories.json')
        .then((res) => res.data.slice(count ? count : 0, count ? count : 10))
        .then((res) => fetchSingleStory(res));
};

const fetchSingleStory = async (stories) => {
    return stories.map(
        async (id) =>
            await axios
                .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json `)
                .then((res) => console.log(res))
    );
};

export default fetchNews;
