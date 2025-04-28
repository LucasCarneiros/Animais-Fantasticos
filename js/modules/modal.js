export default function initModal(){
  const containerModal = document.querySelector('[data-modal="container"]')
  const abrirBtn = document.querySelector('[data-modal="abrir"]')
  const fecharBtn = document.querySelector('[data-modal="fechar"]')

  if(containerModal && abrirBtn && fecharBtn){
    function abrirModal(event){
      event.preventDefault();
      containerModal.classList.add('ativo');
    }

    function fecharModal(event){
      event.preventDefault();
      containerModal.classList.remove('ativo')
    }

    function cliqueForaModal(event){
      if(event.target === this)
        fecharModal(event)
    }

    abrirBtn.addEventListener('click', abrirModal);
    fecharBtn.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', cliqueForaModal)
  }
}



