$(document).ready(function()
{"use strict";var ctrl=new ScrollMagic.Controller();setHeader();initMenu();initHomeSlider();initNewsSlider();initMilestones();$(window).on('resize',function()
{setHeader();setTimeout(function()
{$(window).trigger('resize.px.parallax');},375);});$(document).on('scroll',function()
{setHeader();});function setHeader()
{var header=$('.header');if($(window).scrollTop()>91)
{header.addClass('scrolled');}
else
{header.removeClass('scrolled');}}
function initMenu()
{if($('.menu').length)
{var menu=$('.menu');var hamburger=$('.hamburger');var close=$('.menu_close');hamburger.on('click',function()
{menu.toggleClass('active');});close.on('click',function()
{menu.toggleClass('active');});}}
function initHomeSlider()
{if($('.home_slider').length)
{var homeSlider=$('.home_slider');homeSlider.owlCarousel({items:1,autoplay:true,loop:true,nav:false,dots:false,smartSpeed:1200});function setAnimation(_elem,_InOut)
{var animationEndEvent='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';_elem.each(function()
{var $elem=$(this);var $animationType='animated '+$elem.data('animation-'+_InOut);$elem.addClass($animationType).one(animationEndEvent,function()
{$elem.removeClass($animationType);});});}
homeSlider.on('change.owl.carousel',function(event)
{var $currentItem=$('.home_slide',homeSlider).eq(event.item.index);var $elemsToanim=$currentItem.find("[data-animation-out]");setAnimation($elemsToanim,'out');});homeSlider.on('changed.owl.carousel',function(event)
{var $currentItem=$('.home_slide',homeSlider).eq(event.item.index);var $elemsToanim=$currentItem.find("[data-animation-in]");setAnimation($elemsToanim,'in');});if($('.home_slider_nav').length)
{var next=$('.home_slider_nav');next.on('click',function()
{homeSlider.trigger('next.owl.carousel');});}}}
function initNewsSlider()
{if($('.breaking_news_slider').length)
{var newsSlider=$('.breaking_news_slider');newsSlider.owlCarousel({items:1,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:true,loop:true,dots:false,nav:false,smartSpeed:1200});}}
function initMilestones()
{if($('.milestone_counter').length)
{var milestoneItems=$('.milestone_counter');milestoneItems.each(function(i)
{var ele=$(this);var endValue=ele.data('end-value');var eleValue=ele.text();var signBefore="";var signAfter="";if(ele.attr('data-sign-before'))
{signBefore=ele.attr('data-sign-before');}
if(ele.attr('data-sign-after'))
{signAfter=ele.attr('data-sign-after');}
var milestoneScene=new ScrollMagic.Scene({triggerElement:this,triggerHook:'onEnter',reverse:false}).on('start',function()
{var counter={value:eleValue};var counterTween=TweenMax.to(counter,4,{value:endValue,roundProps:"value",ease:Circ.easeOut,onUpdate:function()
{document.getElementsByClassName('milestone_counter')[i].innerHTML=signBefore+counter.value+signAfter;}});}).addTo(ctrl);});}}});