$(document).ready(function(){

  $("#buttonRaleigh").click(function(){
    $("#buttonDurham").toggleAttr("disabled");
    $("#buttonCarboro").toggleAttr("disabled");
    $("#buttonRaleigh").toggleClass("active");
  });

  $("#buttonDurham").click(function(){
    $("#buttonRaleigh").toggleAttr("disabled");
    $("#buttonCarboro").toggleAttr("disabled");
    $("#buttonDurham").toggleClass("active");
  });

  $("#buttonCarboro").click(function(){
    $("#buttonDurham").toggleAttr("disabled");
    $("#buttonRaleigh").toggleAttr("disabled");
    $("#buttonCarboro").toggleClass("active");
  });

});

/*!
* toggleAttr() jQuery plugin
* @link http://github.com/mathiasbynens/toggleAttr-jQuery-Plugin
* @description Used to toggle selected="selected", disabled="disabled", checked="checked" etc…
* @author Mathias Bynens <http://mathiasbynens.be/>
*/
jQuery.fn.toggleAttr = function(attr) {
return this.each(function() {
var $this = $(this);
$this.attr(attr) ? $this.removeAttr(attr) : $this.attr(attr, attr);
});
};
