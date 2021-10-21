/* Modified on 2015-09 */


function getNetUIElement(id, tag) {
    elementId = getNetuiTagName(id, tag);
    return document.getElementById(elementId);
}  
    



function showPrintPage() {
    var headerPart = document.getElementById("DSE_HEADER");
    var bannerPart = document.getElementById("DSE_BANNER");
    var userPart = document.getElementById("DSE_USER_PANEL");
    var printPart = document.getElementById("DSE_PRINT");
    var cancelPrintPart = document.getElementById("DSE_CANCEL_PRINT");
    var leftMenuPart = document.getElementById("DSE_LEFT_MENU");
    var lastLoginPart = document.getElementById("DSE_LAST_LOGIN_DATE");
        
    headerPart.style.display = "none";
    headerPart.style.visibility  = "hidden";
    
    bannerPart.style.display = "none";
    bannerPart.style.visibility  = "hidden";    
    
    userPart.style.display = "none";
    userPart.style.visibility  = "hidden";
    
    printPart.style.display = "none";
    printPart.style.visibility  = "hidden";      
    
    cancelPrintPart.style.display = "";
    cancelPrintPart.style.visibility  = "visible";    
    
    leftMenuPart.style.display = "none";
    leftMenuPart.style.visibility  = "hidden";    
    
    lastLoginPart.style.display = "none";
    lastLoginPart.style.visibility  = "hidden";    
}


function cancelPrintPage() {
    var headerPart = document.getElementById("DSE_HEADER");
    var bannerPart = document.getElementById("DSE_BANNER");
    var userPart = document.getElementById("DSE_USER_PANEL");
    var printPart = document.getElementById("DSE_PRINT");
    var cancelPrintPart = document.getElementById("DSE_CANCEL_PRINT");
    var leftMenuPart = document.getElementById("DSE_LEFT_MENU");
    var lastLoginPart = document.getElementById("DSE_LAST_LOGIN_DATE");
    
    headerPart.style.display = "";
    headerPart.style.visibility  = "visible";
    
    bannerPart.style.display = "";
    bannerPart.style.visibility  = "visible";
    
    userPart.style.display = "";
    userPart.style.visibility  = "visible";   
    
    printPart.style.display = "";
    printPart.style.visibility  = "visible";   
    
    cancelPrintPart.style.display = "none";
    cancelPrintPart.style.visibility  = "hidden";    
    
    leftMenuPart.style.display = "";
    leftMenuPart.style.visibility  = "visible";   
    
    lastLoginPart.style.display = "";
    lastLoginPart.style.visibility  = "visible";  

}


// ------------------------------------------------
// Registration Functions
// ------------------------------------------------
function onSelectIDPlaceOfIssue(idType, f) {
    if ("IDT0002" == idType.value || "IDT0008" == idType.value) {
        changeIDPlaceOfIssue(f, "MO");
    } else if ("IDT0007" == idType.value) {
        changeIDPlaceOfIssue(f, "CN");
    } else if ("IDT0004" == idType.value) {
        changeIDPlaceOfIssue(f, "HK");
    } else {
        changeIDPlaceOfIssue(f, "---");
    }
}

function changeIDPlaceOfIssue(f, place) {
    var idPlace = f[getNetuiTagName("idPlaceOfIssue", this)];
    var i = 0;
    for (i=0; i<idPlace.options.length; i++) {
        if (idPlace.options[i].value == place) {
            idPlace.options[i].selected = true;
            break;
        }
    }
}




// -----------------------------------------------
// Show a layer in the center of the window
// -----------------------------------------------
function ShowDivInCenter(layerID) {
	var x, y, obj = document.getElementById(layerID);
	
	if(document.documentElement || document.body.offsetWidth) {
		
		if(document.documentElement && document.documentElement.offsetWidth && document.documentElement.offsetWidth > 0) {
	    	x = document.documentElement.offsetWidth;
	    	y = document.documentElement.offsetHeight;
	  	} else {
	    	x = document.body.offsetWidth;
	    	y = document.body.offsetHeight;
	  	}
	} else {
		x = top.innerWidth;
	  	y = top.innerHeight;
	}
	
	obj.style.left = Math.floor((x-obj.offsetWidth) / 2) + "px";
	obj.style.top = Math.floor((y-obj.offsetHeight) / 2) + "px";
			
	
	ShowDiv(layerID);
}


