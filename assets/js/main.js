console.log("Versão: 2025-11-27-0100");

document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos principais
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const menuContainer = document.querySelector('.menu'); 
    const dropdowns = document.querySelectorAll('.dropdown');

    // ======================================================
    // A. TOGGLE DO MENU PRINCIPAL (HAMBURGER)
    // ======================================================
    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'open' na navbar para mostrar/esconder o menu principal
            navbar.classList.toggle('open');
            menuContainer.classList.toggle('open'); 
            
            // Fecha todos os sub-menus ao fechar o menu principal (boa prática)
            if (!navbar.classList.contains('open')) {
                dropdowns.forEach(d => d.classList.remove('open'));
            }
        });
    }

    // ======================================================
    // B. TOGGLE DOS SUB-MENUS (Vertical)
    // ======================================================
    dropdowns.forEach(function(dropdown) {
        const dropdownBtn = dropdown.querySelector('.dropdown-btn');

        if (dropdownBtn) {
            dropdownBtn.addEventListener('click', function(e) {
                // Previne a navegação imediata (link é #)
                e.preventDefault(); 
                
                // 1. Fecha outros dropdowns abertos, exceto o atual
                dropdowns.forEach(function(d) {
                    if (d !== dropdown) {
                        d.classList.remove('open');
                    }
                });

                // 2. Toggle da classe 'open' no <li> atual
                dropdown.classList.toggle('open');
            });
        }
    });

    // ======================================================
    // C. FECHAR AO CLICAR FORA (Global Cleanup)
    // ======================================================
    document.addEventListener('click', function(event) {
        // Se o menu principal estiver aberto, não fazemos nada aqui para evitar conflitos
        if (navbar.classList.contains('open')) {
            return; 
        }
        
        // Se o clique NÃO foi dentro de um dropdown, fecha-os
        if (!event.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown.open').forEach(openDropdown => {
                openDropdown.classList.remove('open');
            });
        }
    });
});