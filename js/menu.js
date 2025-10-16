'use strict';

const menu= {
    coffee: [
        {title: "Irish coffee", text: "Fragrant black coffee with Jameson Irish whiskey and whipped milk", price: "$7.00", img: "../assets/img/coffee-1.jpg" },
        {title: "Kahlua coffee", text: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk", price: "$7.00", img: "../assets/img/coffee-2.jpg" },
        {title: "Honey raf", text: "Espresso with frothed milk, cream and aromatic honey", price: "$5.50", img: "../assets/img/coffee-3.jpg" },
        {title: "Ice cappuccino", text: "Cappuccino with soft thick foam in summer version with ice", price: "$5.50", img: "../assets/img/coffee-4.jpg" },
        {title: "Espresso", text: "Classic black coffee", price: "$4.50", img: "../assets/img/coffee-5.jpg" },
        {title: "Latte", text: "Espresso coffee with the addition of steamed milk and dense milk foam", price: "$5.50", img: "../assets/img/coffee-6.jpg" },
        {title: "Latte macchiato", text: "Espresso with frothed milk and chocolate", price: "$5.50", img: "../assets/img/coffee-7.jpg" },
        {title: "Coffee with cognac", text: "Fragrant black coffee with cognac and whipped cream", price: "$6.50", img: "../assets/img/coffee-8.jpg" }
    ],
    tea: [
        {title: "Moroccan", text: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint", price: "$4.50", img: "../assets/img/tea-1.jpg" },
        {title: "Ginger", text: "Original black tea with fresh ginger, lemon and honey", price: "$5.00", img: "../assets/img/tea-2.jpg" },
        {title: "Cranberry", text: "Invigorating black tea with cranberry and honey", price: "$5.00", img: "../assets/img/tea-3.jpg"},
        {title: "Sea buckthorn", text: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon", price: "$5.50", img: "../assets/img/tea-4.jpg"}
    ],
    dessert: [
        {title: "Marble cheesecake", text: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam", price: "$3.50", img: "../assets/img/dessert-1.jpg" },
        {title: "Red velvet", text: "Layer cake with cream cheese frosting", price: "$4.00", img: "../assets/img/dessert-2.jpg" },
        {title: "Cheesecakes", text: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar", price: "$3.50", img: "../assets/img/dessert-3.jpg" },
        {title: "Creme brulee", text: "Delicate creamy dessert in a caramel basket with wild berries", price: "$4.00", img: "../assets/img/dessert-4.jpg" },
        {title: "Pancakes", text: "Tender pancakes with strawberry jam and fresh strawberries", price: "$4.50", img: "../assets/img/dessert-5.jpg" },
        {title: "Honey cake", text: "Classic honey cake with delicate custard", price: "$4.50", img: "../assets/img/dessert-6.jpg" },
        {title: "Chocolate cake", text: "Cake with hot chocolate filling and nuts with dried apricots", price: "$5.50", img: "../assets/img/dessert-7.jpg" },
        {title: "Black forest", text: "A combination of thin sponge cake with cherry jam and light chocolate mousse", price: "$6.50", img: "../assets/img/dessert-8.jpg" }
    ]
};

const buttons = document.querySelectorAll('.menu__tabs-btn');
const productsMenu = document.querySelector('.section__menu-grid');


function renderMenu(category) {

    productsMenu.innerHTML = ''; //очищаем блок перед отображением
    const itemsCategoryArray = menu[category]; // массив с категорией

    itemsCategoryArray.forEach(item => {
        const card = document.createElement('article');
        card.classList.add('menu__grid-item');

        // отрисовка карточки
        card.innerHTML = `
        <div class="grid__item-images">
            <div class="grid__item-images--max grid__img-1">
                <img src = "${item.img}" alt="${item.title}" class="grid__item-img">
            </div>
        </div>
        <div class="grid__item-content">
            <h3 class="grid__item-subtitle">${item.title}</h3>
            <p class="grid__item-text text">${item.text}</p>
            <p class="grid__item-price price">${item.price}</p>
        </div>
        `
        productsMenu.appendChild(card); //вставили в контейне

    });
}

buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        const category = button.id; // id кнопок
        renderMenu(category);

        buttons.forEach( btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});
renderMenu('coffee');