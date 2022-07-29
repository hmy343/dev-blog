const btn = document.querySelector(".btn-menu");

const nav = document.querySelector('.main-nav');

// 버튼을 클릭했을 때
// >> 버튼의 이름이 Nenu라고 한다면
// 숨겨져 있던 nav가 화면에 나타나야한다.
/* 
    [버튼을 클릭했을 때]
    1. 버튼의 이름이 Menu라고 한다면
    숨겨져 있던 nav가 화면에 나타나야 함
    2. Content가 Close로 변경
*/

btn.addEventListener('click', () => {
    nav.classList.toggle('open-menu');
    if(btn.innerHTML === 'Menu') {
        // nav.classList.add('open-menu');
        btn.innerHTML = 'Close';
    } else {
        // nav.classList.remove('open-menu');
        btn.innerHTML = 'Menu';
    }
});