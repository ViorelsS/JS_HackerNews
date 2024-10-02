# 📰 Hacker News Fetcher

<p align="center">
  <img src="src/assets/img/preview.png" alt="Preview" style="max-width: 100%; height: auto;">
</p>

Hacker News Fetcher is a simple web application that fetches and displays the latest news from **Hacker News** using their API. The application is built with **JavaScript**, **SCSS**, and **Webpack**, and uses **Axios** for handling API requests.

## 🌐 Live Website

The project is deployed using Netlify and can be accessed [here](https://js-hackernews.netlify.app/).

## 🚀 Features

-   **Latest News:** Load and display the most recent news from Hacker News.
-   **Responsive Design:** Adaptive layout for both desktop and mobile devices.
-   **Optimized Performance:** Uses Webpack to optimize asset loading.
-   **Asynchronous Handling:** Uses Axios for HTTP requests and real-time updates.

## 🛠️ Tools and Technologies Used

-   **JavaScript (ES6+):** For handling the logic and interaction with the Hacker News API.
-   **SCSS (SASS):** For managing the styles and responsive layout.
-   **Webpack:** For bundling the project, managing assets, and local development support.
-   **Axios:** For making HTTP requests to the Hacker News API.
-   **Babel:** To ensure cross-browser compatibility with modern JavaScript code.
-   **Lodash:** For data formatting and handling cases where the title is null or undefined.

## 📁 Project Structure

```bash
dist/npm install mini-css-extract-plugin --save-dev
  ├── index.html
  ├── bundle.[contenthash].js
  ├── assets/
  │   ├── favicon/
  │   │   ├── browserconfig.xml
  │   │   └── site.webmanifest
  │   └── img/
  └── preview.png
src/
  ├── assets/
  │   ├── favicon/
  │   │   ├── browserconfig.xml
  │   │   └── site.webmanifest
  │   └── img/
  ├── styles/
  │   ├── _config.scss
  │   └── main.scss
  ├── index.js
  ├── News.js
  ├── NewsItem.js
  └── template.html
webpack.config.js
.gitignore
package.json
README.md
```

## 🔧 Installation

Follow these steps to set up the application locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ViorelsS/JS_HackerNews.git
    cd JS_HackerNews
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## 🚀 Usage

### NPM Commands

-   **Build the project:** Compile the project for production.

    ```bash
    npm run build
    ```

-   **Start the development server:** Start a local development server to test the application.

    ```bash
    npm run dev
    ```

    1. Open your browser and go to `http://localhost:3000` (with the current webpack configuration, the browser will automatically open when running the previous command).
    2. Click the "Load News" button to load and display the latest news from **Hacker News**.

## 📑 Code Structure

### `src/index.js`

This is the entry point of the application. It imports styles, the icon, and the `News` class. It initializes the icon and adds a listener to the "Load News" button. When the user clicks the button, the `loadNews` method from the `News` class is called to fetch and display the latest news.

### `src/News.js`

The `News` class handles fetching and displaying the news. It uses Axios to make requests to the Hacker News API. The class includes methods for retrieving the news data, processing the response, and updating the DOM with the news articles. It also handles errors during data retrieval.

### `src/NewsItem.js`

The `NewsItem` class represents a single news article. This class is responsible for creating the DOM elements for each article, including the title, link, and other relevant information. It uses Lodash to format the data and handle cases where the title is null or undefined, ensuring that no titleless news articles are displayed.

### `src/assets/styles/main.scss`

The main SCSS file for styling. It includes font configurations, style variables, and base styles for the application. It also defines styles for specific components like the "Load News" button and the news articles. SCSS modularity is used to keep the styles organized and maintainable.

### `webpack.config.js`

The Webpack configuration file manages the bundling of SCSS files, JavaScript, and static assets. It includes rules for handling different file types and plugins for automatically generating the HTML and copying static assets to the `dist` folder. It also configures the development server to facilitate local testing.

## 🛠️ Webpack Configuration

Here’s an overview of the main plugins used in **Webpack**:

-   **HtmlWebpackPlugin**: Automatically generates the HTML and injects the JavaScript bundle.
-   **CopyWebpackPlugin**: Copies images and favicons to the `dist` folder during the build process.
-   **Babel Loader**: Transpiles modern JavaScript into a version compatible with all browsers.
-   **Sass Loader**: Converts SCSS files into browser-compatible CSS.

## 🤝 Contributions

Contributions are welcome! If you find bugs or want to add new features, feel free to open an issue or submit a pull request on [GitHub](https://github.com/ViorelsS/JS_HackerNews).

1. Fork the project.
2. Create a new branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a pull request.

## ✨ Author

Created by [@ViorelsS](https://github.com/ViorelsS).  
Feel free to connect on GitHub to check out more interesting projects!

---

### 📄 Useful Links

-   [Hacker News API Documentation](https://github.com/HackerNews/API)
-   [Axios](https://axios-http.com/docs/intro)
-   [Webpack](https://webpack.js.org/)
-   [Babel](https://babeljs.io/)
