'use strict';

init();

browser.runtime.onInstalled.addListener(async ({reason, previousVersion}) => {
  if (DEBUG_MODE)
    console.log("automaticDark DEBUG: 0 - Installed - Reason: " + reason + ", Previous Version: " + previousVersion + ".");

  // No init() here: the background page just loaded, so the top-level
  // init() above already ran. A second call registers the anonymous
  // matchMedia/focus listeners twice, and every scheme-change event
  // then runs two concurrent theme-switch chains.

  if (reason === 'install') {
    if (DEBUG_MODE)
      console.log("automaticDark DEBUG: 0 - Open the options page.");
    browser.runtime.openOptionsPage();
  }
});