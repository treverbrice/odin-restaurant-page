import homepage from './homepage.js';
import menu from './menu.js';
import contact from './contact.js';

function emptyPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

function createPage (page) {
    emptyPage();
    page();
    try {
        const homeTab = document.querySelector("#homeTab");
        homeTab.addEventListener("click", function callCreatePage() {
            return createPage(homepage);
        });
    } catch(e) {
        if(e instanceof TypeError) {
            //pass
        } else {
            throw e;
        }
    }
    const menuTab = document.querySelector("#menuTab");
    menuTab.addEventListener("click", function callCreatePage() {
        return createPage(menu);
    });
    const contactTab = document.querySelector("#contactTab");
    contactTab.addEventListener("click", function callCreatePage() {
        return createPage(contact);
    });
}

document.onload = createPage(homepage);
