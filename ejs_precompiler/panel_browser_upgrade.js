panel_browser_upgrade= function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {var ___ViewO = [];; ___ViewO.push("<div id=\"browser_upgrade\" class=\"system_notice\">\n");
___ViewO.push("<a class=\"action_btn close_notice\" href=\"#\"><em><img src=\"http://s3.amazonaws.com/toyota.site.s03/toyota/media/build_price/button_delete_saved_vehicle.png\"></em></a>\n");
___ViewO.push("<p>Upgrade your browser"); ___ViewO.push((EJS.Scanner.to_text(foo))); ___ViewO.push("</p>\n");
___ViewO.push("<ul id=\"browser_selections\">\n");
if(navigator.platform.indexOf("Win") > -1){; ___ViewO.push("\n");
___ViewO.push("<li><a href=\"http://www.microsoft.com/canada/"); ___ViewO.push((EJS.Scanner.to_text(locale == 'fr' ? 'fr/' : '' ))); ___ViewO.push("windows/internet-explorer/default.aspx\" class=\"msie_link\" target=\"_blank\">Internet Explorer 8+</a></li>\n");
}; ___ViewO.push("\n");
___ViewO.push("<li><a href=\"http://www.mozilla.com/"); ___ViewO.push((EJS.Scanner.to_text(locale == 'fr' ? 'fr/' : '' ))); ___ViewO.push("firefox\" class=\"firefox_link\" target=\"_blank\">Firefox 3.6+</a></li>\n");
___ViewO.push("<li><a href=\"http://www.apple.com/ca/"); ___ViewO.push((EJS.Scanner.to_text(locale == 'fr' ? 'fr/' : '' ))); ___ViewO.push("safari/download\" class=\"safari_link\" target=\"_blank\">Safari 5+</a></li>\n");
___ViewO.push("<li><a href=\"http://www.google.com/chrome/"); ___ViewO.push((EJS.Scanner.to_text(locale == 'fr' ? '?hl=fr' : '' ))); ___ViewO.push("\" class=\"chrome_link\" target=\"_blank\">Chrome 9+</a></li>\n");
___ViewO.push("</ul>\n");
___ViewO.push("\n");
___ViewO.push("</div>\n");
; return ___ViewO.join('');}}}catch(e){e.lineNumber=null;throw e;}};