'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const menu = {
    coffee: [
        {
            title: "Irish coffee",
            text: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
            price: "$7.00",
            img: "../assets/img/coffee-1.jpg",
            size: {
                s: { volume: "200ml", price: "$0.00" },
                m: { volume: "300ml", price: "$0.50" },
                l: { volume: "400ml", price: "$1.00" }
            },
        },
        { title: "Kahlua coffee", text: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk", price: "$7.00", img: "../assets/img/coffee-2.jpg" },
        { title: "Honey raf", text: "Espresso with frothed milk, cream and aromatic honey", price: "$5.50", img: "../assets/img/coffee-3.jpg" },
        { title: "Ice cappuccino", text: "Cappuccino with soft thick foam in summer version with ice", price: "$5.50", img: "../assets/img/coffee-4.jpg" },
        { title: "Espresso", text: "Classic black coffee", price: "$4.50", img: "../assets/img/coffee-5.jpg" },
        { title: "Latte", text: "Espresso coffee with the addition of steamed milk and dense milk foam", price: "$5.50", img: "../assets/img/coffee-6.jpg" },
        { title: "Latte macchiato", text: "Espresso with frothed milk and chocolate", price: "$5.50", img: "../assets/img/coffee-7.jpg" },
        { title: "Coffee with cognac", text: "Fragrant black coffee with cognac and whipped cream", price: "$6.50", img: "../assets/img/coffee-8.jpg" }
    ],
    tea: [
        { title: "Moroccan", text: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint", price: "$4.50", img: "../assets/img/tea-1.png" },
        { title: "Ginger", text: "Original black tea with fresh ginger, lemon and honey", price: "$5.00", img: "../assets/img/tea-2.png" },
        { title: "Cranberry", text: "Invigorating black tea with cranberry and honey", price: "$5.00", img: "../assets/img/tea-3.png" },
        { title: "Sea buckthorn", text: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon", price: "$5.50", img: "../assets/img/tea-4.png" }
    ],
    dessert: [
        { title: "Marble cheesecake", text: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam", price: "$3.50", img: "../assets/img/dessert-1.png" },
        { title: "Red velvet", text: "Layer cake with cream cheese frosting", price: "$4.00", img: "../assets/img/dessert-2.png" },
        { title: "Cheesecakes", text: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar", price: "$3.50", img: "../assets/img/dessert-3.png" },
        { title: "Creme brulee", text: "Delicate creamy dessert in a caramel basket with wild berries", price: "$4.00", img: "../assets/img/dessert-4.png" },
        { title: "Pancakes", text: "Tender pancakes with strawberry jam and fresh strawberries", price: "$4.50", img: "../assets/img/dessert-5.png" },
        { title: "Honey cake", text: "Classic honey cake with delicate custard", price: "$4.50", img: "../assets/img/dessert-6.png" },
        { title: "Chocolate cake", text: "Cake with hot chocolate filling and nuts with dried apricots", price: "$5.50", img: "../assets/img/dessert-7.png" },
        { title: "Black forest", text: "A combination of thin sponge cake with cherry jam and light chocolate mousse", price: "$6.50", img: "../assets/img/dessert-8.png" }
    ]
};
const order = {
    size: []
};
const buttons = document.querySelectorAll('.menu__tabs-btn');
const productsMenu = document.querySelector('.section__menu-grid');
// отображение меню
function renderMenu(category) {
    productsMenu.innerHTML = ''; //очищаем блок перед отображением
    const itemsCategoryArray = menu[category]; // массив с категорией
    itemsCategoryArray.forEach(item => {
        const card = document.createElement('article');
        card.classList.add('menu__grid-item');
        // отрисовка карточки
        card.innerHTML = `
        <div class="grid__item-images">
            <div class="grid__item-images--max">
                <img src = "${item.img}" alt="${item.title}" class="grid__item-img">
            </div>
        </div>
        <div class="grid__item-content">
            <h3 class="grid__item-subtitle">${item.title}</h3>
            <p class="grid__item-text text">${item.text}</p>
            <p class="grid__item-price price">${item.price}</p>
        </div>
        `;
        productsMenu.appendChild(card); //вставили в контейне
    });
}
// модальное окно
function openModal(item) {
    const modal = document.createElement('div');
    modal.classList.add('section__menu-modal');
    modal.innerHTML = `
    <div class="modal__overlay"></div>
        <div class="modal__container">
        <div class="modal__image">
            <img src="${item.img}" alt="${item.title}" class="modal__img">
        </div>
        <div class="modal__info">
            <div class = "modal__info-title">
                 <h2 class="info__title">${item.title}</h2>
                 <p class="info__text">${item.text}</p>
            </div>
            <div class="modal__info-size">
             <p class="info__size-title">Size</p>
             <div class="info__size-btn">
             <button class="size__btn">
                 <span class = "size__btn-circle">S</span>
                 <span class = "size__btn-text">200 ml</span>
            </button>
            <button class="size__btn">
                 <span class = "size__btn-circle">M</span>
                 <span class = "size__btn-text">300 ml</span>
            </button>
            <button class="size__btn">
                 <span class = "size__btn-circle">S</span>
                 <span class = "size__btn-text">200 ml</span>
            </button>
             
              </div>
            </div>
                <h2 class="modal__title">${item.title}</h2>
                <p class="modal__text">${item.text}</p>
                <p class="modal__price">${item.price}</p>
            </div>
        </div>
    
    `;
}
//кнопки переключатели
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const category = button.id; // id кнопок
        renderMenu(category);
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});
renderMenu('coffee');
document.getElementById('coffee').classList.add('active');
//# sourceMappingURL=menu.js.map