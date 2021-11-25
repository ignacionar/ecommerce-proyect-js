function signupInit() {

    const app3 = document.getElementById("mainpage");

    app3.innerHTML = `
    <div class="form_wrapper2">
    <section class="login_title">
        <h2><i class="fas fa-hat-cowboy-side"></i>Fashion Ecommerce</h2>
    </section>
        <form id="signup_form">
            <div>
                <label for="text" id="username_label2" class="login_labels">Nombre de usuario</label>
                <input type="text" name="" class="login_inputs" id="signup_username" placeholder="&nbsp;Ingrese nombre de usuario"/> 
            </div>
            <div>
                <label for="email" class="login_labels" id="email_label">Email</label>
                <input type="email" name="" class="login_inputs" id="login_email" placeholder="&nbsp;Ingrese email"/>
            </div>
            <div>
                <label for="password" class="login_labels" id="password_label2">Contraseña</label>
                <input type="password" name="" class="login_inputs" id="signup_password" placeholder="&nbsp;Ingrese contraseña"/>
            </div>
            <div>
                <label for="password" class="login_labels" id="confirm_password_label">Repetir contraseña</label>
                <input type="password" name="" class="login_inputs" id="confirm_password" placeholder="&nbsp;Ingrese contraseña"/>
            </div>
            <div class="remember_session">
                <button type="submit" id="login_button"><a id="link">Registrarse</a></button>
            </div>
        </form>
    </div>
    <a href="../login.html" id="go_register"><h3>Ya estás registrado? Tocá acá :)</h3></a>
    `;

    const signupForm = document.getElementById("signup_form");

    const usernameLabel2 = document.getElementById("username_label2");
    const signupUsername = document.getElementById("signup_username");

    const emailLabel = document.getElementById("email_label");
    const signupEmail = document.getElementById("login_email");

    const passwordLabel2 = document.getElementById("password_label2");
    const signupPassword = document.getElementById("signup_password");

    const confirmPasswordLabel = document.getElementById("confirm_password_label");
    const confirmPassword = document.getElementById("confirm_password");

    const link = document.getElementById("link");

    let usernameCondition = false;
    let passwordCondition = false;
    let passwordCondition2 = false;
    let emailCondition = false;

    const verifyUsername2 = (min, max) => {
        if (signupUsername.value.length < min) {
            signupUsername.className = "error_input";
            usernameLabel2.innerText = "8 caracteres mínimo";
            usernameLabel2.className = "error_label";
            setTimeout(() => {
                signupUsername.className = "login_inputs";
                usernameLabel2.innerText = "Nombre de usuario";
                usernameLabel2.className = "";
            }, 2500);
            return;
        } 
        if (signupUsername.value.length > max) {
            signupUsername.className = "error_input";
            usernameLabel2.innerText = "16 caracteres máximo";
            usernameLabel2.className = "error_label";
            setTimeout(() => {
                signupUsername.className = "login_inputs";
                usernameLabel2.innerText = "Nombre de usuario";
                usernameLabel2.className = "";
            }, 2500);
            return;
        }
        signupUsername.className = "success_input";
        usernameLabel2.innerText = "✅ Nombre de usuario ";
        usernameLabel2.className = "";
        usernameCondition = true;
    }
    
    const verifyPassword2 = (min, max) => {
        if (signupPassword.value.length < min) {
            signupPassword.className = "error_input";
            passwordLabel2.innerText = "8 caracteres mínimo";
            passwordLabel2.className = "error_label";
            setTimeout(() => {
                signupPassword.className = "login_inputs";
                passwordLabel2.innerText = "Contraseña";
                passwordLabel2.className = "";
            }, 2500);
            return;
        } 
        if (signupPassword.value.length > max) {
            signupPassword.className = "error_input";
            passwordLabel2.innerText = "16 caracteres máximo";
            passwordLabel2.className = "error_label";
            setTimeout(() => {
                signupPassword.className = "login_inputs";
                passwordLabel2.innerText = "Contraseña";
                passwordLabel2.className = "";
            }, 2500);
            return;
        }
        signupPassword.className = "success_input";
        passwordLabel2.innerText = "✅ Contraseña ";
        passwordLabel2.className = "";
        passwordCondition = true;
    }
    
    const samePassword = () => {
        if (signupPassword.value !== confirmPassword.value || confirmPassword.value.length < 8) {
            confirmPasswordLabel.className = "error_label";
            confirmPasswordLabel.innerText = "Deben ser iguales";
            confirmPassword.className = "error_input";
            setTimeout(() => {
                confirmPassword.className = "login_inputs";
                confirmPasswordLabel.innerText = "Repetir contraseña";  
                confirmPasswordLabel.className = "";
            }, 2500);
        } else {
            confirmPassword.className = "success_input";
            confirmPasswordLabel.innerText = "✅ Repetir contraseña ";
            confirmPasswordLabel.className = "";
            passwordCondition2 = true;
        }
    }
    
    const verifyEmail = (input) => {
        const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (re.test(input.value.trim())) {
            signupEmail.className = "success_input";
            emailLabel.innerText = "Email";
            emailLabel.className = "";
            signupEmail.className = "success_input";
            emailLabel.innerText = "✅ Email ";
            emailLabel.className = "";
            emailCondition = true;
        } else { 
            emailLabel.className = "error_label";
            emailLabel.innerText = "Email inválido";
            signupEmail.className = "error_input";
            setTimeout(() => {
                signupEmail.className = "login_inputs";
                emailLabel.innerText = "Email";
                emailLabel.className = "";
            }, 2500);
            return;
        }                   
    };
    
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        samePassword();
        verifyUsername2(8, 16);
        verifyPassword2(8, 16);
        verifyEmail(signupEmail)
        if (usernameCondition == true && passwordCondition == true && passwordCondition2 == true && emailCondition == true) {
            link.setAttribute("href", "./login.html");
            setTimeout(() => {
                window.location = link.href;
                
            }, 1500);
        }
    });
}

setTimeout(() => {
    signupInit();
}, 0);