let openShopping =document.querySelector('.shop');

// let closeShopping =document.querySelector('.closeShopping');
let card = document.querySelector('.card');
let closeShopping =document.querySelector('.closeShopping');
let list=document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body= document.querySelector('body');
let total=document.querySelector('total');
let quantity= document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
  card.style.display = 'block'; // Display the card
  console.log('Open shopping clicked.');
});

closeShopping.addEventListener('click', () => {
  card.style.display = 'none'; // Hide the card
});






const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];


// add to cart
// let list


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

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});






function addToCart(productIndex) {
  const selectedProduct = products[productIndex];
  
  // Create a new list item for the cart
  const newCartItem = document.createElement('li');
  newCartItem.textContent = selectedProduct.title + " - $" + selectedProduct.price;
  
  // Append the new item to the cart list
  const cartList = document.querySelector('.listCard');
  cartList.appendChild(newCartItem);
}

// Attach event listeners to "Add to Cart" buttons for each product
const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
      addToCart(index);
  });
});


// ...

// function addToCart(productIndex) {
//   const selectedProduct = products[productIndex];

  // Create a new list item for the cart
  // const newCartItem = document.createElement('li');
  // newCartItem.textContent = `${selectedProduct.title} - $${selectedProduct.price}`;

  // Append the new item to the cart list
//   const cartList = document.querySelector('.listCard');
//   cartList.appendChild(newCartItem);
// }

// const productButtons = document.querySelectorAll('.addToCart');

// productButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
    // addToCart(index);
     // Add the clicked product to the cart
//   });
// });






// add cart with increment and decrement operation 

const cart = {};

function addToCart(productIndex) {
  const selectedProduct = products[productIndex];

  if (cart[selectedProduct.id]) {
    cart[selectedProduct.id].quantity += 1;
  } else {
    cart[selectedProduct.id] = {
      product: selectedProduct,
      quantity: 0,
    };
  }

  renderCart();
  updateTotal();
}

function renderCart() {
  const cartList = document.querySelector('.listCard');
  cartList.innerHTML = ''; 

  for (const productId in cart) {
    const cartItem = cart[productId];
    const { title, price } = cartItem.product;
    const quantity = cartItem.quantity;

    const newCartItem = document.createElement('li');
    newCartItem.textContent = `${title} - $${price} x ${quantity}`;

    cartList.appendChild(newCartItem);
  }
}

function updateTotal() {
  const totalPrice = document.querySelector('.total');
  let total = 0;

  for (const productId in cart) {
    const cartItem = cart[productId];
    const { price } = cartItem.product;
    const quantity = cartItem.quantity;

    total += price * quantity;
  }

  totalPrice.textContent = `$${total}`;
}

const productButtons = document.querySelectorAll('.addToCart');

productButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    addToCart(index);
  });
});

// increment icon 

// Get all "Add to Cart" buttons and the cart count element
const addToCartNumbers = document.querySelectorAll('.addToCart');
const cartCountElement = document.getElementById('cartCount');

let cartCount = 0;

// Update the cart count in the UI
const updateCartCount = () => {
    cartCountElement.textContent = cartCount;
};

// Add event listeners to each "Add to Cart" button
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Increment the cart count when the button is clicked
        cartCount++;
        // Update the count in the UI
        updateCartCount();
     });
 });
