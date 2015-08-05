$.fn.metaSearch = function(term, url) {
if (document.cookie.indexOf('cookieMetaSearch') > -1) { 
var cookieMetaSearch = document.cookie.replace(/(?:(?:^|.*;\s*)cookieMetaSearch\s*\=\s*([^;]*).*$)|^.*$/, "$1"); 
}
else { var cookieMetaSearch  = url; 
}
$(term).each(function() {
$(this).html('<a href="//' + cookieMetaSearch + '/' + $(this).next().text().replace(/[#$]/,'') + '" target="_blank">' + $(this).text() + '</a>'); 
});
$(this).keydown(function(e) {
if(e.which == 13 && $(this).val().substring(0, 1) == '+' ) {
var val = $(this).val().replace('+', '');
if (val == 'f') {
var url = 'facebook.com/hashtag'; 
}
else if (val == 'g') {
var url = 'plus.google.com/explore'; 
}
else if (val == 'i') {
var url = 'instagram.com/explore/tags'; 
}
else if (val == 'p') {
var url = 'pinterest.com/explore'; 
}
else if (val == 't') {
var url = 'twitter.com/hashtag'; 
}
else if (val == 't.') {
var url = 'tumblr.com/tagged'; 
}
else { 
var url = val; 
}
$(term).each(function() {
$('a', this).attr('href','//' + url + '/' +  $(this).next().text().replace(/[#$]/,''));
});
document.cookie = 'cookieMetaSearch=' + url + '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
var domain = url.replace(/\/.*$/, ''); 
if(!$('.metaSearch-message').length) {
$('body').append('<span class="metaSearch-message">Buscando con ' + domain + '</span>'); 
}
else { 
$('.metaSearch-message').text('Buscando con ' + domain).stop().fadeIn(100); 
}
$('.metaSearch-message').fadeOut(2500);
$(this).val(''); 
} 
}); 
return this; 
};
