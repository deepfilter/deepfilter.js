// Call plugin
$('dl').spoilerSlide();

// Plugin
$.fn.spoilerSlide = function() {
var allPanels = $('dl dd').hide();
$('dl dd:nth-of-type(1)').show().addClass('active');
$('dl> dt > a').click(function(e) {
e.preventDefault();
$this = $(this);
$target =  $this.parent().next();
if(!$target.hasClass('active')){
allPanels.removeClass('active').slideUp("fast");
$target.addClass('active').slideDown("fast");
var index = $this.parent().index();
if(!$this.parent().index() == 0) { 
$('html, body').stop().animate({scrollTop: 80 + index*25 - ((index-1)*2)}, 200); 
} 
}
return false; 
}); 
};
