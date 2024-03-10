// OPEN SIDE BAR
var navBar = document.querySelector('.nav-bar');
var navBarUl = document.querySelector('.nav-bar ul');
var iconBurger = document.querySelector('.icon-hamburger');
var content = document.querySelector('main');
var sideBar = false;

function openSidebar () {
    sideBar = !sideBar;

    if (sideBar) {
        navBar.style.display = 'block';
        iconBurger.style.display = 'none';
        navBarUl.style.right = '0';
        navBarUl.style.animationName = 'show-bar';
        content.style.filter = 'blur(2px)';
        console.log(sideBar)
        console.log(navBar)
        
    } else {
        navBar.style.display = 'none';
        iconBurger.style.display = 'block';
        navBarUl.style.right = '-100%';
        navBarUl.style.animationName = '';
        content.style.filter = '';
        
    }
}

// CLOSE SIDE BAR ON CLICK MAIN TAG
function closeSidebar() {

    if (sideBar) {
        openSidebar()
    }
}


// Função para permitir apenas números
function permitirApenasNumeros(event) {
    if (event.which < 48 || event.which > 57) {
        event.preventDefault();
    }
}

// Adiciona os listeners de evento
document.getElementById('telefone').addEventListener('keypress', permitirApenasNumeros);
document.getElementById('celular').addEventListener('keypress', permitirApenasNumeros);


// Função para formatar o número de telefone
function formatarTelefone(input) {
    let num = input.value.replace(/\D/g, ""); // Remove tudo o que não é dígito
    num = num.substring(0, 11); // Limita a entrada para não mais que 11 dígitos
    num = num.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona parênteses em volta dos dois primeiros dígitos
    num = num.replace(/(\d)(\d{4})$/, "$1-$2"); // Adiciona um hífen antes dos últimos quatro dígitos
    input.value = num;
}

// Função para validar o número de telefone
function validarTelefone(input) {
    const num = input.value.replace(/\D/g, ""); // Remove tudo o que não é dígito
    if (num.length < 10) {
        input.setCustomValidity("Por favor, insira um número de telefone válido com pelo menos 10 dígitos.");
        return false;
    } else if (num.length > 11) {
        input.setCustomValidity("Por favor, insira um número de telefone válido com no máximo 11 dígitos.");
        return false;
    }
    input.value = formatarTelefone(input.value);
    input.setCustomValidity("");
    return true;
}

// Adiciona os listeners de evento
document.getElementById('telefone').addEventListener('input', function() {
    formatarTelefone(this);
    validarTelefone(this);
});
document.getElementById('celular').addEventListener('input', function() {
    formatarTelefone(this);
    validarTelefone(this);
});

// Função para desativar o preenchimento automático
function desativarAutocomplete(input) {
    input.setAttribute('autocomplete', 'off');
}

// Adiciona os listeners de evento
window.addEventListener('load', function() {
    desativarAutocomplete(document.getElementById('telefone'));
    desativarAutocomplete(document.getElementById('celular'));
});
