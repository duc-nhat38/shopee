var category = (function () {
  let categories = [
    {
      image: "images/thoi-trang-nam.png",
      name: "thời trang nam",
    },
    {
      image: "images/dien-thoai.png",
      name: "phụ kiện & điện thoại",
    },
    {
      image: "images/thiet-bi-dien-tu.png",
      name: "thiết bị điện tử",
    },
    {
      image: "images/laptop.png",
      name: "máy tính & laptop",
    },
    {
      image: "images/may-anh.png",
      name: "máy ảnh - máy quay phim",
    },
    {
      image: "images/dong-ho.png",
      name: "đồng hồ",
    },
    {
      image: "images/day-dep-nam.png",
      name: "giày dép nam",
    },
    {
      image: "images/thiet-bi-da-dung.png",
      name: "thiết bị gia dụng",
    },
    {
      image: "images/the-thao-du-lich.png",
      name: "thể thao & du lịch",
    },
    {
      image: "images/xe-co.png",
      name: "ô tô - xe đạp -xe máy",
    },
    {
      image: "images/thoi-trang-nu.png",
      name: "thời trang nữ",
    },

    {
      image: "images/do-choi-tre-em.png",
      name: "mẹ & bé",
    },
    {
      image: "images/nha-cua-doi-song.png",
      name: "nhà của & đời sống",
    },
    {
      image: "images/sac-dep.png",
      name: "sức khỏe & sắc đẹp",
    },

    {
      image: "images/day-dep-nu.png",
      name: "giày dép nữ",
    },
    {
      image: "images/tui-vi.png",
      name: "túi ví",
    },
    {
      image: "images/phu-kien.png",
      name: "phụ kiện thời trang",
    },
    {
      image: "images/bach-hoa-online.png",
      name: "bách hóa online",
    },
    {
      image: "images/voucher.png",
      name: "voucher & dịch vụ",
    },
    {
      image: "images/sach-online.png",
      name: "nha sách online",
    },
    {
      image: "images/do-choi.png",
      name: "đồ chơi",
    },
    {
      image: "images/pe.png",
      name: "chăm sóc thú cưng",
    },
    {
      image: "images/giat-giu.png",
      name: "giặt giũ & chăm sóc nhà cửa",
    },
    {
      image: "images/thoi-trang-tre-em.png",
      name: "thời trang trẻ em",
    },
    {
      image: "images/san-pham-khac.png",
      name: "sản phẩm khác",
    },
  ];
  const widthDisplay = screen.width;
  var index = 0;
  var node;
  if (widthDisplay <= 375) {
    elements = 2;
  } else {
    if (widthDisplay <= 425) {
      elements = 3;
    } else {
      if (widthDisplay <= 768) {
        elements = 6;
      } else {
        elements = 10;
      }
    }
  }

  function getCategories() {
    let category = "";
    for (let i = 0; i < categories.length; i++) {
      if (i % 2 != 0) {
        continue;
      }
      if (i + 1 >= categories.length) {
        category += `
      <div class="category_items" hidden='false'>
        <a href="" title="${categories[i].name}">
          <img src="${categories[i].image}" alt="${categories[i].name}" />
          <span>${categories[i].name}</span>
        </a>
      </div>
        `;
      } else {
        category += `
        <div class="category_items">
          <a href="" title="${categories[i].name}">
            <img src="${categories[i].image}" alt="${categories[i].name}" />
            <span>${categories[i].name}</span>
          </a>
          <a href="" title="${categories[i + 1].name}">
            <img src="${categories[i + 1].image}" alt="${
          categories[i + 1].name
        }" />
            <span>${categories[i + 1].name}</span>
          </a>
        </div>
                  
          `;
      }
    }
    document.getElementsByClassName(
      "category_list_group"
    )[0].innerHTML = category;
    node = document.getElementsByClassName("category_list_group")[0].children;
    for (let k = 0; k < node.length; k++) {
      if (k >= elements) {
        node[k].style.display = "none";
      }
    }
  }

  function nextList() {
    for (var i = index; i < index + 3; i++) {
      if (i + elements >= node.length) {
        break;
      }
      node[i].style.display = "none";
      node[i + elements].style.display = "block";
      node[i + elements].style.display = "flex";
      node[i + elements].style.flexDirection = "column";
    }
    index = i;
    if (index + elements >= node.length) {
      document.getElementById("btn-category-next").style.display = "none";
    }
    document.getElementById("btn-category-prev").style.display = "block";
  }

  function prevList() {
    for (var i = index; i > index - 3; i--) {
      if (i - 1 < 0) {
        break;
      }
      node[i - 1].style.display = "block";
      node[i - 1].style.display = "flex";
      node[i - 1].style.flexDirection = "column";
      node[i + elements - 1].style.display = "none";
    }
    index = i;
    if (index <= 0) {
      document.getElementById("btn-category-prev").style.display = "none";
    }
    document.getElementById("btn-category-next").style.display = "block";
  }

  return {
    getCategories: getCategories,
    nextListCategory: nextList,
    prevListCategory: prevList,
  };
})();

