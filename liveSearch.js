// Call plugin
$('input').focus().liveSearch('table');

// Plugin
$.fn.liveSearch = function(table) {
$(this).on('keyup', function() {
var val = $.trim($(this).val()).replace(/Ã¡/g, 'a').replace(/Ã©/g, 'e').replace(/Ã­/g, 'i').replace(/Ã³/g, 'o').replace(/Ãº/g, 'u').toLowerCase();
var data = $(table).find('td');
data.parent().show().removeClass('true'); 
data.filter(':visible').each(function() {
var text = $(this).text().replace(/Ã¡/g, 'a').replace(/Ã©/g, 'e').replace(/Ã­/g, 'i').replace(/Ã³/g, 'o').replace(/Ãº/g, 'u').toLowerCase();
if(text.indexOf(val) > -1) {
$(this).parent().addClass('true');
} 
});
data.parent().not('.true').hide();
});
return this; 
}; 
