const Header = require('./objects/controls/header');
const chai = require('chai');
const BaseObject = require('./objects/baseObject');
const PageFactory = require ('./objects/pages/pageFactory');


class Ui extends BaseObject {

    get expect() {
        return chai.expect;
    }

    get header() {
        return this.createGetter(Header);
    }

    async navigate(url = '') {
        if (!url.includes('http')) {
            url = `${this.ph.baseUrl}${url}`;
        }
        await this.ph.page.goto(url);
    }

    get factory() {
        return this.createGetter(PageFactory);
    }
}

module.exports = new Ui();