// -----------------------------------------------------------------------------
// Move the layer to a specified position.
//  layerName : The layer name.
//  x         : The x-coordinate.
//  y         : The y-coordinate.
// -----------------------------------------------------------------------------
function MoveLayerTo(layerName, x, y) {
  var lyr = FindObj(layerName);
  var isMinNS4 = (navigator.appName.indexOf("Netscape") >= 0 &&
                  parseFloat(navigator.appVersion) >= 4) ? 1 : 0;
  var isMinIE4 = (document.all) ? 1 : 0;

  if (isMinNS4) {
    if (lyr.style) {
      if (lyr.style.left) {
        lyr.style.left = x;
        lyr.style.top  = y;
      } else {
        lyr.moveTo(x, y);
      }
    } else {
      lyr.moveTo(x, y);
    }
  } else if (isMinIE4) {
    lyr.style.left = x;
    lyr.style.top  = y;
  }
}

// -----------------------------------------------------------------------------
// Dynamic change the content of a layer.
//  divName : The name of layer.
//  content : The content.
// -----------------------------------------------------------------------------
function ChangeDivContent(divName, content) {
  if (document.getElementById) {
    if(document.getElementById(divName)) {
    document.getElementById(divName).innerHTML = content;
    }
  } else if (document.all) {
    var divLayer = eval("document.all." + divName);
    divLayer.innerHTML = content;
  } else if (document.layers) {
    var divLayer = eval("document.layers." + divName + ".document");
    divLayer.open();
    divLayer.write(content);
    divLayer.close();
  }
  return(false);
}

// -----------------------------------------------------------------------------
// Get the content of a layer.
//  divName : The name of layer.
//  RETURN  : The content.
// -----------------------------------------------------------------------------
function GetDivContent(divName) {
  if (document.getElementById) {
    return document.getElementById(divName).innerHTML;
  } else if (document.all) {
    var divLayer = eval("document.all." + divName);
    return divLayer.innerHTML;
  } else if (document.layers) {
    var divLayer = eval("document.layers." + divName + ".document");
    return("");
  }
}

// -----------------------------------------------------------------------------
// Show a layer.
//  divName : The name of layer.
// -----------------------------------------------------------------------------
function ShowDiv(divName) {
  var divObj = FindObj(divName);

  if (document.getElementById) {
    divObj.style.display= "";
  } else if (document.all) {
    divObj.style.display= "";
  } else if (document.layers) {
    divObj.style.display= "";
  }
}


function ShowElement(elementName) {
  var eleObj = FindObj(elementName);

  if (document.getElementById) {
    eleObj.style.display = "";
  } else if (document.all) {
    eleObj.style.display = "";
  } else if (document.layers) {
    eleObj.style.display = "";
  }
}



// -----------------------------------------------------------------------------
// Hide a layer.
//  divName : The name of layer.
// -----------------------------------------------------------------------------
function HideDiv(divName) {
  var divObj = FindObj(divName);

  if (document.getElementById) {
    divObj.style.display = "none";
  } else if (document.all) {
    divObj.style.display = "none";
  } else if (document.layers) {
    divObj.style.display = "none";
  }
}


function HideElement(elementName) {
	var eleObj = FindObj(elementName);

  	if (document.getElementById) {
        eleObj.style.display = "none";
 	} else if (document.all) {
        eleObj.style.display = "none";
  	} else if (document.layers) {
        eleObj.style.display = "none";
  	}
}


// -----------------------------------------------------------------------------
// Get the visibility of a layer
//  layerName : The name of layer.
//  RETURN    : The visibility of the layer in "visible" or "hidden".
// -----------------------------------------------------------------------------
function GetDivVisibility(layerName) {
  var layer = FindObj(layerName);
  var isMinNS4 = (navigator.appName.indexOf("Netscape") >= 0 &&
                  parseFloat(navigator.appVersion) >= 4) ? 1 : 0;
  var isMinIE4 = (document.all) ? 1 : 0;

  if (isMinNS4) {
    if (layer.visibility == "show")
      return "visible";
    if (layer.visibility == "hide")
      return "hidden";
    if (layer.style) {
      return layer.style.visibility;
    }
    return layer.visibility;
  }
  if (isMinIE4)
    return layer.style.visibility;
  return "";
}

