$(document).ready(function(){
	isGlutenFiltered = false;
	isNutFiltered = false;
	isVegFiltered = false;

	ratty = [
		{
			colid: "soups", 
			menu: [
				{name: "Shrimp & Roasted Corn Chowder" , classes: ["meat","gluten"] },
				{name: "Tomato Florentine Soup", classes: [] },
				{name: "3 Bean Chili", classes: ["meat"] }
			]
		},
		{
			colid: "dinnerspecial", 
			menu: [
				{name: "Chicken Vindaloo" , classes: ["meat","nuts","gluten"] },
				{name: "Madras Vegetables" , classes: [] }
			]
		}
	];

	function make_menu(menu_obj) {
		for (var i = 0; i < menu_obj.length; i++) {
			colid = "#" + menu_obj[i].colid;
			menu = menu_obj[i].menu;
			for (var j = 0; j < menu.length; j++) {
				el = $("<div>" + menu[j].name + "</div>");
				classes = menu[j].classes;
				for (var k = 0; k < classes.length; k++) {
					el.addClass(classes[k]);
				}
				el.appendTo(colid);
			}
		};
	}

	function filter(filter_name) {
		switch (filter_name) {
			case "gluten":
				if (isGlutenFiltered) {
					$('.gluten').css('opacity', '');
				} else {
					$('.gluten').css('opacity', '.4');
				}
				isGlutenFiltered = !isGlutenFiltered;
				$("#gluten-filter>.selected").fadeToggle();
				break;

			case "nuts":
				if (isNutFiltered) {
					$('.nuts').css('opacity', '');
				} else {
					$('.nuts').css('opacity', '.4');
				}
				isNutFiltered = !isNutFiltered;
				$("#nut-filter>.selected").fadeToggle();
				break;

			case "meat":
				if (isVegFiltered) {
					$('.meat').css('opacity', '');
				} else {
					$('.meat').css('opacity', '.4');
				}
				isVegFiltered = !isVegFiltered;
				$("#veg-filter>.selected").fadeToggle();
				break;

		}

	}

	$("#veg-filter").click(function(e){
        filter("meat");
    });
    $("#nut-filter").click(function(e){
        filter("nuts");
    });
    $("#gluten-filter").click(function(e){
        filter("gluten");
    });

	make_menu(ratty);

});
