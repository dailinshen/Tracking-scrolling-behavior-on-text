chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if (tab.url.indexOf("nytimes.com") != -1) {
    	// $.append("<div id = "date_time"></div>");
    	// chrome.tabs.insertCSS(tab.id, {
    	// 	file: "css/record.css"
    	// });
    	chrome.tabs.executeScript(tab.id, {
    		// code: "alert(docume nt.querySelector('.kxhead'));"
    		// document.querySelector('.kxhead').append('<div id = 'date_time'></div>');
    		// file: "showdiv.js"
    	});
      	// alert("nytimes load complete");
      	// injectScripts();
    }
  }
});