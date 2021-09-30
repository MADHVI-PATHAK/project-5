const navSlide = () =>{
    const bars = document.querySelector('.fa-bars');
    const web = document.querySelector('.web');

    bars.addEventListener('click', () => {
        web.classList.toggle('web-active');
    });
}
navSlide();

const navSearch = () =>{
    const insert = document.querySelector('.fa-search');
    const pop = document.querySelector('.pop-up');

    insert.addEventListener('click', () => {
        pop.classList.toggle('pop-active');
    });
}
navSearch();