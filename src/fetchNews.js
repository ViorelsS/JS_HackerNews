import axios from 'axios';

function fetchNews(count) {
    axios
        .get('https://hacker-news.firebaseio.com/v0/newstories.json')
        .then((res) => {
            document.querySelector('#news').innerHTML = res.data.slice(
                count,
                count + 5
            );
        });
}

export default fetchNews;
