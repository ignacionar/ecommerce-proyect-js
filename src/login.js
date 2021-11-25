function loginInit() {
    
    const app2 = document.getElementById("mainpage");
        
    app2.innerHTML = `
        <div class="form_wrapper">
                <section class="login_title">
                    <h2><i class="fas fa-hat-cowboy-side"></i>Fashion Ecommerce</h2>
                </section>
                <form id="form_login">
                    <div>
                        <label for="text" id="username_label" class="login_labels">Nombre de usuario</label>
                        <input type="text" name="" class="login_inputs" id="login_username" placeholder="&nbsp;Ingrese nombre de usuario"/> 
                    </div>
                    <div>
                        <label for="password" class="login_labels" id="password_label">Contraseña</label>
                        <input type="password" name="" class="login_inputs" id="login_password" placeholder="&nbsp;Ingrese contraseña"/>
                     </div>
    
                     <div class="remember_session">
                        <button type="submit" id="login_button">Logearse</button>
                        <input type="checkbox" name="" checkbox="checkbox_login"><span class="checkbox_text">Recordar mi sesión</span>
                    </div>
                </form>
        </div>
        <a href="../signup.html" id="go_register"><h3>No estás registrado? Tocá acá :)</h3></a>
    `;
    
    
        const formLogin = document.getElementById("form_login");
        const usernameLabel = document.getElementById("username_label");
        const usernameLogin = document.getElementById("login_username");
        const passwordLabel = document.getElementById("password_label");
        const passowrdLogin = document.getElementById("login_password");
    
    
        const verifyUsername = (min, max) => {
            if (usernameLogin.value.length < min) {
                usernameLogin.className = "error_input";
                usernameLabel.innerText = "8 caracteres mínimo";
                usernameLabel.className = "error_label";
                setTimeout(() => {
                    usernameLogin.className = "login_inputs";
                    usernameLabel.innerText = "Nombre de usuario";
                    usernameLabel.className = "";
                }, 2500);
            } 
            if (usernameLogin.value.length > max) {
                usernameLogin.className = "error_input";
                usernameLabel.innerText = "16 caracteres máximo";
                usernameLabel.className = "error_label";
                setTimeout(() => {
                    usernameLogin.className = "login_inputs";
                    usernameLabel.innerText = "Nombre de usuario";
                    usernameLabel.className = "";
                }, 2500);
            }
        }
        
        
        const verifyPassword = (min, max) => {
            if (passowrdLogin.value.length < min) {
                passowrdLogin.className = "error_input";
                passwordLabel.innerText = "8 caracteres mínimo";
                passwordLabel.className = "error_label";
                setTimeout(() => {
                    passowrdLogin.className = "login_inputs";
                    passwordLabel.innerText = "Contraseña";
                    passwordLabel.className = "";
                }, 2500);
            } 
            if (passowrdLogin.value.length > max) {
                passowrdLogin.className = "error_input";
                passwordLabel.innerText = "16 caracteres máximo";
                passwordLabel.className = "error_label";
                setTimeout(() => {
                    passowrdLogin.className = "login_inputs";
                    passwordLabel.innerText = "Contraseña";
                    passwordLabel.className = "";
                }, 2500);
            }
        }
    
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            verifyUsername(8, 16);
            verifyPassword(8, 16);
        })
}
    
setTimeout(() => {
    loginInit();
}, 0);
