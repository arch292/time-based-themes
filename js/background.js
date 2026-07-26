'use strict';

init();

browser.runtime.onInstalled.addListener(async ({reason, previousVersion}) => {
  logDebug("0 - Installed - Reason: " + reason + ", Previous Version: " + previousVersion + ".");

  if (reason === 'install') {
    logDebug("0 - Just installed. Open the options page.");
    browser.runtime.openOptionsPage();
  }
});