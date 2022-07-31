const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const searchInput = $(".navbar__input");
const inputIconDelete = $(".input__icon-delete");
const changeImgs = $(".change-img");
const imgTag = $(".show-img");
const menuBtn = $(".list__item-icon");
const leftColumn = $("#left-column");
const hideBtn = $(".accordion__icon-delete");
const header = $("#header");
const itemActive = $$(".accordion-desc");
const pageNumber = $$(".pagination__page-number");
const footerInput = $(".footer__input");
const footerInputIconDelete = $(".footer__input-delete");
const toastMsg = $(".toast");
const cartItems = $$(".cart__product");
const cartEmpty = $(".cart-empty");
const goToTopBtn = $(".go-to-top");

// handle search input
function handleSearch(e) {
  const inputValue = e.target.value;
  if (inputValue.length > 0) {
    inputIconDelete.classList.add("display-block");
  }
  if (inputValue.length == 0) {
    inputIconDelete.classList.remove("display-block");
  }
}
function handleDeleteValue() {
  searchInput.value = "";
  inputIconDelete.classList.remove("display-block");
  searchInput.focus();
}

inputIconDelete.addEventListener("click", handleDeleteValue);
searchInput.addEventListener("input", handleSearch);

//// search sản phẩm
searchInput.addEventListener("input", function (e) {
  const valueSearch = e.target.value.trim().toLowerCase();
  const listPhones = document.querySelectorAll(".phones");

  listPhones.forEach((item) => {
    if (item.innerText.toLowerCase().includes(valueSearch)) {
      item.classList.remove("display-none");
    } else {
      item.classList.add("display-none");
    }
  });
});

/// change background
var index = 1;
const imgs = [
  "assets/img/background-show/banner-xiaomi-12.jpg",
  "assets/img/background-show/banner-iphone-12-nhat.jpg",
  "assets/img/background-show/banner-realme-q5-pro.jpg",
  "assets/img/background-show/banner-redmi-k50-gaming-2.png",
  "assets/img/background-show/banner-samsung-galaxy-s20-series.jpg",
];

changeBackground = () => {
  imgTag.setAttribute("src", imgs[index]);
  index++;
  if (index == imgs.length) index = 0;
};

setInterval(changeBackground, 4000);

