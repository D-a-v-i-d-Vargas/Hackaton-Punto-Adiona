function guardarEnStorage() {
  localStorage.setItem("mensaje", "HOLA CH69");
}

document.addEventListener("DOMContentLoaded", function() {
            const elementosAnimar = document.querySelectorAll('.animar-arriba');
            
            const observador = new IntersectionObserver((entradas, observador) => {
                entradas.forEach(entrada => {
                    if (entrada.isIntersecting) {
                        entrada.target.classList.add('visible');
                        observador.unobserve(entrada.target); 
                    }
                });
            }, {
                threshold: .80
            });

            elementosAnimar.forEach(elemento => {
                observador.observe(elemento);
            });
        });
   