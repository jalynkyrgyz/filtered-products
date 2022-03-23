const products = [
    {
      id: 1,
      title: "Ноутбук Sony Vaio VPC-YB2L1R AMD Fusion E-350",
      category: "laptops",
      price: 19950,
      img: "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
      desc: "Процессор: E-350 Частота процессора: 1600 МГц Объем жесткого диска: 320 ГБ Диагональ экрана: 11.6, Видеокарта: ATI Radeon HD 6310M Вес: 1.46 кг Оптический привод: DVD нет Bluetooth: есть Wi-Fi: есть",
    },
    {
      id: 2,
      title: "Apple iPhone 12",
      category: "phones",
      price: 74350,
      img: "https://www.kivano.kg/images/product/85005/full/1643526274_78712300.png",
      desc: "iOS 14, поддержка SIM-карт (nano SIM+eSIM), экран 6.1, разрешение 2532x1170, двойная камера: сверхширокоугольная (12 МП), широкоугольная, процессор Apple A14 Bionic, память 128 ГБ, без слота для карт памяти, 3G, 4G LTE, 5G, LTE-A, Wi-Fi, Bluetooth, NFC, вес 164 г, ШxВxТ 71.50x146.70x7.40 мм",
    },
    {
      id: 3,
      title: "Hello",
      category: "laptops",
      price: 68900 ,
      img: "https://www.kivano.kg/images/product/104704/full/1648051010_75742300.jpg",
      desc: "Операционная система DOS; процессор Intel Core i3-10110U (2/4) 2100 - 4100 MHz; видеоадаптер NVIDIA MX230; экран 15.6; TN 1920x1080; оперативная память 8 GB DDR4; накопитель SSD 512 GB; DVDRW нет; вес от 1.9 кг",
    },
    {
      id: 4,
      title: "Телевизор LG OLED65CXRLA",
      category: "tv",
      price: 219980,
      img: "https://www.kivano.kg/images/product/92929/full/1621780991_50190300.jpg",
      desc: "разрешение: 4K UHD (3840x2160), HDR диагональ экрана: 65 частота обновления экрана: 100 Гц формат HDR: Dolby Vision, HDR 10 Pro мощность звука: 40 Вт (2х10 + 2х10 Вт) платформа Smart TV: webOS",
    },
    {
      id: 5,
      title: "Xiaomi Poco M4",
      category: "phones",
      price: 74350,
      img: "https://www.kivano.kg/images/product/101937/full/1640705458_08813300.png",
      desc: "экран: 6.6 (2400x1080) 90 Гц встроенная память: 64 ГБ оперативная память: 4 ГБ двойная камера: 50 МП, 8 МП аккумулятор: 5000 мА·ч SIM-карты: 2 (nano SIM) операционная система: Android 11 беспроводные интерфейсы: NFC, Bluetooth, инфракрасный порт (IRDA), Wi-Fi стандарт связи: 4G LTE, 5G, 3G, 2G вес: 195 г",
    },
    {
      id: 6,
      title: "Телевизор Philips 43PUS7406",
      category: "tv",
      price: 54550,
      img: "https://www.kivano.kg/images/product/99876/full/1635932704_96809000.jpg",
      desc: "Телевизор 4K; диагональ экрана 43; разрешение 3840 х 2160; Smart TV; поддержка Wi-Fi есть; частота развертки 60 Гц; поддержка DVB-T2 есть",
    },
  
];

window.addEventListener("load", function () {
  const productsInner = document.querySelector(".products__inner");
  const filterBtns = document.querySelectorAll(".products__filters-btn");

  displayProductsItems(products);

  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.cat;

      const productCategory = products.filter(function(item) {
        if (item.category === category) {
          return item;
        }
      });

      if (category === "all") {
        displayProductsItems(products);
      } else {
        displayProductsItems(productCategory);
      }
    });
  });

  function displayProductsItems(products) {
    let displayProducts = products.map(function (item) {
      return `
      <article key="${item.id}" class="products__item">
        <img class="products__item-photo" src="${item.img}" alt=""/>
        <div class="products__item-info">
        <header>
          <h3>${item.title}</h3>
          <span class="products__item-price">${item.price}сом</span>
        </header>
        <p class="products__item-text">
          ${item.desc}
        </p>
        </div>
      </article>
    `;
    });
  
    displayProducts = displayProducts.join("");
    productsInner.innerHTML = displayProducts;
  }


})





