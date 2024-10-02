import linkBtnIcon from './assets/img/right-icon.png';
import _ from 'lodash';

class NewsItem {
    constructor({ by, time, title, type, score, url }) {
        this.author = by;
        this.time = new Date(time * 1000);
        this.title = title;
        this.type = type;
        this.score = score;
        this.url = url;
    }

    formatDate() {
        return this.time.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('news-item');

        const cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');

        const score = document.createElement('p');
        score.classList.add('score');
        score.innerHTML = `Score: ${this.score}`;

        const type = document.createElement('p');
        type.classList.add('type');
        type.innerHTML = this.type;

        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer');

        const linkBtn = document.createElement('button');
        linkBtn.classList.add('link-btn');

        const link = document.createElement('a');
        link.href = this.url;
        link.innerHTML = _.toUpper('more ');
        link.setAttribute('aria-label', `Read more about ${this.title}`);

        const img = document.createElement('img');
        img.src = linkBtnIcon;
        img.alt = 'left-arrow-icon';
        img.loading = 'lazy';

        linkBtn.appendChild(link);
        linkBtn.appendChild(img);

        cardHeader.appendChild(score);
        cardHeader.appendChild(type);

        const cardTitle = document.createElement('p');
        cardTitle.classList.add('title');
        cardTitle.innerHTML = this.title;

        const author = document.createElement('p');
        author.classList.add('author');
        author.innerHTML = `Written by: <strong>${this.author}</strong>`;

        const date = document.createElement('p');
        date.classList.add('date');
        date.innerHTML = this.formatDate();

        cardFooter.append(author);
        cardFooter.append(linkBtn);

        card.appendChild(cardHeader);
        card.append(date);
        card.appendChild(cardTitle);
        card.appendChild(cardFooter);

        return card;
    }
}

export default NewsItem;