///////
const arrPhones = [
  {
    phoneName: "OPPO Reno8 Pro",
    price: 18300000,
    phonePrice: "18,300,000",
    imagePhone: "./assets/img/oppo-reno-8pro-vang.jpg",
    brand: "OPPO",
    screen: "6",
  },
  {
    phoneName: "Nubia Red Magic 7",
    price: 13950000,
    phonePrice: "13,950,000",
    imagePhone: "./assets/img/nubia-red-magic-7-trong-suot.jpg",
    brand: "Xiaomi",
    screen: "5.8",
  },
  {
    phoneName: "iPhone 13 Pro Chính hãng VN/A",
    price: 26750000,
    phonePrice: "26,750,000",
    imagePhone: "./assets/img/iphone-13-pro-xanh.jpg",
    brand: "Iphone",
    screen: "6.2",
  },
  {
    phoneName: "Xiaomi POCO F4 GT",
    price: 19550000,
    phonePrice: "19,550,000",
    imagePhone: "./assets/img/poco-f4-gt-vang.jpg",
    brand: "Xiaomi",
    screen: "6.3",
  },
  {
    phoneName: "OPPO Reno6 Z",
    price: 7550000,
    phonePrice: "7,550,000",
    imagePhone: "./assets/img/oppo-reno-6z-b.jpg",
    brand: "OPPO",
    screen: "5.9",
  },
  {
    phoneName: "Huawei Honor Magic V",
    price: 27550000,
    phonePrice: "27,550,000",
    imagePhone: "./assets/img/honor-magic-v-3-2.jpg",
    brand: "Huawei",
    screen: "6",
  },
  {
    phoneName: "iPhone 11 cũ (64GB, 128GB)",
    price: 12500000,
    phonePrice: "12,500,000",
    imagePhone: "./assets/img/iphone-11-tim.jpg",
    brand: "Iphone",
    screen: "5.8",
  },
  {
    phoneName: "Vivo iQOO Z5 (Snap 778G)",
    price: 6650000,
    phonePrice: "6,650,000",
    imagePhone: "./assets/img/vivo-iqoo-z5-den.jpg",
    brand: "Vivo",
    screen: "5.8",
  },
  {
    phoneName: "Samsung Galaxy S20 cũ (Hàn Quốc, Mỹ)",
    price: 6950000,
    phonePrice: "6,950,000",
    imagePhone: "./assets/img/galaxy-s20-cu-xam.png",
    brand: "Samsung",
    screen: "5.3",
  },
  {
    phoneName: "iPhone 12 Nhật Bản (Mới 100%)",
    price: 18950000,
    phonePrice: "18,950,000",
    imagePhone: "./assets/img/iphone-12-chinh-hang-blue.jpg",
    brand: "Iphone",
    screen: "5.7",
  },
  {
    phoneName: "iPhone XS Max Cũ (64GB, 256GB)",
    price: 7950000,
    phonePrice: "7,950,000",
    imagePhone: "./assets/img/iphone-xs-max-vang.jpg",
    brand: "Iphone",
    screen: "6",
  },
  {
    phoneName: "Xiaomi 11T 5G (Chính hãng DGW)",
    price: 8150000,
    phonePrice: "8,150,000",
    imagePhone: "./assets/img/mi-11t-xanh.jpeg",
    brand: "Xiaomi",
    screen: "5.9",
  },
  {
    phoneName: "OPPO Find X5 Pro",
    price: 21950000,
    phonePrice: "21,950,000",
    imagePhone: "./assets/img/oppo-find-x5-pro-trang.jpg",
    brand: "OPPO",
    screen: "5.9",
  },
  {
    phoneName: "LG Velvet",
    price: 4250000,
    phonePrice: "4,250,000",
    imagePhone: "./assets/img/lg-velvet-den.jpg",
    brand: "LG",
    screen: "5.6",
  },
  {
    phoneName: "Xiaomi Redmi Note 11 Pro (Bản China)",
    price: 5950000,
    phonePrice: "5,950,000",
    imagePhone: "./assets/img/redmi-note-11-pro-xanh-rung-sau.jpg",
    brand: "Xiaomi",
    screen: "6.1",
  },
  {
    phoneName: "Huawei Honor 70 Pro",
    price: 8950000,
    phonePrice: "8,950,000",
    imagePhone: "./assets/img/honor-70-pro-plus-gold.jpg",
    brand: "Huawei",
    screen: "6.1",
  },
  {
    phoneName: "OPPO Reno6 5G (Chính hãng)",
    price: 9750000,
    phonePrice: "9,750,000",
    imagePhone: "./assets/img/oppo-reno6-bac-1-dai-dien.jpg",
    brand: "OPPO",
    screen: "6.2",
  },
  {
    phoneName: "Samsung Galaxy A53 5G (Chính hãng)",
    price: 7950000,
    phonePrice: "7,950,000",
    imagePhone: "./assets/img/samsung-galaxy-a53-5g-8.jpg",
    brand: "Samsung",
    screen: "5.8",
  },
  {
    phoneName: "Samsung Galaxy A90 5G (Snap 855)",
    price: 4850000,
    phonePrice: "4,850,000",
    imagePhone: "./assets/img/samsung-galaxy-a90-5g-den.jpg",
    brand: "Samsung",
    screen: "5.7",
  },
  {
    phoneName: "LG V50s ThinQ ",
    price: 3850000,
    phonePrice: "3,850,000 ",
    imagePhone: "./assets/img/lg-v50-cu.jpg",
    brand: "LG",
    screen: "5.8",
  },
  {
    phoneName: "Samsung Galaxy M51 Chính hãng",
    price: 5350000,
    phonePrice: "5,350,000",
    imagePhone: "./assets/img/samsung-galaxy-m51-trang.png",
    brand: "Samsung",
    screen: "6",
  },
  {
    phoneName: "iPhone 13 Chính hãng VN/A",
    price: 21600000,
    phonePrice: "21,600,000",
    imagePhone: "./assets/img/iphone-13-xanh.jpg",
    brand: "Iphone",
    screen: "6.2",
  },
  {
    phoneName: "Samsung Galaxy S20 Plus cũ (Hàn Quốc)",
    price: 7950000,
    phonePrice: "7,950,000",
    imagePhone: "./assets/img/samsung-galaxy-s20-plus-cu-cloud-blue.jpg",
    brand: "Samsung",
    screen: "6.2",
  },
  {
    phoneName: "Huawei Honor Magic 4",
    price: 23450000,
    phonePrice: "23,450,000",
    imagePhone: "./assets/img/honor-magic-4-vang.jpg",
    brand: "Huawei",
    screen: "6.2",
  },
  {
    phoneName: "Huawei Honor 70 Pro Plus",
    price: 15950000,
    phonePrice: "15,950,000",
    imagePhone: "./assets/img/honor-70-pro-trang.png",
    brand: "Huawei",
    screen: "6.4",
  },
  {
    phoneName: "LG V60 ThinQ",
    price: 5950000,
    phonePrice: "5,950,000",
    imagePhone: "./assets/img/lg-v60-xanh.jpg",
    brand: "LG",
    screen: "6.2",
  },
  {
    phoneName: "Samsung Galaxy S21 Ultra cũ (Hàn Quốc)",
    price: 14250000,
    phonePrice: "14,250,000",
    imagePhone: "./assets/img/samsung-galaxy-s21-ultra-cu-den.jpg",
    brand: "Samsung",
    screen: "6.3",
  },
  {
    phoneName: "Xiaomi 12 (Snap 820 Gen 1)",
    price: 15850000,
    phonePrice: "15,850,000",
    imagePhone: "./assets/img/xiaomi-12-xanh-bac-ha.jpg",
    brand: "Xiaomi",
    screen: "6",
  },
  {
    phoneName: "Xiaomi Redmi Note 11 (Chính hãng)",
    price: 13650000,
    phonePrice: "13,650,000",
    imagePhone: "./assets/img/xiaomi-redmi-note-11-ngoc-trai.jpg",
    brand: "Xiaomi",
    screen: "5.9",
  },
  {
    phoneName: "Huawei Honor 60 SE",
    price: 7950000,
    phonePrice: "7,950,000",
    imagePhone: "./assets/img/honor-60-se-5g-xanh.jpg",
    brand: "Huawei",
    screen: "5.9",
  },
  {
    phoneName: "Vivo iQOO Neo 5 Lite (Snap 870)",
    price: 6750000,
    phonePrice: "6,750,000",
    imagePhone: "./assets/img/vivo-iqoo-neo-5-lite-3.jpg",
    brand: "Vivo",
    screen: "5.6",
  },
  {
    phoneName: "LG G8 ThinQ",
    price: 4450000,
    phonePrice: "4,450,000",
    imagePhone: "./assets/img/lg-g8-xanh.jpg",
    brand: "LG",
    screen: "5.6",
  },
];