var promotionCategory = (function () {
  let promotionCategories = [
    {
      name: "khung giờ săn sale",
      image: "images/setgif.gif",
    },
    {
      name: "hàng quốc tế  - đặc biệt",
      image: "images/td.png",
    },
    {
      name: "freeship xtra",
      image: "images/xtra.png",
    },
    {
      name: "săn siêu sale",
      image: "images/sale50.png",
    },
    {
      name: "hoàn xu đơn bất kỳ",
      image: "images/xtra.png",
    },
    {
      name: "shopee premium",
      image: "images/kc.png",
    },
    {
      name: "giảm giá cả trăm tỉ",
      image: "images/dola.png",
    },
    {
      name: "shopee mum's club",
      image: "images/mumclub.png",
    },
    {
      name: "shopee book club",
      image: "images/bookclub.png",
    },
    {
      name: "siêu thị điện tử",
      image: "images/mt.png",
    },
  ];
  const widthDisplay = screen.width;
  var index = 0;
  var node;
  var elements;
  if (widthDisplay <= 375) {
    elements = 2;
  } else {
    if (widthDisplay <= 425) {
      elements = 3;
    } else {
      if (widthDisplay <= 768) {
        elements = 6;
      } else {
        elements = 10;
      }
    }
  }

  function getPromotionCategories() {
    let listcategory = "";
    for (let i = 0; i < promotionCategories.length; i++) {
      listcategory += `
      <a href="${promotionCategories[i].name}">
        <img src="${promotionCategories[i].image}" alt="" />
        <span>${promotionCategories[i].name}</span>  
      </a>
      `;
    }
    document.getElementsByClassName(
      "promotion-categories"
    )[0].innerHTML = listcategory;
    node = document.getElementsByClassName("promotion-categories")[0].children;
    for (let j = 0; j < node.length; j++) {
      if (j >= elements) {
        node[j].style.display = "none";
      }
    }
  }

  function nextList() {
    for (var i = index; i < index + 4; i++) {
      if (i + elements >= node.length) {
        break;
      }
      node[i].style.display = "none";
      node[i + elements].style.display = "block";
      node[i + elements].style.display = "flex";
      node[i + elements].style.flexDirection = "column";
    }
    index = i;
    if (index + elements >= node.length) {
      document.getElementById("btn-promotion-category-next").style.display =
        "none";
    }
    document.getElementById("btn-promotion-category-prev").style.display =
      "block";
  }

  function prevList() {
    for (var i = index; i > index - 4; i--) {
      if (i - 1 < 0) {
        break;
      }
      node[i + elements - 1].style.display = "none";
      node[i - 1].style.display = "block";
      node[i - 1].style.display = "flex";
      node[i - 1].style.flexDirection = "column";
    }
    index = i;
    if (index <= 0) {
      document.getElementById("btn-promotion-category-prev").style.display =
        "none";
    }
    document.getElementById("btn-promotion-category-next").style.display =
      "block";
  }

  return {
    getPromotionCategories: getPromotionCategories,
    nextListCategory: nextList,
    prevListCategory: prevList,
  };
})();

