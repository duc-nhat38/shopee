let categories = [
  {
    image: "images/Shopee-logo-1.jpg",
    name: "thời trang nam",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "phụ kiện & điện thoại",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "thiết bị điện tử",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "máy tính & laptop",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "máy ảnh - máy quay phim",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "đồng hồ",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "giày dép nam",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "thiết bị gia dụng",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "thể thao & du lịch",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "ô tô - xe đạp -xe máy",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "thời trang nữ",
  },

  {
    image: "images/Shopee-logo-1.jpg",
    name: "mẹ & bé",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "nhà của & đời sống",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "sức khỏe & sắc đẹp",
  },

  {
    image: "images/Shopee-logo-1.jpg",
    name: "giày dép nữ",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "túi ví",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "phụ kiện thời trang",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "bách hóa online",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "voucher & dịch vụ",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "nha sách online",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "đồ chơi",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "chăm sóc thú cưng",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "giặt giũ & chăm sóc nhà cửa",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "thời trang trẻ em",
  },
  {
    image: "images/Shopee-logo-1.jpg",
    name: "sản phẩm khác",
  },
];
function getCategories() {
  let category = "";
  for (let i = 0; i < 20; i++) {
    category += `
        <a href="" title="${categories[i].name}">
            <img src="${categories[i].image}" alt="${categories[i].name}" />
            <span>${categories[i].name}</span>
        </a>      
      `;
  }
  document.getElementsByClassName(
    "category_list_group"
  )[0].innerHTML = category;
}
getCategories();

let promotionCategories = [
  {
    'name': 'khung giờ săn sale',
    'image' : 'images/setgif.gif'
  },
  {
    'name': 'hàng quốc tế  - đặc biệt',
    'image' : 'images/td.png'
  },
  {
    'name': 'freeship xtra',
    'image' : 'images/xtra.png'
  },
  {
    'name': 'săn siêu sale',
    'image' : 'images/sale50.png'
  },
  {
    'name': 'hoàn xu đơn bất kỳ',
    'image' : 'images/xtra.png'
  },
  {
    'name': 'shopee premium',
    'image' : 'images/kc.png'
  },
  {
    'name': 'giảm giá cả trăm tỉ',
    'image' : 'images/dola.png'
  },
  {
    'name': "shopee mum's club",
    'image' : 'images/mumclub.png'
  },
  {
    'name': 'shopee book club',
    'image' : 'images/bookclub.png'
  },
  {
    'name': 'siêu thị điện tử',
    'image' : 'images/mt.png'
  },

];

function getPromotionCategories() {
  let listcategory = '';
  for (let i = 0; i < promotionCategories.length; i++) {
    listcategory += 
    `
    <a href="${promotionCategories[i].name}">
      <img src="${promotionCategories[i].image}" alt="" />
      <span>${promotionCategories[i].name}</span>  
    </a>
    `;
    
  }
  document.getElementsByClassName('promotion-categories')[0].innerHTML = listcategory;
}
getPromotionCategories();


function getProductsToday() {
  let listProductToday = "";
  let producttoday = `
    <div class="product grid-item">
                <div class="product_img">
                  <img src="images/product3.jpeg" alt="" />
                  <img src="images/10-10-rvd.png" alt="" class="img_sale"/>
                </div>
                <div class="description_product">
                  <div class="description">
                    nước hoa khô rắn hương thơm lâu khử mùi cho nam và nữ
                  </div>
                  <div class="price_quantity_sold">
                    <div class="price"><small><sup>đ</sup></small> 1000</div>
                    <div class="quantity_sold">Đã bán 350</div>
                  </div>
                </div>
                <div class="similar_product">
                  <a href="#">Tìm sản phẩm tương tự</a>
                </div>
              </div>
    `;

  for (let i = 0; i < 18; i++) {
    listProductToday += producttoday;
  }
  document.getElementById("list_products").innerHTML = listProductToday;
  document.getElementById("suggestion_today").style.borderBottom = "4px solid var(--main-color)";
  document.getElementById("product_male_sale").style.borderBottom = "none";
}
getProductsToday();

function showProductsMallSale() {
  let listProductMallSale = "";
  let productMallSale = `
  
    <div class="product grid-item">
                <div class="product_img">
                  <img src="images/product2.jpg" alt="" />
                  <img src="images/10-10-rvd.png" alt="" class="img_sale"/>
                </div>
                <div class="description_product">
                  <div class="description">
                    nước hoa khô rắn hương thơm lâu khử mùi cho nam và nữ
                  </div>
                  <div class="price_quantity_sold">
                    <div class="price"><small><sup>đ</sup></small> 1000</div>
                    <div class="quantity_sold">Đã bán 350</div>
                  </div>
                </div>
                <div class="similar_product">
                  <a href="#">Tìm sản phẩm tương tự</a>
                </div>
              </div>
    `;
  for (let i = 0; i < 18; i++) {
    listProductMallSale += productMallSale;
  }
  document.getElementById("list_products").innerHTML = listProductMallSale;
  document.getElementById("product_male_sale").style.borderBottom = "4px solid var(--main-color)";
  document.getElementById("suggestion_today").style.borderBottom = "none";
}
