const secoes = document.querySelectorAll('.revelar');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting){
            entrada.target.classList.add('visivel');
        }
    });
},{threshold: 0.2});

secoes.forEach((secao) => observador.observe(secao));


const botaoTema = document.getElementById('botao-tema');

if(localStorage.getItem('tema') === 'claro'){
    document.body.classList.add('tema-claro');
    botaoTema.textContent = 'Tema escuro';
}

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('claro');
    const claro = document.body.classList.contains('claro');
    localStorage.setItem('tema', claro ? 'claro' : 'escuro');
    botaoTema.textContent = claro ? 'Tema escuro' : 'Tema claro';
});