// hàm render điện thoai
function renderDT(brand_arr = [], price_arr = [], screen_arr = []) {
  let totalPhone = 0;
  const listPhones = document.getElementById("list-phones");
  listPhones.innerHTML = "";
  for (var i = 0; i < arrPhones.length; i++) {
    phoneName = arrPhones[i].phoneName;
    pricePhone = arrPhones[i].price;
    phonePrice = arrPhones[i].phonePrice;
    imagePhone = arrPhones[i].imagePhone;
    brandDT = arrPhones[i].brand;
    screenPhone = arrPhones[i].screen;

    // lọc thương hiệu đc chọn
    if (brand_arr.length > 0) {
      if (brand_arr.includes(brandDT) == false) continue;
    }

    // lọc thương hiệu đc chọn
    if (brand_arr.length > 0) {
      if (brand_arr.includes(brandDT) == false) continue;
    }

    // lọc theo giá bán
    if (price_arr.length > 0) {
      if (pricePhone < 5000000 && price_arr.includes("1") == false) continue;
      if (
        pricePhone >= 5000000 &&
        pricePhone < 10000000 &&
        price_arr.includes("2") == false
      )
        continue;
      if (
        pricePhone >= 10000000 &&
        pricePhone < 15000000 &&
        price_arr.includes("3") == false
      )
        continue;
      if (
        pricePhone >= 15000000 &&
        pricePhone < 20000000 &&
        price_arr.includes("4") == false
      )
        continue;
      if (pricePhone >= 20000000 && price_arr.includes("5") == false) continue;
    }

    // lọc theo màn hình
    if (screen_arr.length > 0) {
      if (Number(screenPhone) < 6 && screen_arr.includes("1") == false)
        continue;
      if (Number(screenPhone) >= 6 && screen_arr.includes("2") == false)
        continue;
    }

    totalPhone++;

    // render list phones
    listPhones.innerHTML += `
        <div class='phones'>
          <a href="./thong-tin-san-pham.html"><img src='${imagePhone}' class='phones-img'></a>
          <a href="./thong-tin-san-pham.html">
          <h3 class='phones-name'>${phoneName}</h3>
          </a>
            <div class='price-product'>
              <div><h4 class='phones-price'>${phonePrice}</div>
              <div class='price-desc'> đ</div>
              </h4>
            </div> 
          <span class="phones-inch"> Màn hình: ${screenPhone} Inch</span>
          <button class='add-cart'>Thêm vào giỏ hàng</button>
          <p class='phones-desc'>Tặng: <span class="active">Cường lực - Ốp lưng - Tai nghe</span> khi mua BHV
          <br/>
          Giảm thêm: <span class="active">100K</span> áp dụng HSSV mua BHV tại cửa hàng. 
          <a href="./thong-tin-san-pham.html"><span class='phones-more'>Chi tiết...</span></a>
          </p>
        </div>
      `;
  }
  $(
    "#total-phone"
  ).innerHTML = `<div class='total-phones'>${totalPhone} Sản phẩm</div>`;
}
renderDT();

