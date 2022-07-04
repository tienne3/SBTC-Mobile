const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


// handle search input
const searchInput = $('.seacrhInput')
const inputDelete = $('.input__delete')

function handleSearch(e) {
    const inputValue = e.target.value
    if(inputValue.length > 0) {
        inputDelete.classList.add('display-block')
    } 
    if (inputValue.length == 0) {
        inputDelete.classList.remove('display-block')
    }
}
function handleDelete() {
    searchInput.value = ''
    inputDelete.classList.remove('display-block')
    searchInput.focus()
}

inputDelete.addEventListener('click', handleDelete)
searchInput.addEventListener('input', handleSearch)



/// change background
const changeImgs = $('.change-img')
const imgTag = $('.show-img')
var index = 1
const imgs = [
    'assets/img/background-show/banner-xiaomi-12.jpg',
    'assets/img/background-show/banner-iphone-12-nhat.jpg',
    'assets/img/background-show/banner-realme-q5-pro.jpg',
    'assets/img/background-show/banner-redmi-k50-gaming-2.png',
    'assets/img/background-show/banner-samsung-galaxy-s20-series.jpg',
]   

changeBackground = () => {
    imgTag.setAttribute('src', imgs[index])
    index++
    if (index == imgs.length) index = 0
}

setInterval(changeBackground, 4000);

