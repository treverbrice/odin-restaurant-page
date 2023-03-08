export default function createMenu() {
    const content = document.querySelector("#content");

    //header
    const header = document.createElement("header");
    const headerLogoButton = document.createElement("div");
    headerLogoButton.classList.add("headerLogo", "headerButton");
    const headerLogoLink = document.createElement("button");
    headerLogoLink.setAttribute("id", "homeTab");
    headerLogoLink.textContent = "Food N' Stuff";
    headerLogoButton.appendChild(headerLogoLink);
    header.appendChild(headerLogoButton);

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
    const menuText = document.createElement("h1");
    menuText.textContent = "Menu";
    main.appendChild(menuText);
    const foodText = document.createElement("h2");
    foodText.textContent = "Food";
    main.appendChild(foodText);

    //burger
    const burger = document.createElement("div");
    burger.classList.add("menuItem");
    const burgerLeftDiv = document.createElement("div");
    const burgerTitle = document.createElement("h3");
    burgerTitle.textContent = "Burger";
    burgerLeftDiv.appendChild(burgerTitle);
    const burgerDescription = document.createElement("h5");
    burgerDescription.textContent = "A burger... Comes with Lettuce, Tomato, and Onion.";
    burgerLeftDiv.appendChild(burgerDescription);
    burger.appendChild(burgerLeftDiv);

    const burgerRightDiv = document.createElement("div");
    const burgerPrice = document.createElement("h4");
    burgerPrice.textContent = "$7";
    burgerRightDiv.appendChild(burgerPrice);
    burger.appendChild(burgerRightDiv);
    main.appendChild(burger);

    //vegan burger
    const veganBurger = document.createElement("div");
    veganBurger.classList.add("menuItem");
    const veganBurgerLeftDiv = document.createElement("div");
    const veganBurgerTitle = document.createElement("h3");
    veganBurgerTitle.textContent = "Vegan Burger";
    veganBurgerLeftDiv.appendChild(veganBurgerTitle);
    const veganBurgerDescription = document.createElement("h5");
    veganBurgerDescription.textContent = "A burger... minus the burger. Black Bean patty, comes with Lettuce, Tomato, and Onion.";
    veganBurgerLeftDiv.appendChild(veganBurgerDescription);
    veganBurger.appendChild(veganBurgerLeftDiv);

    const veganBurgerRightDiv = document.createElement("div");
    const veganBurgerPrice = document.createElement("h4");
    veganBurgerPrice.textContent = "$7";
    veganBurgerRightDiv.appendChild(veganBurgerPrice);
    veganBurger.appendChild(veganBurgerRightDiv);
    main.appendChild(veganBurger);

    //stuff
    const stuffText = document.createElement("h2");
    stuffText.textContent = "Stuff";
    main.appendChild(stuffText);

    //coffee
    const coffee = document.createElement("div");
    coffee.classList.add("menuItem");
    const coffeeLeftDiv = document.createElement("div");
    const coffeeTitle = document.createElement("h3");
    coffeeTitle.textContent = "Coffee";
    coffeeLeftDiv.appendChild(coffeeTitle);
    const coffeeDescription = document.createElement("h5");
    coffeeDescription.textContent = "You'll take it black.";
    coffeeLeftDiv.appendChild(coffeeDescription);
    coffee.appendChild(coffeeLeftDiv);

    const coffeeRightDiv = document.createElement("div");
    const coffeePrice = document.createElement("h4");
    coffeePrice.textContent = "$1";
    coffeeRightDiv.appendChild(coffeePrice);
    coffee.appendChild(coffeeRightDiv);
    main.appendChild(coffee);

    //lemonade
    const lemonade = document.createElement("div");
    lemonade.classList.add("menuItem");
    const lemonadeLeftDiv = document.createElement("div");
    const lemonadeTitle = document.createElement("h3");
    lemonadeTitle.textContent = "lemonade";
    lemonadeLeftDiv.appendChild(lemonadeTitle);
    const lemonadeDescription = document.createElement("h5");
    lemonadeDescription.textContent = "Fresh squeezed, at some point.";
    lemonadeLeftDiv.appendChild(lemonadeDescription);
    lemonade.appendChild(lemonadeLeftDiv);

    const lemonadeRightDiv = document.createElement("div");
    const lemonadePrice = document.createElement("h4");
    lemonadePrice.textContent = "$1";
    lemonadeRightDiv.appendChild(lemonadePrice);
    lemonade.appendChild(lemonadeRightDiv);
    main.appendChild(lemonade);

    content.appendChild(main);
}