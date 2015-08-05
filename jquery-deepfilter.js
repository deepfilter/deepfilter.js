$(document).ready(function() {
$('input').focus().liveSearch('table');
$('input').metaSearch('td:nth-child(3)', 'twitter.com/hashtag');
$('a[href="hashtags"]').lazyFacebook('http://deepfilter.org/hashtags', 3, 'reverse_time', '100%');
$('li').liveFilter('td:nth-child(2)');
$('dl').spoilerSlide();
});

$.fn.liveSearch = function(table) {
$(this).on('keyup', function() {
if(!($(this).val().indexOf("+") > -1)) {
var val = $.trim($(this).val()).replace(/Ã¡/g, 'a').replace(/Ã©/g, 'e').replace(/Ã­/g, 'i').replace(/Ã³/g, 'o').replace(/Ãº/g, 'u').toLowerCase();
var data = $(table).find('td');
var filter = $('ol').find('.true').text();
$(table).find('td:nth-child(2)').each(function(){
if ($(this).text() == filter) {
$(this).parent().show().removeClass('true'); } });
data.filter(':visible').each(function() {
var text = $(this).text().replace(/Ã¡/g, 'a').replace(/Ã©/g, 'e').replace(/Ã­/g, 'i').replace(/Ã³/g, 'o').replace(/Ãº/g, 'u').toLowerCase();
if(text.indexOf(val) > -1) {
$(this).parent().addClass('true'); } });
data.parent().not('.true').hide(); } });
return this; }; 

$.fn.metaSearch = function(term, url) {
if (document.cookie.indexOf('cookieMetaSearch') > -1) { 
var cookieMetaSearch = document.cookie.replace(/(?:(?:^|.*;\s*)cookieMetaSearch\s*\=\s*([^;]*).*$)|^.*$/, "$1"); }
else { var cookieMetaSearch  = url; }
$(term).each(function() {
if ($(this).prev().text() == 'Hashtags') {
$(this).html('<a href="//' + cookieMetaSearch + '/' + $(this).next().text().replace(/[#$]/,'') + '" target="_blank">' + $(this).text() + '</a>'); } 
else if ($(this).prev().text() == 'Lista de deseos') {$(this).html('<a href="//google.com/#q=' + $(this).text() + '" target="_blank">' + $(this).text() + '</a>');} });
$(this).keydown(function(e) {
if(e.which == 13 && $(this).val().substring(0, 1) == '+' ) {
var val = $(this).val().replace('+', '');
if (val == 'f') {
var url = 'facebook.com/hashtag'; }
else if (val == 'g') {
var url = 'plus.google.com/explore'; }
else if (val == 'i') {
var url = 'instagram.com/explore/tags'; }
else if (val == 'p') {
var url = 'pinterest.com/explore'; }
else if (val == 't') {
var url = 'twitter.com/hashtag'; }
else if (val == 't.') {
var url = 'tumblr.com/tagged'; }
else { var url = val; }
$(term).each(function() {
if ($(this).prev().text() == 'Hashtags') {
$('a', this).attr('href','//' + url + '/' +  $(this).next().text().replace(/[#$]/,''));} });
document.cookie = 'cookieMetaSearch=' + url + '; expires=Fri, 31 Dec 9999 23:59:59 GMT';
var domain = url.replace(/\/.*$/, ''); 
if(!$('.metaSearch-message').length) {
$('body').append('<span class="metaSearch-message">Buscando con ' + domain + '</span>'); }
else { $('.metaSearch-message').text('Buscando con ' + domain).stop().fadeIn(100); }
$('.metaSearch-message').fadeOut(2500);
$(this).val(''); } }); 
return this; };

$.fn.lazyFacebook = function(url, number, type, pixels) {
$(this).on('click', function(e) {
e.preventDefault();
if (!$('.fb-comments').length) {
$('body').append('<script src="//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.4&appId=397954510406871"></script><div id="fb-root"></div><div class="fb-comments" data-href="' + url + '" data-numposts="' + number + '" data-order-by="' + type + '" data-width="' + pixels + '"></div><div class="fb-comments-loader"></div>');
$('.fb-comments').css('top','-999px');
(function fbComments_loader(){
setTimeout(function () {
if (!$('.fb-comments[fb-xfbml-state="rendered"]').length) {
fbComments_loader(); }
else {
$('.fb-comments-loader').hide();
$('.fb-comments').hide().css("top","0").slideToggle('fast').prepend('<div class="fb-comments-close">x</div>');
$('body').append('<script>$(".fb-comments-close").click(function() { $(this).add(".fb-comments").slideToggle("fast"); });</script>') }
}, 0); })(); }
if ($('.fb-comments[fb-xfbml-state="rendered"]').length) {
$(".fb-comments, .fb-comments-close").slideToggle("fast"); } }); 
return this; };

$.fn.liveFilter = function(column) {
$('li:first-child').addClass('true li-underline');
$(column).each(function() {
if (!($(this).text() == 'Hashtags')) {
$(this).parent().hide();
$(this).next().next().addClass('td-alignRight'); } });
$(this).on('click', function() {
var $this_text = $(this).text();
$('li').removeClass('true li-underline');
$(this).addClass('true li-underline');
$('tr').show();
$(column).each(function() {
if (!($(this).text() == $this_text)) {
$(this).parent().hide(); } }); });
$('td:nth-child(2)').each(function() {
if ($(this).text() == 'Ofertas') {
$(this).next().css({'font-size':'small','color':'#FF5959'}); } });
return this; };


$.fn.spoilerSlide = function() {
var allPanels = $('dl dd').hide();
$('dl dd:nth-of-type(1)').show().addClass('active');
$('dl> dt > a').click(function() {
$this = $(this);
$target =  $this.parent().next();
if(!$target.hasClass('active')){
allPanels.removeClass('active').slideUp("fast");
$target.addClass('active').slideDown("fast");
var index = $this.parent().index();
if(!$this.parent().index() == 0) { $('html, body').stop().animate({scrollTop: 80 + index*25 - ((index-1)*2)}, 200); } }
return false; }); };