///////
var arrDT = [
    {
        tenDT: 'OPPO Reno8 Pro',
        gia: 18300000,
        giaTien: '18,300,000',
        hinh: './assets/img/oppo-reno-8pro-vang.jpg',
        thuonghieu: 'OPPO',
        manhinh: '6'
    },
    {
        tenDT: 'Nubia Red Magic 7',
        gia: 13950000,
        giaTien: '13,950,000',
        hinh: './assets/img/nubia-red-magic-7-trong-suot.jpg',
        thuonghieu: 'Xiaomi',
        manhinh: '6.2'
    },
    {
        tenDT: 'iPhone 13 Pro Chính hãng VN/A',
        gia: 26750000 ,
        giaTien: '26,750,000',
        hinh: './assets/img/iphone-13-pro-xanh.jpg',
        thuonghieu: 'Apple',
        manhinh: '6'
    },
    {
        tenDT: 'Xiaomi POCO F4 GT',
        gia: 19550000,
        giaTien: '19,550,000',
        hinh: './assets/img/poco-f4-gt-vang.jpg',
        thuonghieu: 'Xiaomi',
        manhinh: '6.3'
    },
    {
        tenDT: 'OPPO Reno6 Z',
        gia: 7550000,
        giaTien: '7,550,000',
        hinh: './assets/img/oppo-reno-6z-b.jpg',
        thuonghieu: 'OPPO',
        manhinh: '6'
    },
    {
        tenDT: 'Huawei Honor Magic V',
        gia: 27550000,
        giaTien: '27,550,000',
        hinh: './assets/img/honor-magic-v-3-2.jpg',
        thuonghieu: 'Huawei',
        manhinh: '6'
    },
    {
        tenDT: 'iPhone 11 cũ (64GB, 128GB)',
        gia: 12500000 ,
        giaTien: '12,500,000',
        hinh: './assets/img/iphone-11-tim.jpg',
        thuonghieu: 'Apple',
        manhinh: '5.1'
    },
    {
        tenDT: 'Vivo iQOO Z5 (Snap 778G)',
        gia: 6650000,
        giaTien: '6,650,000',
        hinh: './assets/img/vivo-iqoo-z5-den.jpg',
        thuonghieu: 'Vivo',
        manhinh: '5.8'
    },
    {
        tenDT: 'Samsung Galaxy S20 cũ (Hàn Quốc, Mỹ)',
        gia: 6950000,
        giaTien: '6,950,000',
        hinh: './assets/img/galaxy-s20-cu-xam.png',
        thuonghieu: 'Samsung',
        manhinh: '5.3'
    },
    {
        tenDT: 'iPhone 12 Nhật Bản (Mới 100%)',
        gia: 12950000,
        giaTien: '12,950,000',
        hinh: './assets/img/iphone-12-chinh-hang-blue.jpg',
        thuonghieu: 'Apple',
        manhinh: '5.8'
    },
    {
        tenDT: 'iPhone XS Max Cũ (64GB, 256GB)',
        gia: 7950000 ,
        giaTien: '7,950,000',
        hinh: './assets/img/iphone-xs-max-vang.jpg',
        thuonghieu: 'Apple',
        manhinh: '5.5'
    },
    {
        tenDT: 'Xiaomi 11T 5G (Chính hãng DGW)',
        gia: 8150000 ,
        giaTien: '8,150,000',
        hinh: './assets/img/mi-11t-xanh.jpeg',
        thuonghieu: 'Xiaomi',
        manhinh: '5.9'
    },
    {
        tenDT: 'OPPO Find X5 Pro',
        gia: 21950000,
        giaTien: '21,950,000',
        hinh: './assets/img/oppo-find-x5-pro-trang.jpg',
        thuonghieu: 'OPPO',
        manhinh: '5.9'
    },
    {
        tenDT: 'LG Velvet',
        gia: 4250000,
        giaTien: '4,250,000',
        hinh: './assets/img/lg-velvet-den.jpg',
        thuonghieu: 'LG',
        manhinh: '5.6'
    },
    {
        tenDT: 'Xiaomi Redmi Note 11 Pro (Bản China)',
        gia: 5950000,
        giaTien: '5,950,000',
        hinh: './assets/img/redmi-note-11-pro-xanh-rung-sau.jpg',
        thuonghieu: 'Xiaomi',
        manhinh: '6.1'
    },
    {
        tenDT: 'Huawei Honor 70 Pro',
        gia: 8950000,
        giaTien: '8,950,000',
        hinh: './assets/img/honor-70-pro-plus-gold.jpg',
        thuonghieu: 'Huawei',
        manhinh: '6.1'
    },
    {
        tenDT: 'OPPO Reno6 5G (Chính hãng)',
        gia: 9750000 ,
        giaTien: '9,750,000',
        hinh: './assets/img/oppo-reno6-bac-1-dai-dien.jpg',
        thuonghieu: 'OPPO',
        manhinh: '6.2'
    },
    {
        tenDT: 'Samsung Galaxy A53 5G (Chính hãng)',
        gia: 7950000 ,
        giaTien: '7,950,000',
        hinh: './assets/img/samsung-galaxy-a53-5g-8.jpg',
        thuonghieu: 'Samsung',
        manhinh: '5.8'
    },
    {
        tenDT: 'Samsung Galaxy A90 5G (Snap 855)',
        gia: 4850000,
        giaTien: '4,850,000',
        hinh: './assets/img/samsung-galaxy-a90-5g-den.jpg',
        thuonghieu: 'Samsung',
        manhinh: '5.7'
    },
    {
        tenDT: 'LG V50s ThinQ ',
        gia: 3850000 ,
        giaTien: '3,850,000 ',
        hinh: './assets/img/lg-v50-cu.jpg',
        thuonghieu: 'LG',
        manhinh: '5.8'
    },
    {
        tenDT: 'Samsung Galaxy M51 Chính hãng',
        gia: 5350000,
        giaTien: '5,350,000',
        hinh: './assets/img/samsung-galaxy-m51-trang.png',
        thuonghieu: 'Samsung',
        manhinh: '6'
    },
    {
        tenDT: 'iPhone 13 Chính hãng VN/A',
        gia: 21600000,
        giaTien: '21,600,000',
        hinh: './assets/img/iphone-13-xanh.jpg',
        thuonghieu: 'Apple',
        manhinh: '6.2'
    },
    {
        tenDT: 'Samsung Galaxy S20 Plus cũ (Hàn Quốc)',
        gia: 7950000,
        giaTien: '7,950,000',
        hinh: './assets/img/samsung-galaxy-s20-plus-cu-cloud-blue.jpg',
        thuonghieu: 'Samsung',
        manhinh: '6.2'
    },
    {
        tenDT: 'Huawei Honor Magic 4',
        gia: 23450000,
        giaTien: '23,450,000',
        hinh: './assets/img/honor-magic-4-vang.jpg',
        thuonghieu: 'Huawei',
        manhinh: '6.2'
    },
    {
        tenDT: 'Huawei Honor 70 Pro Plus',
        gia: 15950000,
        giaTien: '15,950,000',
        hinh: './assets/img/honor-70-pro-trang.png',
        thuonghieu: 'Huawei',
        manhinh: '6.4'
    },
    {
        tenDT: 'LG V60 ThinQ',
        gia: 5950000,
        giaTien: '5,950,000',
        hinh: './assets/img/lg-v60-xanh.jpg',
        thuonghieu: 'LG',
        manhinh: '6.2'
    },
    {
        tenDT: 'Samsung Galaxy S21 Ultra cũ (Hàn Quốc)',
        gia: 14250000,
        giaTien: '14,250,000',
        hinh: './assets/img/samsung-galaxy-s21-ultra-cu-den.jpg',
        thuonghieu: 'Samsung',
        manhinh: '6.3'
    },
    {
        tenDT: 'Xiaomi 12 (Snap 820 Gen 1)',
        gia: 15850000,
        giaTien: '15,850,000',
        hinh: './assets/img/xiaomi-12-xanh-bac-ha.jpg',
        thuonghieu: 'Xiaomi',
        manhinh: '6'
    },
    {
        tenDT: 'Xiaomi Redmi Note 11 (Chính hãng)',
        gia: 13650000,
        giaTien: '13,650,000',
        hinh: './assets/img/xiaomi-redmi-note-11-ngoc-trai.jpg',
        thuonghieu: 'Xiaomi',
        manhinh: '5.9'
    },
    {
        tenDT: 'Huawei Honor 60 SE',
        gia: 7950000,
        giaTien: '7,950,000',
        hinh: './assets/img/honor-60-se-5g-xanh.jpg',
        thuonghieu: 'Huawei',
        manhinh: '5.9'
    },
    {
        tenDT: 'Vivo iQOO Neo 5 Lite (Snap 870)',
        gia: 6750000,
        giaTien: '6,750,000',
        hinh: './assets/img/vivo-iqoo-neo-5-lite-3.jpg',
        thuonghieu: 'Vivo',
        manhinh: '5.6'
    },
    {
        tenDT: 'LG G8 ThinQ',
        gia: 4450000,
        giaTien: '4,450,000',
        hinh: './assets/img/lg-g8-xanh.jpg',
        thuonghieu: 'LG',
        manhinh: '5.6'
    },
]

