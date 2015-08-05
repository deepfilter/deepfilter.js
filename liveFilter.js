$.fn.liveFilter = function(column) {
$('li:first-child').addClass('true li-underline');
$(column).each(function() {
if (!($(this).text() == 'Hashtags')) {
$(this).parent().hide();
} 
});
$(this).on('click', function() {
var $this_text = $(this).text();
$('li').removeClass('true li-underline');
$(this).addClass('true li-underline');
$('tr').show();
$(column).each(function() {
if (!($(this).text() == $this_text)) {
$(this).parent().hide(); 
} 
}); 
});
return this; 
};
