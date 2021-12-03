const ui = require('../app/ui');

describe('example spec2', function () {
    before(async () => {
        await ui.ph.launch();
    })

    after(() => ui.ph.finish());

    beforeEach(async () => {
        await ui.ph.create();
        await ui.navigate('https://pptr.dev/#?product=Puppeteer&version=v12.0.1&show=api-release-notes');
    })

    afterEach(() => ui.ph.close());

    it('second test', async function () {
        await ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://img.shields.io/npm/v/puppeteer.svg' && resp.status() === 200;
        });
        let pageRN = ui.factory.getPage('Release Notes');
        const test2 = (await pageRN.getText('rh'))
        ui.expect(test2).to.equal('Bug Fixes') 
    })
});