// -----------------------------------------------------------------------------
// Open a popup window which position is at the central.
//  url     : The URL of that window going to load.
//  name    : The window name.
//  popW    : The width of window.
//  popH    : The height of window.
//  feature : The additional features of that window.
// -----------------------------------------------------------------------------
function OpenCenteredPopup(url, name, popW, popH, feature) {
  var w = 1024;
  var h = 768;

  if (document.all || document.layers) {
    w = screen.availWidth;
    h = screen.availHeight;
  }

  var leftPos = (w-popW)/2;
  var topPos = (h-popH)/2;

  var popupWin = window.open(url,name,(feature ? (feature + ',') : '') + 'width=' + popW + ',height=' + popH + ',top=' + topPos + ',left=' + leftPos);
  popupWin.focus();
  return(false);
}

// -----------------------------------------------------------------------------
// Create a cookie entry.
//  Name    : The cookie name.
//  Value   : The cookie value.
//  Expiry  : The specified expiry date.
//  Path    : The specified path.
//  Domain  : The specified domain.
//  Secure  : Whether is secure or not.
// -----------------------------------------------------------------------------
function MakeCookie(Name, Value, Expiry, Path, Domain, Secure) {
  if (Expiry != null && !isNaN(Expiry)) {
    var datenow = new Date();
    datenow.setTime(datenow.getTime() + Math.round(86400000 * Expiry));
    Expiry = datenow.toGMTString();
  }

  Expiry = (Expiry) ? '; expires='+Expiry : '';
  Path = (Path)?'; path='+Path:'';
  Domain = (Domain) ? '; domain='+Domain : '';
  Secure = (Secure) ? '; secure' : '';
  document.cookie = Name + '=' + escape(Value) + Expiry + Path + Domain + Secure;
}

// -----------------------------------------------------------------------------
// Read a cookie entry.
//  name    : The cookie name.
//  RETURN  : The cookie value.
// -----------------------------------------------------------------------------
function ReadCookie(name) {
  var cookies = ' ' + document.cookie;

  if (cookies.indexOf(' ' + name + '=') == -1) return null;
  var start = cookies.indexOf(' ' + name + '=') + (name.length + 2);
  var finish = cookies.substring(start,cookies.length);
  finish = (finish.indexOf(';') == -1) ? cookies.length : start + finish.indexOf(';');
  return unescape(cookies.substring(start, finish));
}

// -----------------------------------------------------------------------------
// Find the inner height within the browser window.
//  RETURN   : The inner height within the browser window.
// -----------------------------------------------------------------------------
function GetInnerHeight() {
  if (window.innerHeight) {
    return(window.innerHeight);
  } else if (document.body && document.body.clientHeight) {
    return(document.body.clientHeight);
  } else {
    return(700);
  }
}

// -----------------------------------------------------------------------------
// Find the inner width within the browser window.
//  RETURN   : The inner width within the browser window.
// -----------------------------------------------------------------------------
function GetInnerWidth() {
  if (window.innerWidth) {
    return(window.innerWidth);
  } else if (document.body && document.body.clientWidth) {
    return(document.body.clientWidth);
  } else {
    return(1000);
  }
}

// -----------------------------------------------------------------------------
// Remove all options from a select list.
//  from     : The select object which going to remove all options.
// -----------------------------------------------------------------------------
function RemoveAllOptions(from) {
  for (var i=(from.options.length-1); i>=0; i--) {
    from.options[i] = null;
  }
  from.selectedIndex = -1;
}

// -----------------------------------------------------------------------------
// Add an option to a select list.
//  obj      : The select object which going to add an option.
//  text     : The text label of that option.
//  value    : The value of that option.
//  selected : Whether it is pre-selected or not.
// -----------------------------------------------------------------------------
function AddOption(obj, text, value, selected) {
  if (obj!=null && obj.options!=null) {
    obj.options[obj.options.length] = new Option(text, value, false, selected);
  }
}

// -----------------------------------------------------------------------------
// Remove an array element at a given index
//  ary     : The array.
//  idx     : The index of element in array going to be removed.
// -----------------------------------------------------------------------------
function RemoveArrayElement(ary, idx) {
  var length = ary.length;
  if (idx>=length || idx<0) {
    return;
  }
  for (var i=idx; i<length-1; i++) {
    ary[i] = ary[i+1];
  }
  ary.length--;
}


function FindObj(n, d) {
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=FindObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}


