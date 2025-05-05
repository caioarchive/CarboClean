
var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 18
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        1188: {
            slidesPerView: 3,
            spaceBetween: 24
        }
    }
});
   const botaoMostrar = document.getElementById("buttonlogin")
    const botaoRegistrarMostrar = document.getElementById("buttonRegistrar")
    const botaoFechar = document.querySelector(".login-form .fechar-btn")
    const loginForm = document.querySelector(".login-form")
    const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a")

    botaoMostrar.addEventListener("click", () => {
        document.body.classList.toggle("mostrar-login")
    })
    botaoFechar.addEventListener("click", () => botaoMostrar.click())
    
    loginSignupLink.forEach(link => {
        link.addEventListener("click", (e) =>{
            e.preventDefault();
            loginForm.classList[link.id === "signup-link" ? 'add' : 'remove']("mostrar-registrar")
        });
    });

    // Mostrar o formulário de registro ao clicar no botão de registrar
    botaoRegistrarMostrar.addEventListener("click", () => {
    loginForm.classList.add("mostrar-registrar");
    document.body.classList.add("mostrar-login"); 
});

    // Se o usuário já tiver uma conta, ele pode voltar para o login
    const voltarParaLogin = document.getElementById("login-link"); 
    voltarParaLogin.addEventListener("click", () => {
    loginForm.classList.remove("mostrar-registrar");
});
