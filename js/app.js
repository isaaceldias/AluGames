function alterarStatus(numJogo){
    let botao=document.getElementsByTagName('a')[numJogo-1];
    let img=document.querySelector(`#game-${numJogo} div`);
    if (botao.textContent=='Alugar') {
        botao.textContent='Devolver'
        botao.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
    }else{
        botao.textContent='Alugar'
        botao.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');

    };
};