function SetTableRowColor(theRow, theRowNum, theAction, theRecordID, theAlterRowFlag) {
  if (!LIST_EFFECT_ENABLE) {
    return;
  }

  var theCells = null;
  var thePointerColor = "#B5D2EA";
  var theMarkColor = "#FFCC99";
  var theDefaultColor = "#EEEEEE";
  if (theRowNum % 2 == 0 || theAlterRowFlag) {
    theDefaultColor = "#FFFFFF";
  }

  // 1. Pointer and mark feature are disabled or the browser can't get the
  //  row -> exits
  if ((thePointerColor == '' && theMarkColor == '')
    || typeof(theRow.style) == 'undefined') {
    return false;
  }

  // 2. Gets the current row and exits if the browser can't get it
  if (typeof(document.getElementsByTagName) != 'undefined') {
    theCells = theRow.getElementsByTagName('td');
  }
  else if (typeof(theRow.cells) != 'undefined') {
    theCells = theRow.cells;
  }
  else {
    return false;
  }

  // 3. Gets the current color...
  var rowCellsCnt  = theCells.length;
  var domDetect  = null;
  var currentColor = null;
  var newColor   = null;
  // 3.1 ... with DOM compatible browsers except Opera that does not return
  //     valid values with "getAttribute"
  if (typeof(window.opera) == 'undefined'
    && typeof(theCells[0].getAttribute) != 'undefined') {
    currentColor = theCells[0].getAttribute('bgcolor');
    domDetect  = true;
  }
  // 3.2 ... with other browsers
  else {
    currentColor = theCells[0].style.backgroundColor;
    domDetect  = false;
  } // end 3

  // 4. Defines the new color
  // 4.1 Current color is the default one
  if (!currentColor || currentColor == ''
    || currentColor.toLowerCase() == theDefaultColor.toLowerCase()) {
    if (theAction == 'over' && thePointerColor != '') {
      newColor        = thePointerColor;
    }
    else if (theAction == 'click' && theMarkColor != '') {
      newColor        = theMarkColor;
      g_marked_row[theRowNum] = true;
      ToggleDefaultCheckbox(theRecordID);
    }
  }
  // 4.1.2 Current color is the pointer one
  else if (currentColor.toLowerCase() == thePointerColor.toLowerCase()
       && (typeof(g_marked_row[theRowNum]) == 'undefined' || !g_marked_row[theRowNum])) {
    if (theAction == 'out') {
      newColor        = theDefaultColor;
    }
    else if (theAction == 'click' && theMarkColor != '') {
      newColor        = theMarkColor;
      g_marked_row[theRowNum] = true;
      ToggleDefaultCheckbox(theRecordID);
    }
  }
  // 4.1.3 Current color is the marker one
  else if (currentColor.toLowerCase() == theMarkColor.toLowerCase()) {
    if (theAction == 'click') {
      newColor        = (thePointerColor != '')
                  ? thePointerColor
                  : theDefaultColor;
      g_marked_row[theRowNum] = (typeof(g_marked_row[theRowNum]) == 'undefined' || !g_marked_row[theRowNum])
                  ? true
                  : null;
      ToggleDefaultCheckbox(theRecordID);
    }
  } // end 4

  // 5. Sets the new color...
  if (newColor) {
    var c = null;
    // 5.1 ... with DOM compatible browsers except Opera
    if (domDetect) {
      for (c = 0; c < rowCellsCnt; c++) {
        theCells[c].setAttribute('bgcolor', newColor, 0);
      } // end for
    }
    // 5.2 ... with other browsers
    else {
      for (c = 0; c < rowCellsCnt; c++) {
        theCells[c].style.backgroundColor = newColor;
      }
    }
  } // end 5

  return true;
} // end of the 'SetTableRowColor()' function



// --------------------
// Table manipulation
// used with tbody
// --------------------
function addTableRow(tableElement, cellFuncs, rowID, bgColor) {
	var tbody = document.getElementById(tableElement).tBodies[0]; 
	var tr = document.createElement("TR");
	tr.id = rowID;
	tr.style.background = bgColor;
		
	for (var j = 0; j < cellFuncs.length; j++) {
        var func = cellFuncs[j];
        var td;

        if (typeof func == "string") {
            td = document.createElement("td");
            var text = document.createTextNode(func);
            td.appendChild(text);            
        } else {
            var reply = func(j);
            
            if (isHtmlElement(reply, "td")) {            
                td = reply;
            } else if (isHtmlElement(reply)) {
                td = document.createElement("td");
                td.appendChild(reply);
            } else {
                td = document.createElement("td");
                td.innerHTML = reply;
            }            
        }
        
        tr.appendChild(td);
    }   
   
   tbody.appendChild(tr);
}

