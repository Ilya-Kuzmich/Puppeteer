const ReleaseNotesPage = require("./releaseNotesPage");

class PageFactory{
    getPage(page){
        if(page === 'Release Notes'){
            return new ReleaseNotesPage();
        } else {
            console.log("Err");
        }
    }
}

module.exports = PageFactory;