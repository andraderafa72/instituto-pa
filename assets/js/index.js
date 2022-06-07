const $ = (query) => document.querySelector(query);
const $$ = (query) => document.querySelectorAll(query);


const servicos = $$('.servicos .servico');

servicos.forEach((servico) => {
  servico.addEventListener('click', () => {
    if(servico.classList.contains('active')){
      servico.classList.remove('active')
    } else {
      servico.classList.add('active')
    }
  })
})