var slideBanner = (function () {
  let imagesBanner = [
    {
      title: "banner",
      image: "./images/banner.jpeg",
    },
    {
      title: "banner",
      image: "./images/baner2.jpeg",
    },
    {
      title: "banner",
      image: "./images/banner3.jpeg",
    },
  ];
  var index = 0;

  function showSlide() {
    let listDot = "";
    for (let j = 0; j < imagesBanner.length; j++) {
      listDot += `<a href="javascript:;" onclick="slideBanner.callBanner(${j})" id="dot-${j}"></a>`;
    }
    document.getElementById("dot-banner").innerHTML = listDot;
    document.getElementById("banner").src = imagesBanner[index].image;
    document.getElementById("banner").alt = imagesBanner[index].title;
    document.getElementById(`dot-${index}`).classList.add("active");
    index++;
    if (index > imagesBanner.length - 1) {
      index = 0;
    }
  }

  function callBanner(element) {
    document.getElementById("banner").src = imagesBanner[element].image;
    document.getElementById("banner").alt = imagesBanner[element].title;
    document.getElementById(`dot-${element}`).classList.add("active");
  }

  return {
    showSlideBanner: showSlide,
    callBanner: callBanner,
  };
})();

var slideBannerMall = (function () {
  let imagesBannerMall = [
    {
      title: "banner-mall",
      image: "./images/banner-mall.jpeg",
    },
    {
      title: "banner-mall",
      image: "./images/banner-mall2.png",
    },
    {
      title: "banner-mall",
      image: "./images/banner-mall3.png",
    },
    {
      title: "banner-mall",
      image: "./images/banner-mall4.png",
    },
  ];
  let index = 0;

  function showSlide() {
    let listDotMall = "";
    for (let j = 0; j < imagesBannerMall.length; j++) {
      listDotMall += `<a href="javascript:;" onclick="slideBannerMall.callBannerMall(${j})" id="dot-mall-${j}"></a>`;
    }
    document.getElementById("dot-banner-mall").innerHTML = listDotMall;
    document.getElementById("banner-mall").src = imagesBannerMall[index].image;
    document.getElementById("banner-mall").alt = imagesBannerMall[index].title;
    document.getElementById(`dot-mall-${index}`).classList.add("active2");
    index++;
    if (index > imagesBannerMall.length - 1) {
      index = 0;
    }
  }

  function callBannerMall(element) {
    document.getElementById("banner-mall").src =
      imagesBannerMall[element].image;
    document.getElementById("banner-mall").alt =
      imagesBannerMall[element].title;
    document.getElementById(`dot-mall-${element}`).classList.add("active");
  }

  return {
    showSlideBannerMall: showSlide,
    callBannerMall: callBannerMall,
  };
})();

var productSale = (function () {
  let productSales = [
    {
      name: "Cục phát wifi TP-link",
      image: "images/product.jpg",
      price: "100.000",
      quantity: "30",
      quantitySold: "5",
    },
    {
      name: "product2",
      image: "./images/product-sale2.jpeg",
      price: "50.000",
      quantity: "35",
      quantitySold: "10",
    },
    {
      name: "product3",
      image: "./images/product-sale3.jpeg",
      price: "80.000",
      quantity: "40",
      quantitySold: "20",
    },
    {
      name: "product4",
      image: "./images/product-sale4.jpeg",
      price: "79.000",
      quantity: "50",
      quantitySold: "12",
    },
    {
      name: "Điện thoại",
      image: "./images/product-sale6.png",
      price: "100.000",
      quantity: "15",
      quantitySold: "2",
    },
    {
      name: "Sửa rửa mặt",
      image: "./images//dau-goi.jpeg",
      price: "7.000.000",
      quantity: "10",
      quantitySold: "2",
    },
  ];
  var widthDisplay = screen.width;
  var index = 0;
  var node;
  var elements;
  if (widthDisplay <= 375) {
    elements = 1;
  } else {
    if (widthDisplay <= 425) {
      elements = 2;
    } else {
      if (widthDisplay <= 768) {
        elements = 4;
      } else {
        elements = 6;
      }
    }
  }
  function showListProductSale() {
    let listProduct = "";
    let width;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < productSales.length; j++) {
        width = (productSales[j].quantitySold / productSales[j].quantity) * 100;
        listProduct += `
        <a href="">
        <img src="${productSales[j].image}" alt="${productSales[j].name}" />
        <div class="price_sale">${productSales[j].price} <sup>đ</sup></div>
        <div class="count_sale">
          <div class="count" style="width: ${width}%;"></div>
          <span>Đã bán ${productSales[j].quantitySold}</span>
        </div>
      </a>
        `;
      }
    }
    document.getElementsByClassName(
      "flash_sale_items"
    )[0].innerHTML = listProduct;
    node = document.getElementsByClassName("flash_sale_items")[0].children;
    for (let k = 0; k < node.length; k++) {
      if (k >= elements) {
        node[k].style.display = "none";
      }
    }
  }

  function nextList() {
    for (var i = index; i < index + 4; i++) {
      if (i + elements >= node.length) {
        break;
      }
      node[i].style.display = "none";
      node[i + elements].style.display = "block";
    }
    index = i;
    if (index + elements >= node.length) {
      document.getElementById("btn-sale-next").style.display = "none";
    }
    document.getElementById("btn-sale-prev").style.display = "block";
  }

  function prevList() {
    for (var i = index; i > index - 4; i--) {
      if (i - 1 < 0) {
        break;
      }
      node[i + elements - 1].style.display = "none";
      node[i - 1].style.display = "block";
    }
    index = i;
    if (index <= 0) {
      document.getElementById("btn-sale-prev").style.display = "none";
    }
    document.getElementById("btn-sale-next").style.display = "block";
  }

  return {
    showListProductSale: showListProductSale,
    nextListProductSale: nextList,
    prevListProductSale: prevList,
  };
})();

