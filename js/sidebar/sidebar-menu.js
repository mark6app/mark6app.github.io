var popupBox;
var store;
var popupStore;
var allMarkers=[];

function flyToArea(id) {
	findStoreById(id);
	var currentZoom = 17;
	if (map.getZoom() > 17) {
		currentZoom = map.getZoom();
	}
	map.flyTo({
		center: store.geometry.coordinates,
		zoom: currentZoom,
		bearing: 0,
		speed: 1,
		curve: 1.2, 
		easing: function(t) {
			return t; 
		},
		essential: true
	});
}

function showPopup(theStore) {
	if ($(window).width() < 768) { // if is small screen then
		window.location.href = "#mapPanel";
	}
	if (popupBox != null)
		popupBox.remove();
	
	popupBox = new mapboxgl.Popup({closeButton: false, anchor:'bottom', offset: 25}).setLngLat(theStore.geometry.coordinates);
	popupBox.setHTML(theStore.properties.message).addTo(map);
}


function showPopupById(id) {
	findPopupStoreById(id);
	showPopup(store);
}


function locateStore(theStore) {
	window.location.href = "#mapPanel";
	var linkId = '#link_' + theStore.properties.id;

	var linkItem = $(linkId);
	var item = linkItem.parent().parent();
	
	var parent = item.parents('ul').first();
	var ul = parent.find('ul:visible').slideUp(200);
	ul.removeClass('menu-open');
	var parent_li = item.parent("li");
	item.slideDown(0, function() {
		item.addClass('menu-open');
		parent.find('li.active').removeClass('active');
		parent_li.addClass('active');
		
		linkItem.parent().addClass('active');
		showPopup(theStore);
	});
	
	
}

function findStoreById(id) {
	geojson.features.forEach(function(theStore) {
		
		if (theStore.properties.id == id) {
			store = theStore;
		}
	});
}

function findPopupStoreById(id) {
	geojson.features.forEach(function(theStore) {
		
		if (theStore.properties.id == id) {
			popupStore = theStore;
		}
	});
}

function createMarkers(targetId) {
	var targetLocation = null;
	var targetPos = null;
	geojson.features.forEach(function(marker) {
		var el = document.createElement('div');
		el.id = marker.properties.id + '_' + marker.type;
		if (marker.type == 'R')
			el.className = 'marker-restaurant';
		else if (marker.type == 'S')
			el.className = 'marker-shop';
		else if (marker.type == 'V' || marker.type == 'T')
			el.className = 'marker-scenic';


		el.addEventListener('click', function(e) {
			locateStore(marker);
			e.stopPropagation(); // prevent click twice
		});
		 
		if (marker.properties.id == targetId) {
			targetLocation = document.createElement('div');
			targetLocation.id = marker.properties.id + '_' + marker.type;
			targetLocation.className = 'marker-location';
			targetPos = marker.geometry.coordinates;
		} else {
			var oneMarker = new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
			allMarkers.push(oneMarker);
		}
	});
	if (targetLocation != null) {
		var targetMarker = new mapboxgl.Marker(targetLocation).setLngLat(targetPos).addTo(map);
		allMarkers.push(targetMarker);
	}
	
}

$.sidebarMenu = function(menu) {
  var animationSpeed = 300,
    subMenuSelector = '.sidebar-submenu',
	subMenuItemSelector = '.submenu-item';

  $(menu).on('click', 'li a', function(e) {
	  
    var $this = $(this);
    var checkElement = $this.next();

    if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
		checkElement.slideUp(animationSpeed, function() {
			checkElement.removeClass('menu-open');
		});
		checkElement.parent("li").removeClass("active");
    }

    //If the menu is not visible
    else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
		//Get the parent menu
		var parent = $this.parents('ul').first();
		//Close all open menus within the parent
		var ul = parent.find('ul:visible').slideUp(animationSpeed);
		//Remove the menu-open class from the parent
		ul.removeClass('menu-open');
		//Get the parent li
		var parent_li = $this.parent("li");

		//Open the target menu and add the menu-open class
		checkElement.slideDown(animationSpeed, function() {
			//Add the class active to the parent li
			checkElement.addClass('menu-open');
			parent.find('li.active').removeClass('active');
			parent_li.addClass('active');
		});
		
		
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is(subMenuSelector)) {
		e.preventDefault();
    }
    
	var submenuItem = $this.parent();
	if (submenuItem.is(subMenuItemSelector)) {
		submenuItem.parent().find('li.active').removeClass('active');
		submenuItem.addClass('active');
	}

  });
  
  
	$(menu).on('mouseover', 'li a', function(e) {
		var $this = $(this);
		var submenuItem = $this.parent();
		if (submenuItem.is(subMenuItemSelector)) {
			//console.log(allMarkers.length);
			var hoverId = $this.attr('id').substring(5);
			for (var i = 0; i<allMarkers.length; i++) {
				allMarkers[i].remove();
			}
			createMarkers(hoverId);
		}
	});
	
	$(menu).on('mouseout', 'li a', function(e) {
		var $this = $(this);
		var submenuItem = $this.parent();
		if (submenuItem.is(subMenuItemSelector)) {
			//console.log("hoverId=" + hoverId);
			for (var i = 0; i<allMarkers.length; i++) {
				allMarkers[i].remove();
			}
			createMarkers();
			
		}
	});
}
