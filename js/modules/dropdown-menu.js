import outsideclick from "./outsideclick.js";

export default function initDropdownMenu(){
const dropdownMenus = document.querySelectorAll('[data-dropdown]')

dropdownMenus.forEach(menu => {
  ['touchstart', 'click'].forEach(userEvent => {
    menu.addEventListener(userEvent, handleClick);
  })
})

function handleClick(event){
  event.preventDefault();
  this.classList.add('active');
  outsideclick(this,  ['touchstart', 'click'], () => {
    this.classList.remove('active');
  });
};
}


