var about = document.getElementById("about");
var nav_about = document.getElementById("nav-about");
var about_coordinates = about.getBoundingClientRect();
var current = 0;
var target_about = about_coordinates.y;
nav_about.addEventListener("click", function(event){
    event.preventDefault();
    let scroll = setInterval(function(){
        if(current >= target_about)
        {
            clearInterval(scroll);
        }
        window.scrollBy(0, 50);
        current += 50;
    }, 50);
    current = 0;
});

var nav_skill = document.getElementById("nav-skill");
var skill = document.getElementById("skill");
var skill_coord = skill.getBoundingClientRect();
var target_skill = skill_coord.y;
nav_skill.addEventListener("click", function(event){
    event.preventDefault();
    let scroll1 = setInterval(function(){
        if(current >= target_skill)
        {
            clearInterval(scroll1);
        }
        window.scrollBy(0, 50);
        current += 50;
    }, 50);
    current = 0;
});

var nav_experience = document.getElementById("nav-experience");
var experience = document.getElementById("experience");
var experience_coord = experience.getBoundingClientRect();
var target_experience = experience_coord.y;
nav_experience.addEventListener("click", function(event){
    event.preventDefault();
    let scroll1 = setInterval(function(){
        if(current >= target_experience)
        {
            clearInterval(scroll1);
        }
        window.scrollBy(0, 50);
        current += 50;
    }, 50);
    current = 0;
});

var nav_education = document.getElementById("nav-education");
var education = document.getElementById("education");
var education_coord = education.getBoundingClientRect();
var target_education = education_coord.y;
nav_education.addEventListener("click", function(event){
    event.preventDefault();
    let scroll1 = setInterval(function(){
        if(current >= target_education)
        {
            clearInterval(scroll1);
        }
        window.scrollBy(0, 50);
        current += 50;
    }, 30);
    current = 0;
});

var nav_portfolio = document.getElementById("nav-portfolio");
var portfolio = document.getElementById("portfolio");
var portfolio_coord = portfolio.getBoundingClientRect();
var target_portfolio = portfolio_coord.y;
nav_portfolio.addEventListener("click", function(event){
    event.preventDefault();
    let scroll1 = setInterval(function(){
        if(current >= target_portfolio)
        {
            clearInterval(scroll1);
        }
        window.scrollBy(0, 50);
        current += 50;
    }, 30);
    current = 0;
});

var nav_contact = document.getElementById("nav-contact");
var contact = document.getElementById("contact");
var contact_coord = contact.getBoundingClientRect();
var target_contact = contact_coord.y;
nav_contact.addEventListener("click", function(event){
    event.preventDefault();
    let scroll1 = setInterval(function(){
        if(current >= target_contact)
        {
            clearInterval(scroll1);
        }
        window.scrollBy(0, 50);
        current += 50;
    }, 30);
    current = 0;
});