// OBJETO

class Producto {
    constructor(name, image, type, price, color) {
        this.name = name;
        this.image = image;
        this.type = type;
        this.price = price;
        this.color = color;
    }
}

// PRODUCTOS!

const camisaBlanca = new Producto("CAMISA BLANCA", "./assets/camisaBlanca.png", "Plana", 1500, "Blanco");
const camisaBlancaRayasVerdes = new Producto("CAMISA CON RAYAS VERDES", "./assets/camisaRayasVerdes.jpg", "Rayas", 2000, "Verde");
const camisaAzulPuntosBlancos = new Producto("CAMISA AZUL CON PUNTOS BLANCOS", "./assets/camisaAzulPuntosBlancos.jpg", "Puntos", 2000, "Azul");
const camisaNegraFlores = new Producto("CAMISA NEGRA CON FLORES", "./assets/camisaNegraFlores.jpg", "Diseñada", 2500, "Negro");


// LOCAL STORAGE - SHOPPING CART

let total 
let test = 0
let testArray = []

const saveInLocalStorage = (v) => {
  localStorage.setItem("compras", JSON.stringify(v))
}

total = JSON.parse(localStorage.getItem("compras"))

testArray.push(total)
console.log(testArray)

const saveInLocalStorage2 = (v) => {
  localStorage.setItem("test", JSON.stringify(v))
}

final = JSON.parse(localStorage.getItem("test"))
console.log(final)

const newArray = [];


// FUNCIÓN CONSTRUCTORA

