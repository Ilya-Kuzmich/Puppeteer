const puppeteer = require('puppeteer');

class PageHolder {
    #page = null;
    #browser = null;
    #baseUrl = 'https://pptr.dev/';

    get page() {
        return this.#page;
    }

    get browser() {
        return this.#browser;
    }

    get baseUrl() {
        return this.#baseUrl;
    }

    async launch() {
        this.#browser = await puppeteer.launch({ headless: false });
    }

    async create() {
        this.#page = await this.#browser.newPage();
    }

    async close() {
        this.#page.close();
    }

    async finish() {
        this.#browser.close();
    }
}

module.exports = new PageHolder();