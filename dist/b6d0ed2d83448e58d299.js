function signupInit(){document.getElementById("mainpage").innerHTML='\n    <div class="form_wrapper2">\n    <section class="login_title">\n        <h2><i class="fas fa-hat-cowboy-side"></i>Fashion Ecommerce</h2>\n    </section>\n        <form id="signup_form">\n            <div>\n                <label for="text" id="username_label2" class="login_labels">Nombre de usuario</label>\n                <input type="text" name="" class="login_inputs" id="signup_username" placeholder="&nbsp;Ingrese nombre de usuario"/> \n            </div>\n            <div>\n                <label for="email" class="login_labels" id="email_label">Email</label>\n                <input type="email" name="" class="login_inputs" id="login_email" placeholder="&nbsp;Ingrese email"/>\n            </div>\n            <div>\n                <label for="password" class="login_labels" id="password_label2">Contraseña</label>\n                <input type="password" name="" class="login_inputs" id="signup_password" placeholder="&nbsp;Ingrese contraseña"/>\n            </div>\n            <div>\n                <label for="password" class="login_labels" id="confirm_password_label">Repetir contraseña</label>\n                <input type="password" name="" class="login_inputs" id="confirm_password" placeholder="&nbsp;Ingrese contraseña"/>\n            </div>\n            <div class="remember_session">\n                <button type="submit" id="login_button"><a id="link">Registrarse</a></button>\n            </div>\n        </form>\n    </div>\n    <a href="../login.html" id="go_register"><h3>Ya estás registrado? Tocá acá :)</h3></a>\n    ';var e=document.getElementById("signup_form"),n=document.getElementById("username_label2"),s=document.getElementById("signup_username"),a=document.getElementById("email_label"),l=document.getElementById("login_email"),i=document.getElementById("password_label2"),t=document.getElementById("signup_password"),r=document.getElementById("confirm_password_label"),o=document.getElementById("confirm_password"),m=document.getElementById("link"),c=!1,u=!1,d=!1,p=!1;e.addEventListener("submit",(function(e){e.preventDefault(),t.value!==o.value||8>o.value.length?(r.className="error_label",r.innerText="Deben ser iguales",o.className="error_input",setTimeout((function(){o.className="login_inputs",r.innerText="Repetir contraseña",r.className=""}),2500)):(o.className="success_input",r.innerText="✅ Repetir contraseña ",r.className="",d=!0),s.value.length<8?(s.className="error_input",n.innerText="8 caracteres mínimo",n.className="error_label",setTimeout((function(){s.className="login_inputs",n.innerText="Nombre de usuario",n.className=""}),2500)):s.value.length>16?(s.className="error_input",n.innerText="16 caracteres máximo",n.className="error_label",setTimeout((function(){s.className="login_inputs",n.innerText="Nombre de usuario",n.className=""}),2500)):(s.className="success_input",n.innerText="✅ Nombre de usuario ",n.className="",c=!0),t.value.length<8?(t.className="error_input",i.innerText="8 caracteres mínimo",i.className="error_label",setTimeout((function(){t.className="login_inputs",i.innerText="Contraseña",i.className=""}),2500)):t.value.length>16?(t.className="error_input",i.innerText="16 caracteres máximo",i.className="error_label",setTimeout((function(){t.className="login_inputs",i.innerText="Contraseña",i.className=""}),2500)):(t.className="success_input",i.innerText="✅ Contraseña ",i.className="",u=!0),function(e){/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.value.trim())?(l.className="success_input",a.innerText="Email",a.className="",l.className="success_input",a.innerText="✅ Email ",a.className="",p=!0):(a.className="error_label",a.innerText="Email inválido",l.className="error_input",setTimeout((function(){l.className="login_inputs",a.innerText="Email",a.className=""}),2500))}(l),1==c&&1==u&&1==d&&1==p&&(m.setAttribute("href","./login.html"),setTimeout((function(){window.location=m.href}),1500))}))}setTimeout((function(){signupInit()}),0);