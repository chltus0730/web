const loadingArea=document.querySelector('#loading');
const loadingImg=document.querySelector('#loading img');

window.addEventListener('load', ()=>{
    loadingArea.animate({
        backdropFilter: ['blur(1rem)', 'blur(0)'],
        opacity: '0'
    },
    {
        duration: 1500,
        delay: 500,
        ease: 'ease',
        fill: 'forwards'
    });

    loadingImg.animate({
        opacity: '0'
    },
    {
        duration: 1500,
        delay: 500,
        ease: 'ease',
        fill: 'forwards'
    });

    setTimeout(()=>{
        loadingArea.style.display='none';
    }, 1000);
});