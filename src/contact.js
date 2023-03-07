export default function createContact() {
    const content = document.querySelector("#content");

    //header
    const header = document.createElement("header");
    const headerLogoButton = document.createElement("div");
    headerLogoButton.classList.add("headerLogo", "headerButton");
    const headerLogoText = document.createElement("h4");
    const headerLogoLink = document.createElement("a");
    headerLogoLink.setAttribute("href", "./index.html");
    headerLogoLink.textContent = "Food N' Stuff";
    headerLogoText.appendChild(headerLogoLink);
    headerLogoButton.appendChild(headerLogoText);
    header.appendChild(headerLogoButton);

    const headerRightSide = document.createElement("div");
    headerRightSide.classList.add("headerRightSide");

    const headerMenuButton = document.createElement("div");
    headerMenuButton.classList.add("headerButton");
    const headerMenuText = document.createElement("h4");
    const headerMenuLink = document.createElement("a");
    headerMenuLink.setAttribute("href", "./menu.html");
    headerMenuLink.textContent = "Menu";
    headerMenuText.appendChild(headerMenuLink);
    headerMenuButton.appendChild(headerMenuText);
    headerRightSide.appendChild(headerMenuButton);

    const headerContactButton = document.createElement("div");
    headerContactButton.classList.add("headerButton");
    const headerContactText = document.createElement("h4");
    const headerContactLink = document.createElement("a");
    headerContactLink.setAttribute("href", "./contact.html");
    headerContactLink.textContent = "Contact Us";
    headerContactText.appendChild(headerContactLink);
    headerContactButton.appendChild(headerContactText);
    headerRightSide.appendChild(headerContactButton);

    header.appendChild(headerRightSide);

    content.appendChild(header);

    //main
    const main = document.createElement("main");
    const contactText = document.createElement("h1");
    contactText.textContent = "Contact Us";
    main.appendChild(contactText);
    const hoursText = document.createElement("h2");
    hoursText.textContent = "Business Hours";
    main.appendChild(hoursText);

    const hoursList = document.createElement("ul");

    const hours1Item = document.createElement("li");
    const hours1Days = document.createElement("span");
    hours1Days.textContent = "Monday-Thursday";
    hours1Item.appendChild(hours1Days);
    const hours1Hours = document.createElement("span");
    hours1Hours.textContent = "11AM - 7PM";
    hours1Item.appendChild(hours1Hours);
    hoursList.appendChild(hours1Item);

    const hours2Item = document.createElement("li");
    const hours2Days = document.createElement("span");
    hours2Days.textContent = "Friday-Saturday";
    hours2Item.appendChild(hours2Days);
    const hours2Hours = document.createElement("span");
    hours2Hours.textContent = "11AM - 9PM";
    hours2Item.appendChild(hours2Hours);
    hoursList.appendChild(hours2Item);

    const hours3Item = document.createElement("li");
    const hours3Days = document.createElement("span");
    hours3Days.textContent = "Sundays";
    hours3Item.appendChild(hours3Days);
    const hours3Hours = document.createElement("span");
    hours3Hours.textContent = "11AM - 4PM";
    hours3Item.appendChild(hours3Hours);
    hoursList.appendChild(hours3Item);

    main.appendChild(hoursList);

    const storePhoneText = document.createElement("h2");
    storePhoneText.textContent = "Store Phone: ";
    const storePhoneNumber = document.createElement("span");
    storePhoneNumber.textContent = "(101)555-5555";
    storePhoneText.appendChild(storePhoneNumber);
    main.appendChild(storePhoneText);

    const ownerEmailText = document.createElement("h2");
    ownerEmailText.textContent = "Owner Email: ";
    const ownerEmailAddress = document.createElement("span");
    ownerEmailAddress.textContent = "You Don't Need It";
    ownerEmailText.appendChild(ownerEmailAddress);
    main.appendChild(ownerEmailText);

    content.appendChild(main);
}