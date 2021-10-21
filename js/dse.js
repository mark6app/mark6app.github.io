
var SMALL_FONT_PERSENTAGE = 83;
var MIDDLE_FONT_PERSENTAGE = 93;
var LARGE_FONT_PERSENTAGE = 103;
var lastModifyDate = "";
var noCmsContent = false;

function getLocaleURL(oL,nL){
	var protocol = window.location.protocol;
	var host = window.location.host;
	var URL = window.location.href;

	var foundIdx = URL.indexOf(oL,0);
	var friendlyURL;
	var targetUrl;

	if (foundIdx > 0) {
		var x = new Number(foundIdx);
		var y = new Number(oL.length);
		friendlyURL = URL.substring(x+y, URL.length);
		targetUrl = protocol+"//"+host+"/"+nL+friendlyURL;

	} else {
		friendlyURL = URL.substring((protocol+"//"+host).length, URL.length);
		if (friendlyURL.indexOf("/zh/") == 0 || friendlyURL.indexOf("/en/") == 0 || friendlyURL.indexOf("/pt/") == 0) {
			friendlyURL = friendlyURL.substring(3, friendlyURL.length);
		}
		targetUrl = protocol+"//"+host+"/"+nL+friendlyURL;
	}
	//}
	window.location.href = targetUrl;
}

function getMainPageLocaleURL(nL){
	var protocol = window.location.protocol;
	var host = window.location.host;
	//var URL = window.location.href;
	var url = protocol+"//"+host+"/";
	if(nL =="en_US"){
		window.location.href = url;
	} else {
		url = protocol+"//"+host+"/"+nL+"/";
		window.location.href = url;
	}
}

function preventDoubleSubmit(itemId) {
	setTimeout('document.getElementById(\'' + itemId + '\').disabled=true;', 50);
	setTimeout('document.getElementById(\'' + itemId + '\').disabled=false;', 2000);
	
}


function clearNavigationPathLastNode() {
	var lastNode = document.getElementById("lastNodePath");
	if (lastNode != null)
		lastNode.innerHTML = "";
}

function setNavigationPathLastNode(lastNodePath, isLastNode) {
	var lastNode = document.getElementById("lastNodePath");
	if (lastNode != null && lastNode != "") {
		var firstArrow = "";
		var fontBeginTag = "";
		var fontEndTag = "";
		if (isLastNode) {
			firstArrow = " » ";
			fontBeginTag = "<font class='fontNavigationText'>";
			fontEndTag = "</font>";
		}
		lastNode.innerHTML = firstArrow + fontBeginTag + lastNodePath + fontEndTag;
	}
}

function setBodyScale(fontSize, imgFolder) {
	var fontSize_expires=30;  // 30 days
	MakeCookie('fontSize', fontSize, fontSize_expires);
	$('body').css('font-size', fontSize + '%');
	setFontScaleImage(fontSize, imgFolder);
}			

function restoreBodyScale(imgFolder){
	var fontSize=ReadCookie("fontSize");
	if (fontSize) {		
		$('body').css('font-size', fontSize + '%');
		setFontScaleImage(Number(fontSize), imgFolder);
	} else {
		$('#small_font_img').attr("src", imgFolder + "/fontsize_small_sel.gif");
	}
}

function setFontScaleImage(fontSize, imgFolder) {
	$('#small_font_img').attr("src", imgFolder + "/fontsize_small.gif");
	$('#middle_font_img').attr("src", imgFolder + "/fontsize_middle.gif");
	$('#large_font_img').attr("src", imgFolder + "/fontsize_large.gif");

	switch (fontSize) {
		case SMALL_FONT_PERSENTAGE:
			$("#small_font_img").attr("src", imgFolder + "/fontsize_small_sel.gif");
		    break;
		case MIDDLE_FONT_PERSENTAGE:  
			$("#middle_font_img").attr("src", imgFolder + "/fontsize_middle_sel.gif");
		    break;
		case LARGE_FONT_PERSENTAGE:  
			$("#large_font_img").attr("src", imgFolder + "/fontsize_large_sel.gif");
		    break;
		default: 
			$("#small_font_img").attr("src", imgFolder + "/fontsize_small_sel.gif");
	}
}

function setLastModifyDate(theDate, forceUpdate) {
	forceUpdate = (typeof forceUpdate === 'undefined') ? false : forceUpdate;
		
	if (lastModifyDate && !forceUpdate) {
		if (isDateAfter(theDate, lastModifyDate, "yyyy-mm-dd", "-")) {
			lastModifyDate = theDate;
		}
	} else {
		lastModifyDate = theDate;
	}
	
	var df = document.getElementById("lastModifyDate");
	if (df)
		df.innerHTML = lastModifyDate;
}

function setNoCmsContent() {
	noCmsContent = true;
}