/////
function choosePhone() {
  // xem chọn thương hiệu nào
  const arr1 = document.getElementsByClassName("brand");
  const brand_arr = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i].checked) brand_arr.push(arr1[i].value);
  }

  // xem chọn khoảng giá nào
  const arr2 = document.getElementsByClassName("price");
  const price_arr = [];
  for (i = 0; i < arr2.length; i++) {
    if (arr2[i].checked) price_arr.push(arr2[i].value);
  }

  // xem chọn màn hình khoảng nào
  const arr3 = document.getElementsByClassName("screen");
  const screen_arr = [];
  for (i = 0; i < arr3.length; i++) {
    if (arr3[i].checked) screen_arr.push(arr3[i].value);
  }

  renderDT(brand_arr, price_arr, screen_arr);
}

arr = $$("#accordion input");
for (i = 0; i < arr.length; i++) arr[i].addEventListener("change", choosePhone);

// hàm mở menu leftColumn
function handleMenu() {
  leftColumn.classList.add("display-block");
}

// hàm đóng menu leftColumn
function hideMenu() {
  leftColumn.classList.remove("display-block");
}

menuBtn.addEventListener("click", handleMenu);
//
hideBtn.addEventListener("click", hideMenu);
$("#list-phones").addEventListener("click", hideMenu);
header.addEventListener("click", hideMenu);
$("#total-phone").addEventListener("click", hideMenu);

// accordion right
itemActive.forEach((item) => {
  item.onclick = function () {
    $(".accordion-desc.active").classList.remove("active");
    this.classList.add("active");
  };
});

// pagination
pageNumber.forEach((page, index) => {
  page.addEventListener("click", () => {
    if ($(".pagination__page-number.active2")) {
      $(".pagination__page-number.active2").classList.remove("active2");
    }
    pageNumber[index].classList.add("active2");
  });
});

// handle footer search input
// hiện btn delete
function handleFooterSearch(e) {
  const inputValue = e.target.value;
  if (inputValue.length > 0) {
    footerInputIconDelete.classList.add("display-block");
  }
  if (inputValue.length == 0) {
    footerInputIconDelete.classList.remove("display-block");
  }
}
// khi click vào nút delete
function handleFooterDelete() {
  footerInput.value = "";
  footerInputIconDelete.classList.remove("display-block");
  footerInput.focus();
}

footerInputIconDelete.addEventListener("click", handleFooterDelete);
footerInput.addEventListener("input", handleFooterSearch);
///

//////// addCart
const addCart = $$(".add-cart");
addCart.forEach((btn, index) => {
  // toastMsg
  function handleAddCart() {
    // toast msg
    const toast = document.createElement("div");
    toast.innerHTML = `<div class="toast__msg">
    <i class="fa-solid fa-circle-check toast-icon"></i>
    <p class="toast-title">Bạn đã thêm sản phẩm vào giỏ hàng</p>
  </div>`;

    toastMsg.appendChild(toast);
    //

    const product = btn.parentElement;
    const productImg = product.querySelector(".phones-img").src;
    const productName = product.querySelector(".phones-name").innerText;
    const productPrice = product.querySelector(".phones-price").innerText;

    listCart(productImg, productName, productPrice);
  }

  btn.addEventListener("click", handleAddCart);
});

