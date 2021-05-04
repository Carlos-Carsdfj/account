const $increment = document.querySelector('#increment')
const $decrement = document.querySelector('#decrement')
const $reset = document.querySelector('#reset')
const $act = document.querySelector('#accountant')


$act.textContent = localStorage.getItem('account') ? localStorage.getItem('account') : 0
$increment.addEventListener('click', ()=>{

    $act.textContent= Number($act.textContent)+1
    localStorage.account = $act.textContent
    document.title= $act.textContent
})
$decrement.addEventListener('click', ()=>{

    localStorage.account = $act.textContent
    $act.textContent= Number($act.textContent)-1
    document.title= $act.textContent
})

$reset.addEventListener('click', ()=>{
    
    $act.textContent= 0
    localStorage.account = $act.textContent
    document.title= 'Contador|Carsd'
})

