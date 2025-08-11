
const menav = document.querySelectorAll('.me-nav li');
const folder= document.querySelectorAll('.my-folder');


menav.forEach(item => {
    item.addEventListener('click', () => {
        
        menav.forEach(el => el.classList.remove('me-active'));
        item.classList.add('me-active');

        let text = item.textContent;
        folder.forEach(el => 
            el.classList.toggle('my-active', el.id === text)
        );
    });
});
