import homepage from './homepage.js';
import menu from './menu.js';
import contact from './contact.js';
if(document.title == "Food N\' Stuff") {
    homepage();
} else if(document.title == "Food N\' Stuff | Menu"){
    menu();
} else {
contact();
}