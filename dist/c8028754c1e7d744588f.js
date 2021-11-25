function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var total,Producto=function e(t,n,a,i,r){_classCallCheck(this,e),this.name=t,this.image=n,this.type=a,this.price=i,this.color=r},camperaCueroNegra=new Producto("CAMPERA DE CUERO NEGRA","./assets/cueroNegra.jpg","Cuero",5400,"Negro"),buzoAmarillo=new Producto("BUZO AMARILLO","./assets/buzoAmarillo.jpg","Buzo",3900,"Amarillo"),sweaterVerde=new Producto("SWEATER VERDE","./assets/sweaterVerde.jpg","Sweater",2500,"Verde"),anorakAzul=new Producto("ANORAK AZUL","./assets/campera.jpg","Anorak",4e3,"Azul"),hoodieVerde=new Producto("HOODIE VERDE","./assets/hoodieVerde.jpg","Hoodie",3e3,"Verde"),test=0,testArray=[],saveInLocalStorage=function(e){localStorage.setItem("compras",JSON.stringify(e))};total=JSON.parse(localStorage.getItem("compras")),testArray.push(total),console.log(testArray);var saveInLocalStorage2=function(e){localStorage.setItem("test",JSON.stringify(e))};final=JSON.parse(localStorage.getItem("test")),console.log(final);var newArray=[];function productsInit(){function e(e){var t=document.createElement("div");document.getElementById("products").appendChild(t),t.setAttribute("class","card"),t.setAttribute("name","".concat(e.name));var n=document.createElement("img");n.setAttribute("src","".concat(e.image)),t.appendChild(n),n.setAttribute("class","card_image");var a=document.createElement("h3");a.innerText="".concat(e.name),t.appendChild(a)}function t(){location.reload()}function n(e){document.querySelectorAll(".card").forEach((function(n){n.addEventListener("click",(function(){newArray.push(e);var n=newArray[0];r.innerHTML="",r.style.display="",r.className="products_popups",r.innerHTML+='\n          <div>\n            <img src="'.concat(n.image,'" style="max-width: 500px;">\n          </div>\n          <div style="display: grid;\n          grid-auto-rows: auto;\n          grid-row-gap: 20px;\n          align-content: space-around;">\n            <h2>Artículo: ').concat(n.name,"</h2>\n            <h2>Precio: $").concat(n.price,"</h2>\n            <h2>Tipo: ").concat(n.type,"</h2>\n            <h2>Color: ").concat(n.color,'</h2>\n            <button id="purchase_btn" class="popup_btns">COMPRAR</button>\n            <button id="back_btn" class="popup_btns">VOLVER</button>\n          </div>\n          '),document.getElementById("back_btn").addEventListener("click",(function(){t()})),document.getElementById("purchase_btn").addEventListener("click",(function(){test++,saveInLocalStorage(test);var e=test+final;console.log(e),saveInLocalStorage2(e),t()}))}))}))}document.getElementById("mainpage").innerHTML='\n    <header>\n    <div class="navwrapper">\n        <a href="./index.html">\n        <div id="title">\n          <i class="fas fa-hat-cowboy-side"></i>\n          <h2>Fashion Ecommerce</h2>\n        </div>\n        </a>\n          <nav class="navbar">\n                  <a href="#" class="toggle">☰ Menu</a>\n              <ul>  \n                  <li class="nav_li"><a href="./pantalones.html" class="nav_a">Pantalones</a></li>\n                  <li class="nav_li"><a href="./remeras.html" class="nav_a">Remeras</a></li>\n                  <li class="nav_li"><a href="./camperas.html" class="nav_a">Camperas</a></li>\n                  <li class="nav_li"><a href="./gorras.html" class="nav_a">Gorras</a></li>\n                  <li class="nav_li"><a href="./calzado.html" class="nav_a">Calzado</a></li>\n                  <li class="nav_li"><a href="./camisas.html" class="nav_a">Camisas</a></li>\n                  <li class="nav_li" id="account"><a href="./login.html" class="nav_a" id="link">Iniciar Sesión</a></li>\n                  <li class="nav_li">\n                    <a href="" id="shopping_cart">\n                      <i id="shopping_cart_content1" class="fas fa-shopping-cart"></i>\n                      <span id="shopping_cart_content2">#'.concat(final,'</span>\n                    </a>\n                  </li>\n              </ul>\n          </nav>\n      </div>\n    </header>\n    \n    <div id="products_wrapper">\n        <div id="filters">\n            <button id="clean_filters">Limpiar filtros</button>\n            <ul class="ul_filters">\n                <h2 class="item">Color</h2>\n                <li class="item"><input id="blue_filter" name="filter" type="radio" data-color="Azul"> Azul</li>\n                <li class="item"><input id="black_filter" name="filter" type="radio" data-color="Negro"> Negro</li>\n                <li class="item"><input id="green_filter" name="filter" type="radio" data-color="Verde"> Verde</li>\n                <li class="item"><input id="red_filter" name="filter" type="radio" data-color="Rojo"> Rojo</li>\n                <li class="item"><input id="yellow_filter" name="filter" type="radio" data-color="Amarillo"> Amarillo</li>\n                <li class="item"><input id="white_filter" name="filter" type="radio" data-color="Blanco"> Blanco</li>\n            </ul>\n            <ul class="ul_filters">\n                <h2 class="item">Tipo</h2>\n                <li class="item"><input id="hoodie_filter" name="filter" type="radio" data-tipo="Hoodie"> Hoodie</li>\n                <li class="item"><input id="cuero_filter" name="filter" type="radio" data-tipo="Cuero"> Cuero</li>\n                <li class="item"><input id="buzo_filter" name="filter" type="radio" data-tipo="Buzo"> Buzo</li>\n                <li class="item"><input id="sweater_filter" name="filter" type="radio" data-tipo="Sweater"> Sweater</li>\n                <li class="item"><input id="anorak_filter" name="filter" type="radio" data-tipo="Anorak"> Anorak</li>\n              </ul>\n              <div>\n                <input type="text" id="search" placeholder="Busque el producto...">\n              </div>\n        </div>\n        <div id="products" class="products">\n            \n        </div>\n    </div>\n    <footer>\n        <div id="footer_content_links">\n          <a href="" class="links">\n            <i class="fab fa-instagram" aria-hidden="true"></i>\n          </a>\n          <a href="" class="links">\n            <i class="fab fa-facebook" aria-hidden="true"></i>\n          </a>\n          <a href="" class="links">\n            <i class="fab fa-twitter" aria-hidden="true"></i>\n          </a>\n        </div>\n        <hr>\n        <div id="footer_content_payments">\n         \n          <p><b>ACEPTAMOS LOS SIGUIENTES MEDIOS DE PAGO:</b></p>\n          <div class="payment_methods">\n            <img src="./assets/efectivo.png" alt="">\n            <img src="./assets/tarjetas.png" alt="">\n          </div>\n        </div>\n      </footer>\n  ');var a=document.querySelector(".toggle"),i=document.querySelector("nav.navbar ul");a.addEventListener("click",(function(){i.classList.toggle("open")}));var r=document.getElementById("products"),o=[anorakAzul,camperaCueroNegra,buzoAmarillo,sweaterVerde,hoodieVerde];document.getElementById("clean_filters").addEventListener("click",t);var l=document.getElementById("blue_filter");l.addEventListener("click",(function(){r.innerHTML="",o.map((function(t){t.color===l.dataset.color&&(e(t),n(t))}))}));var c=document.getElementById("black_filter");c.addEventListener("click",(function(){r.innerHTML="",o.map((function(t){t.color==c.dataset.color&&(e(t),n(t))}))}));var s=document.getElementById("green_filter");s.addEventListener("click",(function(){r.innerHTML="",o.map((function(t){t.color==s.dataset.color&&(e(t),n(t))}))}));var d=document.getElementById("red_filter");d.addEventListener("click",(function(){r.innerHTML="",o.map((function(t){t.color==d.dataset.color&&(e(t),n(t))}))}));var u=document.getElementById("yellow_filter");u.addEventListener("click",(function(){r.innerHTML="",o.map((function(t){t.color==u.dataset.color&&(e(t),n(t))}))}));var m=document.getElementById("white_filter");m.addEventListener("click",(function(){r.innerHTML="",o.map((function(t){t.color==m.dataset.color&&(e(t),n(t))}))}));var p=document.getElementById("hoodie_filter");p.addEventListener("click",(function(){r.innerHTML="",o.map((function(t){t.type===p.dataset.tipo&&(e(t),n(t))}))}));var f=document.getElementById("cuero_filter");f.addEventListener("click",(function(){r.innerHTML="",o.map((function(t){t.type===f.dataset.tipo&&(e(t),n(t))}))}));var v=document.getElementById("buzo_filter");v.addEventListener("click",(function(){r.innerHTML="",o.map((function(t){t.type===v.dataset.tipo&&(e(t),n(t))}))}));var g=document.getElementById("sweater_filter");g.addEventListener("click",(function(){r.innerHTML="",o.map((function(t){t.type===g.dataset.tipo&&(e(t),n(t))}))}));var h=document.getElementById("anorak_filter");h.addEventListener("click",(function(){r.innerHTML="",o.map((function(t){t.type===h.dataset.tipo&&(e(t),n(t))}))})),document.getElementById("search").addEventListener("input",(function(e){var a=e.target.value.toUpperCase();console.log(a),o.forEach((function(e){if(e.name.includes(a)){r.innerHTML="";var i=document.createElement("div");document.getElementById("products").appendChild(i),i.setAttribute("class","card"),i.setAttribute("name","".concat(e.name));var o=document.createElement("img");o.setAttribute("src","".concat(e.image)),i.appendChild(o),o.setAttribute("class","card_image");var l=document.createElement("h3");l.innerText="".concat(e.name),i.appendChild(l),n(e)}return""===a?void t():void 0}))}));var _=document.getElementById("shopping_cart_content2");"#null"===_.innerText&&(_.innerText=""),function(){for(var t,a=0,i=o;a<i.length;a++)e(t=i[a]),n(t)}()}setTimeout((function(){productsInit()}),0);