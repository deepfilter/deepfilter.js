// Call plugin
$('a').lazyFacebook('http://deepfilter.org/hashtags', 3, 'reverse_time', '100%');

// Plugin
$.fn.lazyFacebook = function(url, number, type, pixels) {
$(this).on('click', function(e) {
e.preventDefault();
if (!$('.fb-comments').length) {
$('body').append('<script src="//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.4&appId=397954510406871"></script><div id="fb-root"></div><div class="fb-comments" data-href="' + url + '" data-numposts="' + number + '" data-order-by="' + type + '" data-width="' + pixels + '"></div><div class="fb-comments-loader"></div>');
$('.fb-comments').css('top','-999px');
(function fbComments_loader() {
setTimeout(function () {
if (!$('.fb-comments[fb-xfbml-state="rendered"]').length) {
fbComments_loader(); 
}
else {
$('.fb-comments-loader').hide();
$('.fb-comments').hide().css("top","0").slideToggle('fast').prepend('<div class="fb-comments-close">x</div>');
$('body').append('<script>$(".fb-comments-close").click(function() { $(this).add(".fb-comments").slideToggle("fast"); });</script>'); 
}
}, 0); 
})(); 
}
if ($('.fb-comments[fb-xfbml-state="rendered"]').length) {
$(".fb-comments, .fb-comments-close").slideToggle("fast"); 
} 
}); 
return this; 
};