function addTableRow1(tableElement, cellFuncs, rowID, rowClass) {
	var tbody = document.getElementById(tableElement).tBodies[0]; 
	var tr = document.createElement("TR");
	tr.id = rowID;
	tr.className = rowClass;
		
	for (var j = 0; j < cellFuncs.length; j++) {
        var func = cellFuncs[j];
        var td;

        if (typeof func == "string") {
            td = document.createElement("td");
            var text = document.createTextNode(func);
            td.appendChild(text);            
        } else {
            var reply = func(j);
            
            if (isHtmlElement(reply, "td")) {            
                td = reply;
            } else if (isHtmlElement(reply)) {
                td = document.createElement("td");
                td.appendChild(reply);
            } else {
                td = document.createElement("td");
                td.innerHTML = reply;
            }            
        }
        
        tr.appendChild(td);
    }   
   
   tbody.appendChild(tr);
}


function removeTableRow(tableElement, rowID) {
	var row = document.getElementById(rowID);
	var table = document.getElementById(tableElement);
	var tbody = table.getElementsByTagName('tbody')[0]; 
	//tbody.removeChild(row);
	table.removeChild(row);
}


function removeTableRows(tableElement) {
	var t = document.getElementById(tableElement);
	var tbody = t.getElementsByTagName('tbody')[0]; 
	
	while (tbody.childNodes.length > 0) {
        tbody.removeChild(tbody.firstChild);
    }
}



function deleteCurrentRow(obj) {

	var delRow = obj.parentNode.parentNode;
	var tbl = delRow.parentNode.parentNode;
	var rIndex = delRow.sectionRowIndex;
	var rowArray = new Array(delRow);
	deleteRows(rowArray);
}


function deleteRows(rowObjArray) {	
	for (var i=0; i<rowObjArray.length; i++) {
		var rIndex = rowObjArray[i].sectionRowIndex;
		rowObjArray[i].parentNode.deleteRow(rIndex);
	}	
}



function changeTableRowColors(tableID, rowClass1, rowClass2) { 
	var tableObj = document.getElementById(tableID);
	var tBody = tableObj.getElementsByTagName('TBODY');

	var iRowClass1 = "tableRow1";
	var iRowClass2 = "tableRow2";
	

	
	if (rowClass1 != null) {
		iRowClass1 = rowClass1;
	}
	
	if (rowClass2 != null) {
		iRowClass2 = rowClass2;
	}
	

	if(tBody){
		var rows = tBody[0].getElementsByTagName('TR');
	}else{
		var rows = tableObj.getElementsByTagName('TR');
	}
	
	for(var no=0;no<rows.length;no++){
		if (no % 2 == 0) {			
			rows[no].className = iRowClass1;			
		} else {
			rows[no].className = iRowClass2;
		}
	}
	
}

function resetTableRowSequence(tableID, ids) {
	var tableObj = document.getElementById(tableID);
	var tBody = tableObj.getElementsByTagName('TBODY');

	
	if(tBody){
		var rows = tBody[0].getElementsByTagName('TR');
	}else{
		var rows = tableObj.getElementsByTagName('TR');
	}
	
	for(var no = 0; no < rows.length; no++){
		if (ids == null || ids.length == 0) {		
			rows[no].id = no;
		} else {
			rows[no].id = ids[no];
		}
	}
}




// ----------------
// misc functions
// ----------------
function isHtmlElement(ele, nodeName) {

    if (ele == null || typeof ele != "object" || ele.nodeName == null) {
        return false;
    }

    if (nodeName != null) {
        var test = ele.nodeName.toLowerCase();

        if (typeof nodeName == "string") {
            return test == nodeName.toLowerCase();
        }

        if (isArray(nodeName)) {
            var match = false;
            for (var i = 0; i < nodeName.length && !match; i++) {
                if (test == nodeName[i].toLowerCase()) {
                    match =  true;
                }
            }


            return match;
        }       
       
        return false;
    }

    return true;
}


function isArray(data) {
    return (data && data.join) ? true : false;
}