var productMallSale = (function () {
  let productMallSales = [
    {
      title: "nhận quà thả ga",
      image: "./images/./listerin.jpeg",
    },
    {
      title: "quà bạt ngàn",
      image: "./images//tiger.jpeg",
    },
    {
      title: "chống nắng dưỡng da",
      image: "./images//anessa.jpeg",
    },
    {
      title: "lock sale sock",
      image: "./images/lock-lock.jpeg",
    },
    {
      title: "ưu đã 30%",
      image: "./images/omo.jpeg",
    },
    {
      title: "giảm đến 40%",
      image: "./images/loreal.jpeg",
    },
    {
      title: "tặng tã độc quyền",
      image: "./images/huggies.jpeg",
    },
    {
      title: "săn siêu sale",
      image: "./images/wipro.jpeg",
    },
  ];
  var widthDisplay = screen.width;
  var index = 0;
  var node;
  var elements;
  if (widthDisplay <= 375) {
    elements = 1;
  } else {
    if (widthDisplay <= 425) {
      elements = 2;
    } else {
      if (widthDisplay <= 768) {
        elements = 3;
      } else {
        elements = 4;
      }
    }
  }
  
  function showProduct() {
    let listProduct = "";
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < productMallSales.length; j++) {
        if (j % 2 != 0) {
          continue;
        }
        if (j + 1 >= productMallSales.length) {
          listProduct += `
       <div>
          <a href="#">
            <img src="${productMallSales[j].image}" alt="${productMallSales[j].title}" />
            <span>${productMallSales[j].title}</span>
          </a>
       </div>
          
       `;
        } else {
          listProduct += `
       <div>
          <a href="#">
            <img src="${productMallSales[j].image}" alt="${
            productMallSales[j].title
          }" />
            <span>${productMallSales[j].title}</span>
          </a>
          <a href="#">
            <img src="${productMallSales[j + 1].image}" alt="${
            productMallSales[j + 1].title
          }" />
            <span>${productMallSales[j + 1].title}</span>
          </a>
       </div>
          
       `;
        }
      }
    }
    document.getElementsByClassName(
      "products_mall_list"
    )[0].innerHTML = listProduct;
    node = document.getElementsByClassName("products_mall_list")[0].children;
    for (let k = 0; k < node.length; k++) {
      if (k >= elements) {
        node[k].style.display = "none";
      }
    }
  }

  function nextProduct() {
    for (var i = index; i < index + 3; i++) {
      if (i + elements >= node.length) {
        break;
      }
      node[i].style.display = "none";
      node[i + elements].style.display = "block";
      node[i + elements].style.display = "flex";
      node[i + elements].style.flexDirection = "column";
    }
    index = i;
    if (index + elements >= node.length) {
      document.getElementById("btn-mall-next").style.display = "none";
    }
    document.getElementById("btn-mall-prev").style.display = "block";
  }

  function prevProduct() {
    for (var i = index; i > index - 3; i--) {
      if (i - 1 < 0) {
        break;
      }
      node[i + elements - 1].style.display = "none";
      node[i - 1].style.display = "block";
      node[i - 1].style.display = "flex";
      node[i - 1].style.flexDirection = "column";
    }
    index = i;
    if (index <= 0) {
      document.getElementById("btn-mall-prev").style.display = "none";
    }
    document.getElementById("btn-mall-next").style.display = "block";
  }

  return {
    showProductMallSale: showProduct,
    nextProductMallSale: nextProduct,
    prevProductMallSale: prevProduct,
  };
})();

