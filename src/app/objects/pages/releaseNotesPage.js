const BasePage = require("./basePage");
const ph = require ('../../pageHolder');

class ReleaseNotesPage extends BasePage {
    
   
    get rh() {
        return this.ph.page.$('.api-entry h3');
    }
}

module.exports = ReleaseNotesPage;