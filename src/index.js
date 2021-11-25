import './style.css';
import './css/signup.css';
import './css/login.css';
import './css/products.css';



let app = document.createElement("div");
document.body.append(app);
app.setAttribute("id", "mainpage")

app.innerHTML = `
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
                      <span id="shopping_cart_content2"></span>
                    </a>
                  </li>
              </ul>
          </nav>
      </div>
    </header>
      <div class="container">
        <h2 id="new_title">PRODUCTOS NUEVOS!</h2>
          <section class="carousel" aria-label="Gallery">
              <ol class="carousel__viewport">
                <li id="carousel__slide1" tabindex="0" class="carousel__slide">
                  <div class="carousel__snapper">
                    <a href="#carousel__slide4"
                      class="carousel__prev">Go to last slide</a>
                    <a href="#carousel__slide2"
                      class="carousel__next">Go to next slide</a>
                  </div>
                </li>
                <li id="carousel__slide2"
                    tabindex="0"
                    class="carousel__slide">
                  <div class="carousel__snapper"></div>
                  <a href="#carousel__slide1"
                     class="carousel__prev"></a>
                  <a href="#carousel__slide3"
                     class="carousel__next"></a>
                </li>
                <li id="carousel__slide3"
                    tabindex="0"
                    class="carousel__slide">
                  <div class="carousel__snapper"></div>
                  <a href="#carousel__slide2"
                     class="carousel__prev">Go to previous slide</a>
                  <a href="#carousel__slide4"
                     class="carousel__next">Go to next slide</a>
                </li>
                <li id="carousel__slide4"
                    tabindex="0"
                    class="carousel__slide">
                  <div class="carousel__snapper"></div>
                  <a href="#carousel__slide3"
                     class="carousel__prev">Go to previous slide</a>
                  <a href="#carousel__slide1"
                     class="carousel__next">Go to first slide</a>
                </li>
              </ol>
              <aside class="carousel__navigation">
                <ol class="carousel__navigation-list">
                  <li class="carousel__navigation-item">
                    <a href="#carousel__slide1"
                       class="carousel__navigation-button">Go to slide 1</a>
                  </li>
                  <li class="carousel__navigation-item">
                    <a href="#carousel__slide2"
                       class="carousel__navigation-button">Go to slide 2</a>
                  </li>
                  <li class="carousel__navigation-item">
                    <a href="#carousel__slide3"
                       class="carousel__navigation-button">Go to slide 3</a>
                  </li>
                  <li class="carousel__navigation-item">
                    <a href="#carousel__slide4"
                       class="carousel__navigation-button">Go to slide 4</a>
                  </li>
                </ol>
              </aside>
            </section>
      </div>
      <div id="sections">
        <div id="section_pantalones" class="section_items">
          <a href="./pantalones.html">
            <h2>PANTALONES</h2>
            <p class="emoji">👖</p>
          </a>
        </div>
        <div id="section_remeras" class="section_items">
          <a href="./remeras.html">
            <h2>REMERAS</h2>
            <p class="emoji">👕</p>
          </a>
        </div>
        <div id="section_camperas" class="section_items">
          <a href="./camperas.html">
            <h2>CAMPERAS</h2>
            <p class="emoji">🧥</p>
          </a>
        </div>
        <div id="section_gorras" class="section_items">
          <a href="./gorras.html">
            <h2>GORRAS</h2>
            <p class="emoji">🧢</p>
          </a>
        </div>
        <div id="section_zapatos" class="section_items">
          <a href="./calzado.html">
            <h2>CALZADO</h2>
            <p class="emoji">👞</p>
          </a>
        </div>
        <div id="section_camisas" class="section_items">
          <a href="./camisas.html">
            <h2>CAMISAS</h2>
            <p class="emoji">👔</p>
          </a>
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

const shoppingCart = document.getElementById("shopping_cart_content2")

const account = document.getElementById("account");

let final

final = JSON.parse(localStorage.getItem("test"))

if (final === null) {
  shoppingCart.innerText = "";
} else {
  shoppingCart.innerText = `#${final.toString()}`
}

let sessionLogged = false;

if (sessionLogged === true) {
  account.innerHTML = `<a>Cerrar sesión</a>`;
} 


function init() {

  

  const toggle = document.querySelector('.toggle'); 
      const navUl = document.querySelector('nav.navbar ul'); 
      toggle.addEventListener('click',() => {
        navUl.classList.toggle('open');
  });

  

}

init();


