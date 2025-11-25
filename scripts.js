document.addEventListener('DOMContentLoaded', function(){


    // Fechar aviso

    const avisoSeletor = document.getElementById('aviso');
    const fecharBotao = document.getElementById('fecharAviso');

    if (avisoSeletor && fecharBotao) {
        fecharBotao.addEventListener('click', () => {
            avisoSeletor.style.display = 'none';
        });
    }



   

    const pagBotao = document.querySelectorAll('.ofertas-pag-btn');
    const paginaDeOferta = document.querySelectorAll('.ofertas-pag');

    pagBotao.forEach(button => {

    button.addEventListener('click', () => {
        const pagNum = button.dataset.pag;

        paginaDeOferta.forEach(pag => pag.classList.add('hidden'));

        document.getElementById(`ofertas-pag-${pagNum}`).classList.remove('hidden');

        pagBotao.forEach(btn => {
            btn.className = 'ofertas-pag-btn px-4 py-2 border rounded cursor-pointer transition-colors duration-300 bg-white hover:bg-red-500 border-gray-300';
            });

        button.className = 'ofertas-pag-btn px-4 py-2 border rounded cursor-pointer trasition-colors duration-300 bg-red-500 text-white border-red-500';
        });
    })


         // Carrossel automático

        const container = document.getElementById("carrosselContainer");
        const imagens = document.querySelectorAll("#carrosselContainer .slide");

        let indice = 0;

            function proximaimagem() {
                indice++;

                if(indice >= imagens.length){
                    indice = 0;
                }

                const tamanhoImagem = 700 + 24;

                container.scrollTo(
                    {
                        left: indice * tamanhoImagem, behavior: "smooth"
                    }
                );
            }
                

    const containerDots = document.createElement("div");
    containerDots.className = 'absolute bottom-3 left-[350px] flex gap-2 z-2';

    const dots2 = [];

    for (let i = 0; i < imagens.length; i++) {

    const dot2 = document.createElement("div");

    dot2.className = 'w-3 h-3 rounded-full border border-red-500 bg-white';

    dots2.push(dot2);
    containerDots.appendChild(dot2);
    }

    container.parentElement.appendChild(containerDots);

    function atualizarDots() {
    dots2.forEach((dot2, i) => {
        dot2.style.backgroundColor = i === indice ? "red" : "white";
    });
    }

    setInterval(() => {
    proximaimagem();
    atualizarDots();
    }, 3000);

    atualizarDots();


    
     // Carrossel "EM DESTAQUES"

    const carrossel = document.getElementById("destaquesCarrossel");
    const cards = carrossel.children;
    const anterior = document.getElementById("anteriorBotao");
    const proximo = document.getElementById("proximoBotao");

    let indiceCarrossel = 0;

    const dotConteiner = document.createElement("div");
    dotConteiner.className = "flex justify-center gap-2 mt-3";

    const dots = [];

    for (let i = 0; i <= 4; i++) {
        const dot = document.createElement("div");
        dot.className = "w-3 h-3 border border-red-500 rounded-full bg-white cursor-pointer transition";

        dot.addEventListener('click', () => {
            indiceCarrossel += 1;
            atualiza();
        });
        
        dots.push(dot);
        dotConteiner.appendChild(dot);
    }

    carrossel.parentElement.appendChild(dotConteiner);

    function atualiza(){
        

        carrossel.scrollTo({
            left: indiceCarrossel * (334), behavior: "smooth",
        });

        dots.forEach((dot, i) => {
            dot.style.backgroundColor = i === indiceCarrossel ? "red" : "white";
        });
    }

    proximo.addEventListener("click", () => {
        if(indiceCarrossel < cards.length - 1) indiceCarrossel++;
        atualiza();
    });

    anterior.addEventListener("click", () => {
        if (indiceCarrossel > 0) indiceCarrossel--;
        atualiza();
    });

    atualiza();

                
    
    });

      
