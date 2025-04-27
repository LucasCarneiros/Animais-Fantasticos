export default function initTabNav(){
  //Selecione cada item da lista
const tabMenu = document.querySelectorAll('[ data-tab="menu"] li');

//Selecione cada seção
const tabContent = document.querySelectorAll('[data-tab="content"] section');

if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo")

  function activeTab(index){
    tabContent.forEach((conteudo)=>{
      conteudo.classList.remove('ativo')
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }

  tabMenu.forEach((itemMenu,index) =>{
    itemMenu.addEventListener('click', () =>{
      activeTab(index)
    })
  })
}
}







