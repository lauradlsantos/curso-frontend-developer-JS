const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shopingCartContainer = document.querySelector('#shopingCartContainer')
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleMenuCarrito);

function toggleDesktopMenu (){
const isshopingCartContainerClosed = shopingCartContainer.classList.contains('inactive');
if (!isshopingCartContainerClosed){
    shopingCartContainer.classList.add('inactive')
    } 

desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
const isshopingCartContainerClosed = shopingCartContainer.classList.contains('inactive');

    if (!isshopingCartContainerClosed){
    shopingCartContainer.classList.add('inactive')
    } 

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleMenuCarrito (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
    } 

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    } 


shopingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive')
    shopingCartContainer.classList.add('inactive')
};

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
};

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Lamp',
    price: 220,
    image: 'https://secure.img1-cg.wfcdn.com/im/78473543/compr-r85/2164/216477710/batesville-64-arched-floor-lamp.jpg'
})
productList.push({
    name: 'Computer',
    price: 520,
    image: 'https://i.pcmag.com/imagery/reviews/03vgWGzPszXGuw7ZDpulrMm-1..v1638566437.jpg'
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
        productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div')
        const productName = document.createElement('p')
        const productPrice = document.createElement('p')
    
    
        productName.innerText = product.name;
        productPrice.innerText = '$' + product.price;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);