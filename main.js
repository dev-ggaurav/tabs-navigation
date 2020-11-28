const btns = document.querySelectorAll('.tab-btn');
const main = document.querySelector('.main-container');
const content = document.querySelectorAll('.content');

main.addEventListener('click', function(e){
    const dataId = e.target.dataset.id;
    if(dataId){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        content.forEach(function(article){
            article.classList.remove('active');
        })

        const activeElement = document.getElementById(dataId);
        activeElement.classList.add('active');
    }
});

