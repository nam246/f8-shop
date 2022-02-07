
//khai báo biến url API
var productApi = 'http://localhost:3000/product';

//khai báo block nơi render api
var homeProductList = document.querySelector('.container__home-menu');

// hàm nhận data từ API db.json
function getProduct(callback) {
    fetch(productApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);// data nhận được từ .then trên
}

function renderProduct(product) {
    var htmls = product.map(function(product) {
        return `
                <div class="container__home-menu-items">
                    <div class="menu-item-img"><img src="${ product.img }" alt="" srcset=""></div>
                    <div class="menu-item-name">${ product.name }</div>
                </div>
        `;
    })
    homeProductList.innerHTML = htmls.join('');
}

function start() {
    getProduct(function(product) {
        renderProduct(product);
    });
}

start();