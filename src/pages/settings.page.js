const ActionHelper = require('./../helpers/actionHelpers');
const chai = require('chai').should();

class SettingsPage {

    getObjectLocator() {
        return require(`./../screens/native/${browser.capabilities.platformName.toLowerCase()}/settings.screen.js`);
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(2);
    }

    verifyGeneralLabel() {
        ActionHelper.getText(this.getObjectLocator().general).should.equal('General');
    }
}

module.exports = SettingsPage;
