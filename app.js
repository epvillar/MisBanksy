const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Amor",
    price: 119,
    colors: [
      {
        code: "lightgreen",
        img: "./img/slide1.jpg",
      },
      {
        code: "lightblue",
        img: "./img/slide1a.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Flores",
    price: 149,
    colors: [
      {
        code: "lightblue",
        img: "./img/slide3.jpg",
      },
      {
        code: "lightgreen",
        img: "./img/slide3a.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Invierno",
    price: 109,
    colors: [
      {
        code: "lightgreen",
        img: "./img/slide4.jpg",
      },
      {
        code: "lightblue",
        img: "./img/slide4a.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Tristeza",
    price: 129,
    colors: [
      {
        code: "lightblue",
        img: "./img/slide5.jpg",
      },
      {
        code: "lightgreen",
        img: "./img/slide5.jpeg",
      },
    ],
  },
  {
    id: 5,
    title: "Engaño",
    price: 99,
    colors: [
      {
        code: "lightgreen",
        img: "./img/slide7.jpg",
      },
      {
        code: "lightblue",
        img: "./img/slide7a.jpg",
      },
    ],
  },
];
// 49.26
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

// 59.03
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// 1.13
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});