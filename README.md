# 📰 Hacker News Fetcher

<p align="center">
  <img src="src/assets/img/preview.png" alt="Preview" style="max-width: 100%; height: auto;">
</p>

Hacker News Fetcher è una semplice applicazione web che recupera e visualizza le ultime notizie da **Hacker News** utilizzando la loro API. L'applicazione è costruita con **JavaScript**, **SCSS**, e **Webpack**, e utilizza **Axios** per la gestione delle richieste API.

## 🚀 Funzionalità

-   **Ultime Notizie:** Carica e visualizza le notizie più recenti da Hacker News.
-   **Responsive Design:** Layout adattivo per desktop e dispositivi mobili.
-   **Performance Ottimizzata:** Utilizza Webpack per ottimizzare il caricamento delle risorse.
-   **Gestione Asincrona:** Utilizza Axios per richieste HTTP e aggiornamenti in tempo reale.

## 🛠️ Strumenti e Tecnologie Utilizzate

-   **JavaScript (ES6+)**: Per la logica di gestione e l'interazione con l'API di Hacker News.
-   **SCSS (SASS)**: Per la gestione degli stili e del layout responsive.
-   **Webpack**: Per il bundling del progetto, la gestione degli asset e il supporto allo sviluppo locale.
-   **Axios**: Per le chiamate HTTP all'API di Hacker News.
-   **Babel**: Per la compatibilità cross-browser con il codice moderno.

## 📁 Struttura del Progetto

```bash
dist/
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

## 🔧 Installazione

Segui questi passi per configurare l'applicazione localmente:

1. **Clona il repository:**

    ```bash
    git clone https://github.com/ViorelsS/JS_HackerNews.git
    cd JS_HackerNews
    ```

2. **Installa le dipendenze:**

    ```bash
    npm install
    ```

## 🚀 Utilizzo

### Comandi NPM

-   **Build del progetto:** Compila il progetto per la produzione.

    ```bash
    npm run build
    ```

-   **Avvio del server di sviluppo:** Avvia un server di sviluppo locale per testare l'applicazione.

    ```bash
    npm run dev
    ```

    1. Apri il browser e vai a `http://localhost:3000`.

    2. Clicca sul pulsante "Load News" per caricare e visualizzare le ultime notizie da **Hacker News**.

## 📑 Struttura del Codice

### `src/index.js`

Il punto di ingresso dell'applicazione. Questo file importa gli stili, l'icona e la classe `News`. Inizializza l'icona e aggiunge un listener per il pulsante di caricamento delle notizie. Quando l'utente clicca sul pulsante, viene chiamato il metodo `loadNews` della classe `News` per recuperare e visualizzare le ultime notizie.

### `src/News.js`

La classe `News` gestisce il caricamento e la visualizzazione delle notizie. Utilizza Axios per fare richieste all'API di Hacker News. La classe include metodi per recuperare i dati delle notizie, elaborare la risposta e aggiornare il DOM con gli articoli di notizia. Gestisce anche eventuali errori durante il recupero dei dati.

### `src/NewsItem.js`

La classe `NewsItem` rappresenta un singolo articolo di notizia. Questa classe è responsabile della creazione degli elementi DOM per ogni articolo, inclusi il titolo, il link e altre informazioni rilevanti. Utilizza Lodash per formattare i dati e gestire i casi in cui il titolo è nullo o undefined, evitando di mostrare news senza titolo.

### `src/assets/styles/main.scss`

Il file principale degli stili SCSS. Include la configurazione dei font, le variabili di stile e gli stili di base dell'applicazione. Definisce anche gli stili per i componenti specifici come il pulsante di caricamento delle notizie e gli articoli di notizia. Utilizza la modularità di SCSS per mantenere il codice degli stili organizzato e manutenibile.

### `webpack.config.js`

Il file di configurazione di Webpack gestisce il bundling dei file SCSS, JavaScript e delle risorse statiche. Include le regole per la gestione dei diversi tipi di file e i plugin per la generazione automatica dell'HTML e la copia delle risorse statiche nella cartella `dist`. Configura anche il server di sviluppo per facilitare il testing locale dell'applicazione.

## 🛠️ Configurazione Webpack

Ecco una panoramica dei principali plugin utilizzati in **Webpack**:

-   **HtmlWebpackPlugin**: Genera automaticamente l'HTML e inserisce il bundle JavaScript.
-   **CopyWebpackPlugin**: Copia le immagini e le favicon nella cartella `dist` durante la build.
-   **Babel Loader**: Transpila il codice moderno JavaScript in una versione compatibile con tutti i browser.
-   **Sass Loader**: Converte i file SCSS in CSS compatibili con il browser.

## 🤝 Contributi

I contributi sono benvenuti! Se trovi bug o desideri aggiungere nuove funzionalità, sentiti libero di aprire un'issue o fare una pull request su [GitHub](https://github.com/ViorelsS/JS_HackerNews).

1. Fai un fork del progetto.
2. Crea un nuovo branch (`git checkout -b feature/NuovaFunzionalità`).
3. Fai il commit delle tue modifiche (`git commit -m 'Aggiungi nuova funzionalità'`).
4. Fai push sul branch (`git push origin feature/NuovaFunzionalità`).
5. Apri una pull request.

## ✨ Autore

Creato da [@ViorelsS](https://github.com/ViorelsS).
Sentiti libero di connetterti su GitHub per vedere altri progetti interessanti!

---

### 📄 Link Utili

-   [Documentazione API Hacker News](https://github.com/HackerNews/API)
-   [Axios](https://axios-http.com/docs/intro)
-   [Webpack](https://webpack.js.org/)
-   [Babel](https://babeljs.io/)
