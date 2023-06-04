const dataPhone = [
    {    
    name: "iPhone 13",    
    description: "Флагманский смартфон Apple с OLED-дисплеем, новым процессором A15 Bionic и тройной камерой.",    
    cost: 995,    
    brand: "Apple"  
    },  
    {    
    name: "Samsung Galaxy Z Flip 3",    
    description: "Смартфон-раскладушка с дисплеем из стекла, процессором Snapdragon 888 и двойной камерой.",    
    cost: 899,    
    brand: "Samsung"  },  
    {    
    name: "OnePlus 10 Pro",    
    description: "Флагманский смартфон OnePlus с 6,7-дюймовым дисплеем, процессором Snapdragon 8 Gen 1 и четверной камерой.",    
    cost: 839,    
    brand: "OnePlus"  
    },  
    {    
    name: "Google Pixel 6",    
    description: "Смартфон с дисплеем из супертонкого стекла, новым процессором Tensor и двойной камерой.",    
    cost: 749,    "brand": "Google"  },  
    {    
    name: "Xiaomi Mi 12",    
    description: "Флагманский смартфон Xiaomi с 6,8-дюймовым дисплеем, процессором Snapdragon 8 Gen 1 и пятикратной камерой.",    
    cost: 799,    
    brand: "Xiaomi"  
}
];

const dataLaptop = [
    {
      name: "MacBook Pro",
      description: "Powerful laptop for professional use",
      cost: 1999,
      brand: "Apple"
    },
    {
      name: "ThinkPad X1 Carbon",
      description: "Ultra-light and durable business laptop",
      cost: 1599,
      brand: "Lenovo"
    },
    {
      name: "Surface Laptop 4",
      description: "Sleek and stylish laptop for everyday use",
      cost: 1299,
      brand: "Microsoft"
    },
    {
      name: "ZenBook UX425",
      description: "Thin and light laptop with long battery life",
      cost: 899,
      brand: "Asus"
    },
    {
      name: "Chromebook Spin 713",
      description: "Affordable and versatile laptop for students",
      cost: 599,
      brand: "Acer"
    }
];

  const dataTablet = [
    {
      name: "iPad Pro",
      description: "11-inch Liquid Retina display, A14 Bionic chip, and support for Apple Pencil and Magic Keyboard.",
      cost: 799,
      brand: "Apple"
    },
    {
      name: "Galaxy Tab S7+",
      description: "12.4-inch Super AMOLED display, Qualcomm Snapdragon 865 Plus processor, and support for the S Pen.",
      cost: 849,
      brand: "Samsung"
    },
    {
      name: "Surface Pro 7+",
      description: "12.3-inch PixelSense display, 11th Gen Intel Core processors, and optional LTE Advanced.",
      cost: 899,
      brand: "Microsoft"
    },
    {
      name: "Lenovo Tab P11 Pro",
      description: "11.5-inch OLED display, Qualcomm Snapdragon 730G processor, and quad speakers tuned by JBL.",
      cost: 499,
      brand: "Lenovo"
    },
    {
      name: "Fire HD 10",
      description: "10.1-inch 1080p full HD display, octa-core processor, and up to 12 hours of battery life.",
      cost: 149,
      brand: "Amazon"
    }
];
  

const phoneList = document.getElementById("phone");
const tablet = document.getElementById("tablet");
const laptop = document.getElementById("laptop");

phoneList.addEventListener("click", createPhoneList);
tablet.addEventListener("click", createLaptopList);
laptop.addEventListener("click", createTabletList);


