export default function createHomepage() {
    const content = document.querySelector("#content");

    //header
    const header = document.createElement("header");
    const emptyDiv = document.createElement("div"); // empty div moves other buttons to the right
    header.appendChild(emptyDiv);
    const headerRightSide = document.createElement("div");
    headerRightSide.classList.add("headerRightSide");

    const headerMenuButton = document.createElement("div");
    headerMenuButton.classList.add("headerButton");
    const headerMenuText = document.createElement("h4");
    const headerMenuLink = document.createElement("button");
    headerMenuLink.setAttribute("id", "menuTab");
    headerMenuLink.textContent = "Menu";
    headerMenuText.appendChild(headerMenuLink);
    headerMenuButton.appendChild(headerMenuText);
    headerRightSide.appendChild(headerMenuButton);

    const headerContactButton = document.createElement("div");
    headerContactButton.classList.add("headerButton");
    const headerContactText = document.createElement("h4");
    const headerContactLink = document.createElement("button");
    headerContactLink.setAttribute("id", "contactTab");
    headerContactLink.textContent = "Contact Us";
    headerContactText.appendChild(headerContactLink);
    headerContactButton.appendChild(headerContactText);
    headerRightSide.appendChild(headerContactButton);

    header.appendChild(headerRightSide);

    content.appendChild(header);

    //main
    const main = document.createElement("main");
    const centerLogo = document.createElement("h1");
    centerLogo.id = "centerLogo";
    centerLogo.textContent = "Food N' Stuff";
    main.appendChild(centerLogo);
    const mainImage = document.createElement("img");
    mainImage.setAttribute("src", "../src/restaurant.jpg");
    main.appendChild(mainImage);

    content.appendChild(main);

    //footer
    const footer = document.createElement("footer");
    const description = document.createElement("p");
    description.textContent = "Food, you need it, we make it. Stuff is available on request.";
    footer.appendChild(description);
    const imageAttribution = document.createElement("p");
    imageAttribution.innerHTML = '<a href="https://stocksnap.io/photo/restaurant-bar-THXU08ODDE">Photo</a> by <a href="https://stocksnap.io/author/aftaputtagunawan">Afta Putta Gunawan</a> on <a href="https://stocksnap.io">StockSnap</a>';
    footer.appendChild(imageAttribution);

    content.appendChild(footer);

}