function trim(t){
  if(!t)return '';
  if(typeof(t)!='string')return t;
  while(t.charAt(0).match(_jp_re_ws))t=t.substr(1);
  while(t.charAt(t.length-1).match(_jp_re_ws))t=t.substring(0,t.length-1);
  return t;
}

function endsWith(str,end) {
  if (str && end) {
    sLen = str.length;
    eLen = end.length;
    if (eLen < sLen) {
      return (str.substring(sLen-eLen) == end);
    }
  }
  return false;
}

function startsWith(str,pre) {
  if (str && pre) {
    sLen = str.length;
    pLen = pre.length;
    if (pLen < sLen) {
      return (str.substring(0,pLen)==pre);
    }
  }
  return false;
}






function newRadioBox(name, value) {
	var radioBox = document.createElement("INPUT");
	//radioBox.type = "radio";
	radioBox.setAttribute("type", "radio");
	radioBox.setAttribute("name", name);
	radioBox.setAttribute("value", value);
			
	return radioBox;
}

function newOption(value, label) {
	var opt = document.createElement("OPTION");
	opt.setAttribute("value", value);
	
	
	
	var text = document.createTextNode(label);
	opt.appendChild(text);
	
	return opt;
}



// -------------------------------------
// Comvert Form to Query String
// -------------------------------------
function formData2QueryString(docForm) {

	var submitContent = '';
	var formElem;
	var lastElemName = '';
  
	for (i = 0; i < docForm.elements.length; i++) {    
    	formElem = docForm.elements[i];
    
    	switch (formElem.type) {
			// Text fields, hidden form elements
      		case 'text':
      		case 'hidden':
	      	case 'password':
	      	case 'textarea':
	      	case 'select-one':
       			submitContent += formElem.name + '=' + escape(formElem.value) + '&'
        		break;
        
      		// Radio buttons
      		case 'radio':
        		if (formElem.checked) {
          			submitContent += formElem.name + '=' + escape(formElem.value) + '&'
        		}
        		break;
        
      		// Checkboxes
      		case 'checkbox':
        		if (formElem.checked) {
          			// Continuing multiple, same-name checkboxes
          			if (formElem.name == lastElemName) {
            			// Strip of end ampersand if there is one
            			if (submitContent.lastIndexOf('&') == submitContent.length-1) {
              				submitContent = submitContent.substr(0, submitContent.length - 1);
            			}
            			
            			// Append value as comma-delimited string
            			submitContent += ',' + escape(formElem.value);
          			} else {
            			submitContent += formElem.name + '=' + escape(formElem.value);
          			}
          			
          			submitContent += '&';
          			lastElemName = formElem.name;
        		}
        		break;
        		        	        
    	}
  	}
  		
  	// Remove trailing separator
  	submitContent = submitContent.substr(0, submitContent.length - 1);
  	
  	return submitContent;
}




