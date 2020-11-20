//Задание 1
const handleClick = (event) => {
    const src = event.target.getAttribute('src');
    const oldImg = document.querySelector('.full-picture-item');

    if (oldImg && oldImg.getAttribute('src') === src) {
        console.log("Stopped");
        return;
    }
    
    const wrapper = document.querySelector('.full-picture');
    
    const img = document.createElement('img');
    img.classList.add("full-picture-item");
    img.setAttribute('src', src);
    if (oldImg) {
        wrapper.replaceChild(img, oldImg);
        console.log("Pucture changed");
    } else {
        wrapper.appendChild(img);
        console.log("Pucture added");
    }
}

const handleMouseEnter = (event) => {
    console.log("Mouse entered!");
    event.target.classList.add('active')
}

const handleMouseLeave = (event) => {
    console.log("Mouse left!");
    event.target.classList.remove('active')
}

window.onload = () => {
        const previews = document.querySelectorAll('img.preview-item');
    for (const item of previews) {
        item.addEventListener('click', handleClick);
        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);
    }
    const shop = document.querySelectorAll ('div.items');
    for (const food of shop) {
        food.addEventListener('click', addItem);
    }
}

//Задание 2

let items = document.querySelectorAll('items');
let recycle = document.getElementsByClassName('recycle');
let infotext = document.getElementsByClassName('basket-info');
let summ = document.getElementsByClassName('summ')

    function addItem() {
        let item_clone = items.cloneNode(true);
        recycle.appendChild(item_clone);

       let prices = recycle.getElementsByClassName('price')
       totalprice = 0;
        for (let j = 0; j<prices.length;j++){
            totalprice = totalprice + Number(prices[j].innerHTML);}
            console.log('Стоимость всего', totalprice);
            summ[0].innerHTML = 'Стоимость всего'+ totalprice;
        }
        let item_button = document.getElementsByClassName('items-button');
for (var i = 0; i < item_button.length; i++) {
    item_button[i].onclick = addItem;
};

