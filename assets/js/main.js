console.log("Versão: 2025-11-18-0900");

// Espera que todo o documento esteja pronto
        document.addEventListener('DOMContentLoaded', function() {
            
            // Procura todos os botões de dropdown
            document.querySelectorAll('.dropdown-btn').forEach(button => {
                button.addEventListener('click', function(event) {
                    
                    // Impede que o link navegue (porque é um href="#")
                    event.preventDefault(); 
                    
                    const dropdown = this.closest('.dropdown'); // O <li> pai
                    const isOpen = dropdown.classList.contains('open');

                    // 1. Fechar todos os outros dropdowns
                    document.querySelectorAll('.dropdown.open').forEach(openDropdown => {
                        if (openDropdown !== dropdown) {
                            openDropdown.classList.remove('open');
                        }
                    });

                    // 2. Abrir ou Fechar o dropdown atual
                    if (!isOpen) {
                        dropdown.classList.add('open');
                    } else {
                        dropdown.classList.remove('open');
                    }
                });
            });

            // Opcional: Fechar o menu se clicar fora dele
            document.addEventListener('click', function(event) {
                // Verifica se o clique NÃO foi dentro de um dropdown
                if (!event.target.closest('.dropdown')) {
                    // Fecha todos os dropdowns que estiverem abertos
                    document.querySelectorAll('.dropdown.open').forEach(openDropdown => {
                        openDropdown.classList.remove('open');
                    });
                }
            });
        });


/* toggle menu - responsive mobile */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Elementos principais
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const menuContainer = document.querySelector('.menu'); // Onde está o ul
    
    // 2. Elementos Dropdown
    const dropdowns = document.querySelectorAll('.dropdown');

    // ======================================================
    // A. TOGGLE DO MENU PRINCIPAL (HAMBURGER)
    // ======================================================
    if (menuToggle && menuContainer) {
        menuToggle.addEventListener('click', function() {
            // Usa a classe 'open' na navbar para manipular tanto o hamburger
            // quanto o menu container (como visto no CSS)
            navbar.classList.toggle('open');
            
            // Alterna a visibilidade do menu (para browsers antigos, embora o CSS trate disso)
            menuContainer.classList.toggle('open'); 
        });
    }

    // ======================================================
    // B. TOGGLE DOS SUB-MENUS (DROPDOWNS VERTICAIS)
    // ======================================================
    dropdowns.forEach(function(dropdown) {
        const dropdownBtn = dropdown.querySelector('.dropdown-btn');

        if (dropdownBtn) {
            dropdownBtn.addEventListener('click', function(e) {
                // Previne a navegação imediata para o link '#'
                e.preventDefault(); 
                e.stopPropagation(); // Evita que o evento suba

                // Toggle da classe 'open' apenas no <li> pai
                dropdown.classList.toggle('open');

                // NOTA: Para um UX limpo, podes querer fechar outros dropdowns abertos.
                // Mas, por agora, vamos manter este simples.
            });
        }
    });

    // ======================================================
    // C. DESATIVAR O HOVER NO MOBILE (Pode ser feito no CSS, mas o JS é mais seguro)
    // Se o ecrã for pequeno, remove o hover do desktop se existir
    // Vamos usar a media query que definiste para isso (768px)
    // ======================================================
    if (window.innerWidth <= 768) {
        // Encontra todos os links que abrem dropdowns e remove a regra de :hover
        dropdowns.forEach(dropdown => {
            // Remove a classe se o menu for aberto por hover CSS
            dropdown.classList.remove('dropdown:hover'); 
        });
    }
});