// hàm render điện thoai
function renderDT(thuonghieuchon_arr=[], giaban_arr=[], manhinh_arr=[], sapxep_arr=[]) {
    let soDTduochien = 0
    const list1 = document.getElementById('list1')
    list1.innerHTML = ''
    for (var i = 0; i < arrDT.length; i++) {
        tenDT = arrDT[i].tenDT;
        giaDT = arrDT[i].gia;
        giaTien = arrDT[i].giaTien;
        hinh = arrDT[i].hinh;
        thuonghieuDT = arrDT[i].thuonghieu;
        manhinhDT = arrDT[i].manhinh;


        // lọc thương hiệu đc chọn
        if (thuonghieuchon_arr.length > 0) {
            if (thuonghieuchon_arr.includes(thuonghieuDT) == false) {
                continue
            }
        } 

        // lọc theo giá bán
        if (giaban_arr.length > 0) {
            if (giaDT < 5000000 && giaban_arr.includes('1') == false) continue
            if (giaDT >= 5000000 && giaDT < 10000000 && giaban_arr.includes('2') == false) continue
            if (giaDT >= 10000000 && giaDT < 15000000 && giaban_arr.includes('3') == false) continue
            if (giaDT >= 15000000 && giaDT < 20000000 && giaban_arr.includes('4') == false) continue
            if (giaDT >= 20000000 && giaban_arr.includes('5') == false) continue
        }
        
        // lọc theo màn hình
        if (manhinh_arr.length > 0) {
            if (Number(manhinhDT) < 6 && manhinh_arr.includes('1') == false) continue
            if (Number(manhinhDT) >= 6 && manhinh_arr.includes('2') == false) continue
        }

        // sắp xếp theo giá
        if (sapxep_arr.length > 0) {
            if (arrDT.sort((a, b) => - a.gia + b.gia) && sapxep_arr.includes('1') == false && thuonghieuchon_arr.includes(thuonghieuDT) == false) renderDT() 
            if (arrDT.sort((a, b) =>  a.gia - b.gia) && sapxep_arr.includes('2') == false && thuonghieuchon_arr.includes(thuonghieuDT) == false) renderDT()
        }


        soDTduochien++

        // render list dt
        list1.innerHTML += `
        <div class='dt'>
        <img src='${hinh}' class='dt-img'>
        <h3 class='dt-name'>${tenDT}</h3>
        <h4 class='dt-gia'>${giaTien}đ - ${manhinhDT} Inch</h4>
        <button class='mua-btn'>Mua</button>
        <p class='dt-desc'>Tặng: <span class="active">Cường lực - Ốp lưng - Tai nghe</span> khi mua BHV
        <br/>
        Giảm thêm: <span class="active">100K</span> áp dụng HSSV mua BHV tại cửa hàng. <span class='dt-more'>Chi tiết...</span></p>
        </div>
        `
    }
    $('#soDTduochien').innerHTML = ` 
    <div class='soDT'>${soDTduochien} Sản phẩm</div>`
}
renderDT()

