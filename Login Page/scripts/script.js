'use script';

const close_icon = document.querySelector('.fa');
const close_div = document.querySelector('#ajuda_mensagem');
const close_button = document.querySelector('#ajuda');

close_button.addEventListener('click', function() {
    close_div.classList.toggle('close');
});

function closeDiv() {
    if(!close_div.classList.contains('close')) {
        close_div.classList.toggle('close');
    }
}