function printSpecial() {
	if (document.getElementById != null) {
		var html = '<!DOCTYPE html>\n';
		html += '<html>\n<head>\n';

		if (document.getElementsByTagName != null) {
			var headTags = document.getElementsByTagName("head");
			if (headTags.length > 0)
				html += headTags[0].innerHTML;
		}

		html += '\n';
		html += '<style> .printer {display: none !important;} </style>\n';
		html +='</head>\n<body>\n';

		var dseLogo = document.getElementById("DSE_LOGO_IMG");
		
		html += "<img src='" + dseLogo.src + "'/><hr size='2' style='margin-top: 10px'/>";
		
		var printReadyElem = document.getElementById("custom_print");

		if (printReadyElem != null) {
			html += printReadyElem.innerHTML;
		} else {
			alert("Could not find the custom_print section in the HTML");
			return;
		}

		html += '\n</body>\n</html>';

		var printWin = window.open("", "print");
		printWin.document.open();
		printWin.document.write(html);
	} else {
		alert("Sorry, the print ready feature is only available in modern browsers.");
	}
}
