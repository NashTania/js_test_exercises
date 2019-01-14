window.onload = function(){
  
  let imput = document.getElementById('name');

  imput.addEventListener('blur',(event) => {
    event.preventDefault();
    if(imput.dataset.value !== event.currentTarget.value) {
      imput.classList.add('red')
    }
 })
}
