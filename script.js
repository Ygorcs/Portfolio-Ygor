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
    document.body.classList.add('claro');
    botaoTema.textContent = 'Tema escuro';
}

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('claro');
    const claro = document.body.classList.contains('claro');
    localStorage.setItem('tema', claro ? 'claro' : 'escuro');
    botaoTema.textContent = claro ? 'Tema escuro' : 'Tema claro';
});

async function carregarProjetos() {
    const lista = document.getElementById('lista-projetos');

    try {
        const resposta = await fetch('projetos.json');
        const projetos = await resposta.json();

        projetos.forEach((projeto) => {
            lista.innerHTML += `
                <article class="projeto">
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                    <a href="${projeto.link}">Ver código</a>
                </article>
            `;
        });
    } catch (erro) {
        lista.textContent = 'Não foi possível carregar os projetos.';
    }
}

carregarProjetos();