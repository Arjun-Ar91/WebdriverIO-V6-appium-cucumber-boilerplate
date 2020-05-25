const ActionHelper = require('./../helpers/actionHelpers');
const chai = require('chai').should();

class GooglePage {

    getObjectLocator() {
        return require(`./../screens/web/google.screen.js`);
    }

    launchGoogle() {
        ActionHelper.launchBrowserUrl(this.getObjectLocator().googleUrl);
        ActionHelper.pause(2);
    }

    verifyTitle(expectedTitle) {
        ActionHelper.getTitle().should.equal(expectedTitle);
    }
}

module.exports = GooglePage;