var topSearch = (function () {
  let topProducts = [
    {
      name: "Áo thun nam",
      image: "./images/clothes-top-search.jpeg",
      quantitySold: "2",
    },
    {
      name: "Ốp địện thoại",
      image: "./images/mobile-top-search.jpeg",
      quantitySold: "5",
    },
    {
      name: "Dép nữ",
      image: "./images/dep.jpeg",
      quantitySold: "3",
    },
    {
      name: "Dây buộc tóc",
      image: "./images//day-buoc-toc.jpeg",
      quantitySold: "5",
    },
    {
      name: "Sạc dự phòng",
      image: "./images/sac-du-phong.jpeg",
      quantitySold: "2",
    },
    {
      name: "Son môi",
      image: "./images//son.jpeg",
      quantitySold: "4",
    },
  ];
  var index = 0;
  var node;
  const widthDisplay = screen.width;
  var elements;
  if (widthDisplay <= 375) {
    elements = 1;
  } else {
    if (widthDisplay <= 425) {
      elements = 2;
    } else {
        elements = 3;
    }
  }
  function showProduct() {
    let listProduct = "";
    for (let i = 0; i < topProducts.length; i += 3) {
      listProduct += `
      <a href="#">
      <div class="top_search_item_img">
        <img src="${topProducts[i].image}" alt="" />
        <div class="top_search_item_text">Bán ${
          topProducts[i].quantitySold
        }k+ /tháng</div>
      </div>
      <span>${topProducts[i].name}</span>
    </a>
    <a href="#" id="item_border_left_right">
      <div class="top_search_item_img">
        <img src="${topProducts[i + 1].image}" alt="" />
        <div class="top_search_item_text">Bán ${
          topProducts[i + 1].quantitySold
        }k+ /tháng</div>
      </div>
      <span>${topProducts[i + 1].name}</span>
    </a>
    <a href="#">
      <div class="top_search_item_img">
        <img src="${topProducts[i + 2].image}" alt="" />
        <div class="top_search_item_text">Bán ${
          topProducts[i + 2].quantitySold
        }k+ /tháng</div>
      </div>
      <span>${topProducts[i + 2].name}</span>
    </a>
      `;
    }
    document.getElementsByClassName(
      "top_search_items"
    )[0].innerHTML = listProduct;
    node = document.getElementsByClassName("top_search_items")[0].children;
    for (let j = 0; j < node.length; j++) {
      if (j >= elements) {
        node[j].style.display = "none";
      }
    }
  }

  function nextProduct() {
    for (var i = index; i < index + 3; i++) {
      if (i + elements >= node.length) {
        break;
      }
      node[i].style.display = "none";
      node[i + elements].style.display = "block";
    }
    index = i;
    if (index + elements >= node.length) {
      document.getElementById("btn-top-search-next").style.display = "none";
    }
    document.getElementById("btn-top-search-prev").style.display = "block";
  }

  function prevProduct() {
    for (var i = index; i > index - 3; i--) {
      if (i - 1 < 0) {
        break;
      }
      node[i - 1].style.display = "block";
      node[i + elements - 1].style.display = "none";
    }
    index = i;
    if (index <= 0) {
      document.getElementById("btn-top-search-prev").style.display = "none";
    }
    document.getElementById("btn-top-search-next").style.display = "block";
  }

  return {
    showProductTopSearch: showProduct,
    nextvProductTopSearch: nextProduct,
    prevProductTopSearch: prevProduct,
  };
})();

