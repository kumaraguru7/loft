$(document).ready(function()
{"use strict";var ctrl=new ScrollMagic.Controller();setHeader();initMenu();$(window).on('resize',function()
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
{menu.toggleClass('active');});}}});