/////
function chonDT() {
    // xem chọn thương hiệu nào
    const arr1 = document.getElementsByClassName('thuonghieu')
    const thuonghieuchon_arr = []
    for (i = 0; i < arr1.length; i++) {
        if (arr1[i].checked) thuonghieuchon_arr.push(arr1[i].value)
    }

    // xem chọn khoảng giá nào
    const arr2 = document.getElementsByClassName('giaban')
    const giaban_arr = []
    for (i = 0; i < arr2.length; i++) {
        if (arr2[i].checked) giaban_arr.push(arr2[i].value)
    }

    // xem chọn màn hình khoảng nào
    const arr3 = document.getElementsByClassName('manhinh')
    const manhinh_arr = []
    for (i = 0; i < arr3.length; i++) {
        if (arr3[i].checked) manhinh_arr.push(arr3[i].value)
    }

    const arr4 = document.getElementsByClassName('sapxep')
    const sapxep_arr = []
    for (i = 0; i < arr4.length; i++) {
        if (arr4[i].checked) sapxep_arr.push(arr4[i].value)
    }

    renderDT(thuonghieuchon_arr, giaban_arr, manhinh_arr,sapxep_arr)
}

arr = $$('#accordion input')
for (var i = 0; i < arr.length; i++) arr[i].addEventListener('change', chonDT)


// // search input
// const seacrhInput = document.querySelector('.seacrhInput')
// function searchItem() {
//     const valueItem = seacrhInput.value
//     const timkiemDT_arr = []

//     Array.from(valueItem).forEach(function() {
//         if (valueItem) timkiemDT_arr.push(valueItem)
//     })

//     renderDT(timkiemDT_arr)
// }
// seacrhInput.addEventListener('keyup', searchItem)


// nav bars
const menuBtn = $('.list__item-icon')
const cottrai = $('#cottrai')
const hideBtn = $('.delete-icon')
const header = $('#header')

// hàm mở menu
function handleMenu() {
    cottrai.classList.add('display-block')
}

// hàm đóng menu
function deleteMenu() {
    cottrai.classList.remove('display-block')
}

menuBtn.addEventListener('click', handleMenu)
//
hideBtn.addEventListener('click', deleteMenu)
list1.addEventListener('click', deleteMenu)
header.addEventListener('click', deleteMenu)
$("#soDTduochien").addEventListener('click', deleteMenu)



// accordion last
const a = $$('.accordion-desc')
a.forEach(item => {
    item.onclick = function() {
        $('.accordion-desc.active').classList.remove('active')
        this.classList.add('active')
    }
})


// pagination
const pageNumber = $$('.pagination__page-number')

pageNumber.forEach( function(page, index) {
    page.onclick = function() {
        $('.pagination__page-number.active2').classList.remove('active2')

        this.classList.add('active2')
    }
});


// handle footer search input
const footerInput = $('.footer__input')
const footerInputDelete = $('.footer__input-delete')

function handleFooterSearch(e) {
    const inputValue1 = e.target.value
    if(inputValue1.length > 0) {
        footerInputDelete.classList.add('display-block')
    } 
    if (inputValue1.length == 0) {
        footerInputDelete.classList.remove('display-block')
    }
}
function handleFooterDelete() {
    footerInput.value = ''
    footerInputDelete.classList.remove('display-block')
    footerInput.focus()
}

footerInputDelete.addEventListener('click', handleFooterDelete)
footerInput.addEventListener('input', handleFooterSearch)