function setSessionVariable(theURL, param, value, callbackFunction) {
	var xmlHttpReq = false;
    var self = this;
    // Mozilla/Safari
    if (window.XMLHttpRequest) {
        self.xmlHttpReq = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
    	// IE
        self.xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    self.xmlHttpReq.open('POST', theURL, true);
    self.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    self.xmlHttpReq.onreadystatechange = function() {
        if (self.xmlHttpReq.readyState == 4) {
            eval(callbackFunction);
        }
    }
    
    
    var qry = 'param=' + escape(param) + '&value=' + escape(value);    
    
    self.xmlHttpReq.send(qry);
}


function isNull(obj) {
	if (obj == null || obj == 'indefined' || !obj || obj == 'undefined' || obj == 'null') {
		return true;
	} else {
		return false;
	}
}

function round_decimals(original_number, decimals) {
	if (isNull(decimals)) {
		decimals = 0;
	}

    var result1 = original_number * Math.pow(10, decimals)
    var result2 = Math.round(result1)
    var result3 = result2 / Math.pow(10, decimals)
    return pad_with_zeros(result3, decimals)
}

function pad_with_zeros(rounded_value, decimal_places) {

    // Convert the number to a string
    var value_string = rounded_value.toString()
    
    // Locate the decimal point
    var decimal_location = value_string.indexOf(".")

    // Is there a decimal point?
    if (decimal_location == -1) {
        
        // If no, then all decimal places will be padded with 0s
        decimal_part_length = 0
        
        // If decimal_places is greater than zero, tack on a decimal point
        value_string += decimal_places > 0 ? "." : ""
    }
    else {

        // If yes, then only the extra decimal places will be padded with 0s
        decimal_part_length = value_string.length - decimal_location - 1
    }
    
    // Calculate the number of decimal places that need to be padded with 0s
    var pad_total = decimal_places - decimal_part_length
    
    if (pad_total > 0) {
        
        // Pad the string with 0s
        for (var counter = 1; counter <= pad_total; counter++) 
            value_string += "0"
        }
    return value_string
}



function isMessageKey(str) {
	if (str.substring(0, 1) == "{" &&  str.substring(str.length-1) == "}") {	
		return true;
	} else {
		return false; 
	}
}

function trimNull(msg) {
    if (msg == null || ('|' + msg + '|') == '|null|' || ('|' + msg + '|') == '||') {
        return "";
    } else {
        return msg;
    }
}


function trimx(stringToTrim) {
    return stringToTrim.replace(/^\s\s*/, '').replace(/\s\s*$/, '');

	//return stringToTrim.replace(/^\s+|\s+$/g,"");
}
function ltrim(stringToTrim) {
	return stringToTrim.replace(/^\s+/,"");
}
function rtrim(stringToTrim) {
	return stringToTrim.replace(/\s+$/,"");
}



function lpad(str, len, padWith) {    
    var s = str + '';
        
    var l = len - s.length;    

    for(var i = 0; i < l; i++) {
        s = padWith + s;
    }
    
    
    
    return s;

}
    
function rpad(str, len, padWith) {
    var s = str + '';

    var l = len - s.length;
    for(var i = l; i > 0; i--) {            
        s = s + padWith;
    }
    
    return s;
}


function checkNumber(str) {
    var x = str;
    var anum= /(^\d+$)|(^\d+\.\d+$)/
    
    if (anum.test(x)) {
        return true;
    } else {     
        return false;
    }

    return true;
}

function isNumber(str) {
    if (trimx(str) == '') {
        return false;
    }
    
    var re = /^[-]?\d*\.?\d*$/;
    str = str.toString();
    if (!str.match(re)) {        
        return false;
    }
    return true;
}

function isInteger(s) {
    var i;
    for (i = 0; i < s.length; i++) {   
        // Check that current character is number.
        var c = s.charAt(i);
        
        if (((c < "0") || (c > "9"))) {
            return false;
        }
    }
    // All characters are numbers.
    return true;

}

function isPercentage(str) {
    
    var re = /^[-]?\d*\.?\d*[%]?$/;
    str = str.toString();
   
   	var result = false;
    if (!str.match(re)) {      
        result = false;
    } else {        
    	result = true;
    }            
    
    return result;

}


function isCurrency(str, decLen, decSep, groupSep){
	var e=null;
	var f=-1;
	
	if(str.length<=0) 
		return false;
		
	for(i=0;i<str.length;i++){
		e=str.charAt(i);
		
		if((e>='0')&&(e<='9')) 
			continue;
			
		if(e==groupSep){
			if((f!=-1)&&(i>f)) 
				return false;
				
			continue;
		}
		
		if(e==decSep){
			if(decLen==0) 
				return false;
				
			if((decLen!=-1)&&(i<str.length-decLen-1)) 
				return false;
				
			if(f!=-1) 
				return false;
				
			f=i;
			
			continue;
		}
		
		if(((e=='+')||(e=='-'))&&(i==0)) 
			continue;
			
		return false;
	}
	
	return true;
}

function checkEmailAddress(emailStr) {
   if (emailStr.length == 0) {
       return true;
   }
   var emailPat=/^(.+)@(.+)$/;
   var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";
   var validChars="\[^\\s" + specialChars + "\]";
   var quotedUser="(\"[^\"]*\")";
   var ipDomainPat=/^(\d{1,3})[.](\d{1,3})[.](\d{1,3})[.](\d{1,3})$/;
   var atom=validChars + '+';
   var word="(" + atom + "|" + quotedUser + ")";
   var userPat=new RegExp("^" + word + "(\\." + word + ")*$");
   var domainPat=new RegExp("^" + atom + "(\\." + atom + ")*$");
   var matchArray=emailStr.match(emailPat);
   if (matchArray == null) {
       return false;
   }
   var user=matchArray[1];
   var domain=matchArray[2];
   if (user.match(userPat) == null) {
       return false;
   }
   var IPArray = domain.match(ipDomainPat);
   if (IPArray != null) {
       for (var i = 1; i <= 4; i++) {
          if (IPArray[i] > 255) {
             return false;
          }
       }
       return true;
   }
   var domainArray=domain.match(domainPat);
   if (domainArray == null) {
       return false;
   }
   var atomPat=new RegExp(atom,"g");
   var domArr=domain.match(atomPat);
   var len=domArr.length;
   if ((domArr[domArr.length-1].length < 2) ||
       (domArr[domArr.length-1].length > 3)) {
       return false;
   }
   if (len < 2) {
       return false;
   }
   return true;
}


/*
function isDate(input){
    var validformat=/^\d{4}\-\d{2}\-\d{2}$/; //Basic check for format validity
    
    var returnval=false;
    if (!validformat.test(input.value)) {
        //alert("Invalid Date Format. Please correct and submit again.")
        returnval = false;
    } else { //Detailed check for valid date ranges
        var yearfield=input.value.split("-")[0];
        var monthfield=input.value.split("-")[1];
        var dayfield=input.value.split("-")[2];
        
        var dayobj = new Date(yearfield, monthfield-1, dayfield);
        
        if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield)) {
            //alert("Invalid Day, Month, or Year range detected. Please correct and submit again.")
            returnval = false;
        } else {
            returnval=true
        }
    }
    
    if (returnval==false) {
        input.select();
    }
    
    return returnval;
}
*/


function setContentTableRowColor(tname) {
    var theTable = document.getElementById(tname);	
    var theBody = theTable.getElementsByTagName('tbody')[0];

    var rs = theBody.rows;
    var i;
    for (i=0; i<rs.length; i++) {
    	if (i % 2 == 0) {
    		rs[i].style.backgroundColor = "#FFFFFF";
    	} else {
    		rs[i].style.backgroundColor = "#F7F7F7";
        }
    }
}
  
// -------------------------------------
// Add the onload event
// -------------------------------------
function addOnloadEvent(fnc) {  
    if ( typeof window.addEventListener != "undefined" ) {
            window.addEventListener( "load", fnc, false );  
    } else {
    	if ( typeof window.attachEvent != "undefined" ) {    
                window.attachEvent( "onload", fnc );  
    	}  else {   
                if ( window.onload != null ) {      
                    var oldOnload = window.onload;      
                    window.onload = function ( e ) {        
                        oldOnload(e);
                        window[fnc]();      
                    };    
                } else {
                    window.onload = fnc;  
                }
    	}
    }
}
 
function stringToDate(_date, _format, _delimiter)
{
	var formatLowerCase =_format.toLowerCase();
	var formatItems = formatLowerCase.split(_delimiter);
	var dateItems = _date.split(_delimiter);
	var monthIndex = jQuery.inArray("mm", formatItems);
	var dayIndex = jQuery.inArray("dd", formatItems);
	var yearIndex = jQuery.inArray("yyyy", formatItems);
	var month = parseInt(dateItems[monthIndex], '10');
	month -= 1;
	var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
	return formatedDate;
}
    
 // If date1 after date2 then return true
function isDateAfter(date1Str, date2Str, dateFormat, delimiter) {
	 var date1 = stringToDate(date1Str, dateFormat, delimiter);
	 var date2 = stringToDate(date2Str, dateFormat, delimiter);
	 return date1 > date2;
 }

function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}


function isFirefox() {
	var ua = window.navigator.userAgent;
	return ua.toLowerCase().indexOf('firefox') > -1;
}

function isWindowsXP() {
	var ua = window.navigator.userAgent.toLowerCase();
	return ua.indexOf('windows nt 5.1') > 0;
}

function playVideo(title, flvFile, mp4File) {
	var ieVer = detectIE();
	alert(ieVer);
	if (ieVer && ieVer < 12) {
		window.open('/dse-cms-portlet/VideoPlayer?vp=' + flvFile + "&ts=1464572469501&title=" + title, "_blank");
	} else {
		window.open(mp4File + "?ts=1464572469501", title);
	}
}

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function scrollToTop() {
	$('body,html').animate({scrollTop: 0},500);
}

function scrollToPortletTop() {
	$('body,html').animate({scrollTop: $('#portletPageTitle').offset().top},500);
}