var product = (function () {
  let products = [
    {
      name: "khay ăn cho bé",
      image: "./images/product3.jpeg",
      description:
        "Khay ăn dặm lúa mạch kiểu nhật hình gà vàng ngộ nghĩnh đáng yêu an toàn cao cấp AD11",
      price: "20.000",
      quantitySold: "350",
    },
    {
      name: "nuớc hoa khô",
      image: "./images/product2.jpg",
      description: "nước hoa khô rắn hương thơm lâu khử mùi cho nam và nữ",
      price: "30.000",
      quantitySold: "150",
    },
    {
      name: "kẹo ampelipe",
      image: "./images/total-product2.jpeg",
      description:
        "[HÀNG HOT] Kẹo Thỏi Alpenliebe Hương Xoài Nhân Muối Ớt Siêu Ngon",
      price: "5.000",
      quantitySold: "350",
    },
    {
      name: "Khăn Tắm",
      image: "./images/total-product1.jpeg",
      description: "Khăn Tắm Lông Cừu Cao Cấp 35x75cm Siêu Thấm Hút",
      price: "24.000",
      quantitySold: "50",
    },
    {
      name: "móc treo",
      image: "./images/total-product3.jpeg",
      description: "Móc treo bằng nhựa hình động vật",
      price: "20.000",
      quantitySold: "350",
    },
    {
      name: "đồng hồ thông minh",
      image: "./images/total-product4.jpeg",
      description: "đồng hồ thông minh có kháng nước, kháng bụi",
      price: "2.000.000",
      quantitySold: "50",
    },
    {
      name: "ốp điện thoại",
      image: "./images/total-product5.jpeg",
      description: "ốp điện thoại màu xanh cho iphone 12",
      price: "60.000",
      quantitySold: "350",
    },
    {
      name: "keo lột mụn",
      image: "./images/total-product6.jpeg",
      description: "keo lột mụn cực hiệu quả",
      price: "40.000",
      quantitySold: "350",
    },
    {
      name: "túi",
      image: "./images/total-product7.jpeg",
      description: "túi đeo siêu đẹp",
      price: "150.000",
      quantitySold: "100",
    },
    {
      name: "dép nam",
      image: "./images/total-product8.jpeg",
      description: "dép nam đúc hãng adidas ",
      price: "69.000",
      quantitySold: "500",
    },
    {
      name: "khay ăn cho bé",
      image: "./images/total-product9.jpeg",
      description:
        "Khay ăn dặm lúa mạch kiểu nhật hình gà vàng ngộ nghĩnh đáng yêu an toàn cao cấp AD11",
      price: "20.000",
      quantitySold: "450",
    },
    {
      name: "móc treo",
      image: "./images/total-product10.jpeg",
      description: "móc treo trong suốt cực kỳ chắc chắn",
      price: "20.000",
      quantitySold: "350",
    },
  ];

  function getProductstoday(times) {
    let listProductToday = "";

    for (let i = 0; i < times; i++) {
      for (let j = 0; j < products.length; j++) {
        listProductToday += `
        <div class="product">
        <a href="">
        <div class="product_img">
          <img src="${products[j].image}" alt="${products[j].name}" />
          <img src="images/10-10-rvd.png" alt="" class="img_sale"/>
        </div>        
        <div class="description_product">
          <div class="description">
          ${products[j].description}
          </div>
          <div class="price_quantity_sold">
            <div class="price"><small><sup>đ</sup></small> ${products[j].price}</div>
            <div class="quantity_sold">Đã bán ${products[j].quantitySold}</div>
          </div>
        </div>
        </a>
        <div class="similar_product">
          <a href="#">Tìm sản phẩm tương tự</a>
        </div>
      </div>
        `;
      }
    }
    document.getElementById("list_products").innerHTML = listProductToday;
    document.getElementById("suggestion_today").style.borderBottom =
      "4px solid var(--main-color)";
    document.getElementById("product_male_sale").style.borderBottom = "none";
  }

  function getProductsMallSale(times) {
    let listProductMallSale = "";

    for (let i = 0; i < times; i++) {
      for (let j = products.length - 1; j >= 0; j--) {
        listProductMallSale += `
        <div class="product">
        <a href="">
        <div class="product_img">
          <img src="${products[j].image}" alt="${products[j].name}" />
          <img src="images/10-10-rvd.png" alt="" class="img_sale"/>
        </div>
        <div class="description_product">
          <div class="description">
          ${products[j].description}
          </div>
          <div class="price_quantity_sold">
            <div class="price"><small><sup>đ</sup></small> ${products[j].price}</div>
            <div class="quantity_sold">Đã bán ${products[j].quantitySold}</div>
          </div>
        </div>
        </a>
        <div class="similar_product">
          <a href="#">Tìm sản phẩm tương tự</a>
        </div>
      </div>
        `;
      }
    }
    document.getElementById("list_products").innerHTML = listProductMallSale;
    document.getElementById("product_male_sale").style.borderBottom =
      "4px solid var(--main-color)";
    document.getElementById("suggestion_today").style.borderBottom = "none";
  }

  function seeMoreProducts() {
    let node = document.getElementById("product_male_sale").style.borderBottom;
    if (node == "none") {
      return getProductstoday(4);
    }
    return getProductsMallSale(4);
  }

  return {
    getProductsToday: getProductstoday,
    getProductsMallSale: getProductsMallSale,
    seeMoreProducts: seeMoreProducts,
  };
})();

