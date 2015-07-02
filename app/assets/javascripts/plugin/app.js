/* Author: Nodestar

*/
var selectedBrand = '';
//var selectedCategory = '';
var bigBrandList = $("#big-brand-list");
var productChooser = $("#product-chooser");


$(document).ready(function () {

    //productChooser.find("ul").makeacolumnlists({ cols: 7, colWidth: 140, equalHeight: 'ul', startN: 1, adjustLetterHeading: true });
    //bigBrandList.find("ul").makeacolumnlists({ cols: 8, colWidth: 120, equalHeight: 'ul', startN: 1, adjustLetterHeading: false });

    bigBrandList.hide();

    if (window.location.hash == "#show-brand") {
        showBrands();
    }

    productChooser.hide();
});

var showBrands = function () {
    productChooser.hide();
    bigBrandList.css("visibility", "visible");
    bigBrandList.toggle(0);
};

var showProductChooser = function () {
    bigBrandList.hide();
    productChooser.css("visibility", "visible");
    productChooser.toggle(0);
	};
