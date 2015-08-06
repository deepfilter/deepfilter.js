// Call plugin
$('li').liveFilter('td:nth-child(1), 1');

// Plugin
$.fn.liveFilter = function(column, n) {
var selected = $('li:nth-child(' + n + ')').text();
$('li:nth-child(' + n + ')').addClass('true li-underline');
$(column).each(function() {
if (!($(this).text() == selected)) {
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