var scrollPage = (function () {
  function checkScroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("btn-back-to-top").style.display = "block";
    } else {
      document.getElementById("btn-back-to-top").style.display = "none";
    }
  }
  function scroll() {
    setTimeout(function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 500);
  }

  return {
    checkScroll: checkScroll,
    scroll: scroll,
  };
})();

var trendSearch = (function(){
  var categories = [
    {
      'name' : 'sandal nữ',
      'image' : './images/sandal-female.jpeg',
      'quantity' : '307'
    },
    {
      'name' : 'balo nữ',
      'image' : './images/balo-female.jpeg',
      'quantity' : '257'
    },
    {
      'name' : 'balo nam',
      'image' : './images/balo-male.jpeg',
      'quantity' : '310'
    },
    {
      'name' : 'dép nam',
      'image' : './images/sandal-male.jpeg',
      'quantity' : '250'
    },
    {
      'name' : 'áo nữ',
      'image' : './images/clothes-female.jpeg',
      'quantity' : '307'
    }
  ];
  var node;
  const widthDisplay = screen.width;
  var elements;
  var index = 0;
  if (widthDisplay <= 425) {
    elements = 2;
  }else{
    elements = 5;
  }
  function getCategory(){
    let listCategory = '';
    for (let i = 0; i < categories.length; i++) {
      listCategory += 
      `
      <a href="#">
              <div class="category_section_items_text">
                <span>${categories[i].name}</span>
                <span class="items_text_opacity">${categories[i].quantity}k+ sản phẩm</span>
              </div>
              <img src="${categories[i].image}" alt="" />
            </a>
      `; 
      
    }
    document.getElementsByClassName('category_section_items')[0].innerHTML = listCategory;
    node = document.getElementsByClassName('category_section_items')[0].children;
    for (let j = 0; j < node.length; j++) {
      if (j >= elements){
        node[j].style.display = 'none';
      }      
    }
  }

  function nextCategory() {
    for (var i = index; i < index + 2; i++) {
      if (i + elements >= node.length) {
        break;
      }
      node[i].style.display = "none";
      node[i + elements].style.display = "block";
      node[i + elements].style.display = "flex";
    }
    index = i;
    if (index + elements >= node.length) {
      document.getElementById("btn-category-trend-next").style.display = "none";
    }
    document.getElementById("btn-category-trend-prev").style.display = "block";
  }

  function prevCategory() {
    for (var i = index; i > index - 2; i--) {
      if (i - 1 < 0) {
        break;
      }
      node[i - 1].style.display = "block";
      node[i - 1].style.display = "flex";
      node[i + elements - 1].style.display = "none";
    }
    index = i;
    if (index <= 0) {
      document.getElementById("btn-category-trend-prev").style.display = "none";
    }
    document.getElementById("btn-category-trend-next").style.display = "block";
  }

  return {
    getCategory:getCategory,
    nextCategory : nextCategory,
    prevCategory  : prevCategory
  }
})();


var events = (function(){
  var index = 0;
  function showMenu(){
    if(index == 0){
      document.getElementsByClassName('list_menu')[0].style.display = 'block';
      document.getElementsByClassName('list_menu')[0].style.display = 'flex';
      document.getElementsByClassName('list_menu')[0].style.flexDirection = 'column';
    }else{
      document.getElementsByClassName('list_menu')[0].style.display = 'none';
    }   
    (index == 0)?index = 1: index = 0;
}

return {
  showListMenu : showMenu
}
})();

window.onload = function () {
  slideBanner.showSlideBanner();

  slideBannerMall.showSlideBannerMall();

  promotionCategory.getPromotionCategories();

  category.getCategories();

  productSale.showListProductSale();

  productMallSale.showProductMallSale();

  trendSearch.getCategory();

  topSearch.showProductTopSearch();

  product.getProductsToday(2);

  setInterval(function () {
    slideBanner.showSlideBanner();
    slideBannerMall.showSlideBannerMall();
  }, 4000);

  window.onscroll = function () {
    scrollPage.checkScroll();
  };


};