function productsInit() {

  const app4 = document.getElementById("mainpage");

  app4.innerHTML = `
    <header>
    <div class="navwrapper">
        <a href="./index.html">
        <div id="title">
          <i class="fas fa-hat-cowboy-side"></i>
          <h2>Fashion Ecommerce</h2>
        </div>
        </a>
          <nav class="navbar">
                  <a href="#" class="toggle">☰ Menu</a>
              <ul>  
                  <li class="nav_li"><a href="./pantalones.html" class="nav_a">Pantalones</a></li>
                  <li class="nav_li"><a href="./remeras.html" class="nav_a">Remeras</a></li>
                  <li class="nav_li"><a href="./camperas.html" class="nav_a">Camperas</a></li>
                  <li class="nav_li"><a href="./gorras.html" class="nav_a">Gorras</a></li>
                  <li class="nav_li"><a href="./calzado.html" class="nav_a">Calzado</a></li>
                  <li class="nav_li"><a href="./camisas.html" class="nav_a">Camisas</a></li>
                  <li class="nav_li" id="account"><a href="./login.html" class="nav_a" id="link">Iniciar Sesión</a></li>
                  <li class="nav_li">
                    <a href="" id="shopping_cart">
                      <i id="shopping_cart_content1" class="fas fa-shopping-cart"></i>
                      <span id="shopping_cart_content2">#${final}</span>
                    </a>
                  </li>
              </ul>
          </nav>
      </div>
    </header>
    
    <div id="products_wrapper">
        <div id="filters">
            <button id="clean_filters">Limpiar filtros</button>
            <ul class="ul_filters">
                <h2 class="item">Color</h2>
                <li class="item"><input id="blue_filter" name="filter" type="radio" data-color="Azul"> Azul</li>
                <li class="item"><input id="black_filter" name="filter" type="radio" data-color="Negro"> Negro</li>
                <li class="item"><input id="green_filter" name="filter" type="radio" data-color="Verde"> Verde</li>
                <li class="item"><input id="red_filter" name="filter" type="radio" data-color="Rojo"> Rojo</li>
                <li class="item"><input id="yellow_filter" name="filter" type="radio" data-color="Amarillo"> Amarillo</li>
                <li class="item"><input id="white_filter" name="filter" type="radio" data-color="Blanco"> Blanco</li>
            </ul>
            <ul class="ul_filters">
                <h2 class="item">Tipo</h2>
                <li class="item"><input id="plain_filter" name="filter" type="radio" data-tipo="Plana"> Planas</li>
                <li class="item"><input id="striped_filter" name="filter" type="radio" data-tipo="Rayas"> Rayas</li>
                <li class="item"><input id="spotted_filter" name="filter" type="radio" data-tipo="Puntos"> Puntos</li>
                <li class="item"><input id="designer_filter" name="filter" type="radio" data-tipo="Diseñada"> Diseñadas</li>
              </ul>
              <div>
                <input type="text" id="search" placeholder="Busque el producto...">
              </div>
        </div>
        <div id="products" class="products">
            
        </div>
    </div>
    <footer>
        <div id="footer_content_links">
          <a href="" class="links">
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="" class="links">
            <i class="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="" class="links">
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <hr>
        <div id="footer_content_payments">
         
          <p><b>ACEPTAMOS LOS SIGUIENTES MEDIOS DE PAGO:</b></p>
          <div class="payment_methods">
            <img src="./assets/efectivo.png" alt="">
            <img src="./assets/tarjetas.png" alt="">
          </div>
        </div>
      </footer>
  `;

  

  // TOGGLE MENU
  const toggle = document.querySelector('.toggle'); 
      const navUl = document.querySelector('nav.navbar ul'); 
      toggle.addEventListener('click',() => {
        navUl.classList.toggle('open');
  });

    const products = document.getElementById("products");
    const arrayObjects = [camisaBlanca, camisaNegraFlores, camisaAzulPuntosBlancos, camisaBlancaRayasVerdes];


  // MOSTRAR PRODUCTOS
  function displayProducts() {
		for (const element of arrayObjects) {
			renderProducts(element);
      popUp(element);
		};
    
  };

  // RENDERIZAR PRODUCTOS
  function renderProducts(params) {
    let newDiv = document.createElement("div");
    document.getElementById("products").appendChild(newDiv);
    newDiv.setAttribute("class", "card");
    newDiv.setAttribute("name", `${params.name}`)
    let newImg = document.createElement("img");
    newImg.setAttribute("src", `${params.image}`);
    newDiv.appendChild(newImg);
    newImg.setAttribute("class", "card_image");
    let newH3 = document.createElement("h3");
    newH3.innerText = `${params.name}`;
    newDiv.appendChild(newH3);
  }


  // BORRAR FILTROS
  let cleanFilters = document.getElementById("clean_filters");
  cleanFilters.addEventListener("click", refresh)


  // COLORES
  let blueFilter = document.getElementById("blue_filter");
  blueFilter.addEventListener("click", filterBlueClothes);
  let blackFilter = document.getElementById("black_filter");
  blackFilter.addEventListener("click", filterBlackClothes);
  let greenFilter = document.getElementById("green_filter");
  greenFilter.addEventListener("click", filterGreenClothes);
  let redFilter = document.getElementById("red_filter");
  redFilter.addEventListener("click", filterRedClothes);
  let yellowFilter = document.getElementById("yellow_filter");
  yellowFilter.addEventListener("click", filterYellowClothes);
  let whiteFilter = document.getElementById("white_filter");
  whiteFilter.addEventListener("click", filterWhiteClothes);




  // TIPO
  let plainFilter = document.getElementById("plain_filter");
  plainFilter.addEventListener("click", plainFilterClothes);
  let strippedFilter = document.getElementById("striped_filter");
  strippedFilter.addEventListener("click", strippedFilterClothes);
  let spottedFilter = document.getElementById("spotted_filter");
  spottedFilter.addEventListener("click", spottedFilterClothes);
  let designerFilter = document.getElementById("designer_filter");
  designerFilter.addEventListener("click", designerFilterClothes);


  function refresh() {
    location.reload();
  };

  function popUp(params) {
    const cards = document.querySelectorAll(".card");    
    cards.forEach(function(card) {
        card.addEventListener("click", function() {
          newArray.push(params)
          let elemento = newArray[0]
          products.innerHTML = ``;
          products.style.display = "";
          products.className = "products_popups";
          products.innerHTML += `
          <div>
            <img src="${elemento.image}" id="element-image">
          </div>
          <div style="display: grid;
          grid-auto-rows: auto;
          grid-row-gap: 20px;
          align-content: space-around;">
            <h2>Artículo: ${elemento.name}</h2>
            <h2>Precio: $${elemento.price}</h2>
            <h2>Tipo: ${elemento.type}</h2>
            <h2>Color: ${elemento.color}</h2>
            <button id="purchase_btn" class="popup_btns">COMPRAR</button>
            <button id="back_btn" class="popup_btns">VOLVER</button>
          </div>
          `;

          const goBack = document.getElementById("back_btn");
          goBack.addEventListener("click", () => {
            refresh();
          })
          
          const purchaseBtn = document.getElementById("purchase_btn");
          purchaseBtn.addEventListener("click", () => {
            test++;
            saveInLocalStorage(test);
            let example = test + final;
            console.log(example);
            saveInLocalStorage2(example);
            refresh();
          });
        });
      }
    );
  };

  //  SEARCH FUNCTION 

  const search = document.getElementById("search");

  const searchFunction = ({target}) => {
    const value = target.value.toUpperCase();
    console.log(value)
    arrayObjects.forEach((element) => {
      if (element.name.includes(value)) {
        products.innerHTML = "";
        let newDiv = document.createElement("div");
        document.getElementById("products").appendChild(newDiv);
        newDiv.setAttribute("class", "card");
        newDiv.setAttribute("name", `${element.name}`)
        let newImg = document.createElement("img");
        newImg.setAttribute("src", `${element.image}`);
        newDiv.appendChild(newImg);
        newImg.setAttribute("class", "card_image");
        let newH3 = document.createElement("h3");
        newH3.innerText = `${element.name}`;
        newDiv.appendChild(newH3);
        popUp(element)
      } 
      if (value === "") {
        refresh()
        return;
      }
    });
  }

  search.addEventListener("input", searchFunction);

  
  // FILTRAR COLORES!

  function filterBlueClothes() {
    products.innerHTML = ``;
    const filterObjets = arrayObjects.map((element) => {
      if (element.color === blueFilter.dataset.color) {
        renderProducts(element);
        popUp(element);
      };
    });
  };

	function filterBlackClothes() {
    products.innerHTML = ``;
		const filterObjets = arrayObjects.map((element) => {
    if (element.color == blackFilter.dataset.color) {
        renderProducts(element);
        popUp(element);
      };
    });
	};

	function filterGreenClothes() {
    products.innerHTML = ``;
		const filterObjets = arrayObjects.map((element) => {
      if (element.color == greenFilter.dataset.color) {
        renderProducts(element);
        popUp(element);
      };
    });
	};

	function filterRedClothes() {
    products.innerHTML = ``;
		const filterObjets = arrayObjects.map((element) => {
      if (element.color == redFilter.dataset.color) {
        renderProducts(element);
        popUp(element);
      };
    });
	};

	function filterYellowClothes() {
    products.innerHTML = ``;
		const filterObjets = arrayObjects.map((element) => {
      if (element.color == yellowFilter.dataset.color) {
        renderProducts(element);
        popUp(element);
      };
    });
	};

	function filterWhiteClothes() {
    products.innerHTML = ``;
		const filterObjets = arrayObjects.map((element) => {
      if (element.color == whiteFilter.dataset.color) {
        renderProducts(element);
        popUp(element);
      };
    });
	};


  // FILTRAR TIPOS!

  function plainFilterClothes() {
    products.innerHTML = ``;
    const filterObjets = arrayObjects.map((element) => {
      if (element.type === plainFilter.dataset.tipo) {
        renderProducts(element);
        popUp(element);
      };
    });
  };

  function strippedFilterClothes() {
    products.innerHTML = ``;
    const filterObjets = arrayObjects.map((element) => {
      if (element.type === strippedFilter.dataset.tipo) {
        renderProducts(element);
        popUp(element);
      };
    });
  };

  function spottedFilterClothes() {
    products.innerHTML = ``;
    const filterObjets = arrayObjects.map((element) => {
      if (element.type === spottedFilter.dataset.tipo) {
        renderProducts(element);
        popUp(element);
      };
    });
  };

  function designerFilterClothes() {
    products.innerHTML = ``;
    const filterObjets = arrayObjects.map((element) => {
      if (element.type === designerFilter.dataset.tipo) {
        renderProducts(element);
        popUp(element);
      };
    });
  };

  
  // CARRITO CON NUMEROS

  const shoppingCart = document.getElementById("shopping_cart_content2")
  if (shoppingCart.innerText === "#null") {
    shoppingCart.innerText = "";
  }

  


  displayProducts();
}

// RUN THE FUNCTION!!!

setTimeout(() => {
  productsInit();
}, 0);