// render toast msg
const cart = document.getElementById("cart-list");
function listCart(productImg, productName, productPrice) {
  const divElement = document.createElement("div");
  const cartItems = $$(".cart__product");

  var value1 = 1;
  const cartItemsNames = $$(".cart__phone-name");
  for (i = 0; i < cartItems.length; i++) {
    if (cartItemsNames[i].innerHTML == productName) {
      const toast = document.createElement("div");
      toast.innerHTML = `<div class="toast__msg warning">
      <i class="fa-solid fa-circle-exclamation toast-icon warning"></i>
      <p class="toast-title warning">Sản phẩm đã có trong giỏ hàng</p>
    </div>`;

      toastMsg.appendChild(toast);
      return;
    }
  }
  // setTimeout(() => {
  //   toastMsg.remove();
  // }, 3000);

  // ẩn class cart-empty
  if (cartItems.length > -1) {
    cartEmpty.classList.add("display-none");
  }

  // render cart
  divElement.innerHTML = `
    <div class="wrapper">
      <div class="cart__product">
      <img src=${productImg} class="cart__phone-img"> 
      <h2 class="cart__phone-name">${productName}</h2> 
      
        <div class="cart__right">
          <div class='price-cart'>
            <div><p class="cart__phone-price">${productPrice} </p></div>
            <div class='price-desc-cart'> đ</div>
          </div>

          <input type="number" value=${value1} min="1" class="product-quantily">
          <button class="cart__delete-icon">Xóa</button>
        </div>
      </div>
    </div>
  `;

  cart.appendChild(divElement);

  cartTotal();

  // handle delete product
  deleteProduct();
}

// tính tổng
function cartTotal() {
  const cartItems = $$(".cart__product");
  var total = 0;

  for (i = 0; i < cartItems.length; i++) {
    const inputValue = cartItems[i].querySelector(".product-quantily").value;

    const productPrice =
      cartItems[i].querySelector(".cart__phone-price").innerHTML;
    const newProductPrice = productPrice.split(",").join("");

    const totalPrice = inputValue * newProductPrice;

    total += totalPrice;
  }

  const newTotal = total.toLocaleString("ed-DE");
  const cartTotal = ($(".cart-total").innerHTML = `Tổng tiền: ${newTotal} đ`);
}

// delete cart
function deleteProduct() {
  const deleteCartBtn = $$(".cart__delete-icon");

  deleteCartBtn.forEach((btn) => {
    btn.onclick = function () {
      btn.parentElement.parentElement.remove();

      const cartItems = $$(".cart__product");
      var total = 0;

      // hiện class cart-empty
      if (cartItems.length < 1) {
        cartEmpty.classList.add("display-block");
      }

      for (i = 0; i < cartItems.length; i++) {
        // tính tổng tiền
        const inputValue =
          cartItems[i].querySelector(".product-quantily").value;

        const productPrice =
          cartItems[i].querySelector(".cart__phone-price").innerHTML;
        const newProductPrice = productPrice.split(",").join("");

        const totalPrice = inputValue * newProductPrice;

        total += totalPrice;
      }

      const newTotal = total.toLocaleString("ed-DE");
      const cartTotal = ($(
        ".cart-total"
      ).innerHTML = `Tổng tiền: ${newTotal} đ`);
    };
  });
}

// chặn sự kiện dèault
$(".cart-buy").onclick = function (e) {
  e.preventDefault();
};

// cập nhập lại tổng tiền
const reloadPrice = $(".reload-price");
reloadPrice.addEventListener("click", function (e) {
  const cartItems = $$(".cart__product");
  var total = 0;

  for (i = 0; i < cartItems.length; i++) {
    // tính tổng tiền
    const inputValue = cartItems[i].querySelector(".product-quantily").value;

    const productPrice =
      cartItems[i].querySelector(".cart__phone-price").innerHTML;
    const newProductPrice = productPrice.split(",").join("");

    const totalPrice = inputValue * newProductPrice;

    total += totalPrice;
  }

  const newTotal = total.toLocaleString("ed-DE");
  const cartTotal = ($(".cart-total").innerHTML = `Tổng tiền: ${newTotal} đ`);
});

/// ẩn hiện nút goToTop
function handleScroll() {
  if (window.scrollY > 600) {
    // show
    goToTopBtn.classList.add("display-block");
  } else {
    // hide
    goToTopBtn.classList.remove("display-block");
  }
}
const scrollY = window.addEventListener("scroll", handleScroll);
/////