function createPhoneList() {
  const tableContainer = document.getElementById("table__container");
  tableContainer.innerHTML = "";

  dataPhone.forEach((phoneData) => {
    let newTable = document.createElement("div");
    newTable.className = "card";
    newTable.style = "width: 18rem;";
    newTable.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${phoneData.name}</h5>
    </div>
    `;

    newTable.addEventListener("click", function () {
      createPhone(phoneData); 
    });
    
    tableContainer.appendChild(newTable);
  })
};

function createPhone(phoneData) {
  const phoneContainer = document.getElementById('description');
  phoneContainer.innerHTML = '';

  let newTable = document.createElement("div");
  newTable.className = "card";
  newTable.style = "width: 18rem;";
  newTable.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${phoneData.name}</h5>
      <p class="card-text">Бренд: ${phoneData.brand}</p>
      <p class="card-text">${phoneData.description}</p>
      <p class="card-text">Цена: ${phoneData.cost}</p>
      <button class="btn btn-primary" onclick="showForm('${phoneData.name}', '${phoneData.cost}')">Buy</button>
    </div>
  `;

  phoneContainer.appendChild(newTable);
}

function createLaptopList() {
  const tableContainer = document.getElementById("table__container");
  tableContainer.innerHTML = "";
  dataLaptop.forEach((LaptopData) => {
    let newTable = document.createElement("div");
    newTable.className = "card";
    newTable.style = "width: 18rem;";
    newTable.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${LaptopData.name}</h5>
    </div>
    `;

    newTable.addEventListener("click", function () {
      createLaptop(LaptopData); 
    });
    
    tableContainer.appendChild(newTable);
  })
};

function createLaptop(LaptopData) {
  const laptopContainer = document.getElementById('description');
  laptopContainer.innerHTML = '';

  let newTable = document.createElement("div");
  newTable.className = "card";
  newTable.style = "width: 18rem;";
  newTable.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${LaptopData.name}</h5>
      <p class="card-text">Brand: ${LaptopData.brand}</p>
      <p class="card-text">${LaptopData.description}</p>
      <p class="card-text">Cost: ${LaptopData.cost}</p>
      <a href="#" class="card-link" onclick="showForm('${LaptopData.name}', '${LaptopData.cost}')">Buy</a>
    </div>
  `;

  laptopContainer.appendChild(newTable);
}

function createTabletList() {
  const tabletContainer = document.getElementById("table__container");
  tabletContainer.innerHTML = ""; 

  dataTablet.forEach((tabletData) => {
    let newTable = document.createElement("div");
    newTable.className = "card";
    newTable.style = "width: 18rem;";
    newTable.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${tabletData.name}</h5>
    </div>
    `;

    newTable.addEventListener("click", function () {
      createTablet(tabletData); 
    });
    
    tabletContainer.appendChild(newTable);
  })
};

function createTablet(tabletData) {
  const tabletContainer = document.getElementById('description');
  tabletContainer.innerHTML = '';

  let newTable = document.createElement("div");
  newTable.className = "card";
  newTable.style = "width: 18rem;";
  newTable.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${tabletData.name}</h5>
      <p class="card-text">Brand: ${tabletData.brand}</p>
      <p class="card-text">${tabletData.description}</p>
      <p class="card-text">Cost: ${tabletData.cost}</p>
      <a href="#" class="card-link" onclick="showForm('${tabletData.name}', '${tabletData.cost}')">Buy</a>
    </div>
  `;

  tabletContainer.appendChild(newTable);
}

function showForm(productName, productCost) {
  const formContainer = document.getElementById("form__container");
  formContainer.innerHTML = `
    <h3>Детали заказа:</h3>
    <form id="registration__form">
    <label for="name">Ім'я покупця:</label>
    <input type="text" id="name__form" name="name"><br><br>

    <label for="city">Місто:</label>
    <select id="city" name="city">
      <option value="Киев">Київ</option>
      <option value="Харьков">Харків</option>
      <option value="Львов">Львів</option>
      <option value="Одесса">Одеса</option>
      <option value="Запорожье">Запоріжжя</option>
    </select><br><br>
    
    <label for="post_office">Склад Нової пошти для надсилання:</label>
    <input type="text" id="post__office" name="post_office"><br><br>

    <label for="payment">Післяплати або оплати банківської картки:</label><br>
    <input type="radio" id="post" name="payment" value="Післяплата">
    <label for="post">Післяплата</label><br>
    <input type="radio" id="card" name="payment" value="Оплата банківською карткою">
    <label for="card">Оплата банківською карткою</label><br><br>

    <label for="quantity">Кількість продукції, що купується:</label>
    <input type="number" id="quantity" name="quantity"><br><br>

    <label for="comment">Коментар до замовлення:</label><br>
    <textarea id="comment" name="comment" rows="4" cols="50"></textarea><br><br>

    <input type="submit" value="Замовити" class="submit__button">
    </form>
  `;

  const orderForm = document.getElementById("registration__form");

  orderForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const nameForm = document.getElementById("name__form").value;
    const city = document.getElementById("city").value;
    const postOffice = document.getElementById("post__office").value;
    const payment = document.querySelector('input[name="payment"]:checked').value;
    const quantity = document.getElementById("quantity").value;
    const comment = document.getElementById("comment").value;

    const errors = [];
    if (!nameForm || !postOffice || !payment || !quantity) {
      errors.push("Форма заповнена неправильно.");
    }
    if (!/^\d+$/.test(postOffice)) {
      errors.push("Номер відділення нової пошти повинен містити лише цифри.");
    }
    if (!/^\d+$/.test(quantity)) {
      errors.push("Кількість товарів має бути вказана у вигляді числа.");
    }
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    const totalPrice = productCost * quantity;
    const orderSummary = `Товар: ${productName}\n
    Кількість: ${quantity}\n
    Загальна вартість: ${totalPrice}$\n
    Ім'я: ${nameForm}\n
    Місто: ${city}\n 
    Відділення нової пошти №${postOffice}\n
    Коментар: ${comment}`;

    showAlert(orderSummary);
    formContainer.innerHTML = "";

    const selectedProduct = {
      name: productName,
      quantity: quantity
    };
    selectedProducts.push(selectedProduct);
  });
}

function showAlert(orderSummary) {
  alert(`Зведення замовлення:\n\n${orderSummary}\n\n Дякую за покупку!`);
}

const myOrder = document.getElementById('my__order');
const orderList = document.getElementById('order__list');
const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];

function showOrderList() {
  orderList.innerHTML = "";
  let totalCost = 0; 

  selectedProducts.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${product.name} - Количество: ${product.quantity}`;
    orderList.appendChild(listItem);

    const productCost = getProductCost(product.name);
    const subtotal = productCost * product.quantity;
    totalCost += subtotal;
  });

  const totalItem = document.createElement("li");
  totalItem.innerText = `Общая стоимость заказа: ${totalCost}$`;
  orderList.appendChild(totalItem);

}

function getProductCost(productName) {
  const allProducts = [...dataPhone, ...dataLaptop, ...dataTablet];

  const product = allProducts.find((item) => item.name === productName);
  if (product) {
    return product.cost;
  }

  return null;
}

myOrder.addEventListener("click", showOrderList);

function saveSelectedProducts() {
  localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
}

myOrder.addEventListener("click", showOrderList);
window.addEventListener("beforeunload", saveSelectedProducts);