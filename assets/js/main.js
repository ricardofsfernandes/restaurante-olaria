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