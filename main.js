const btn = document.querySelector('#clickMe');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('shown');
})