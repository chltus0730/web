const menu=document.querySelector('#menu');

const lists=[
    {
        img : 'menu1.jpg',
        name : '서울',
        plan : '3박 4일',
        price : '600,000',
        spot : '경복궁, 남산 타워, 한강'
    },
    {
        img : 'menu2.jpg',
        name : '제주도',
        plan : '3박 4일',
        price : '650,000',
        spot : '성산 일출봉, 우도, 한라산'
    },
    {
        img : 'menu3.jpg',
        name : '도쿄, 일본',
        plan : '3박 4일',
        price : '900,000',
        spot : '도쿄 타워, 아사쿠사'
    },
    {
        img : 'menu4.jpg',
        name : '하노이, 베트남',
        plan : '3박 4일',
        price : '700,000',
        spot : '문묘, 하롱 베이, 호안끼엠 호수'
    },
    {
        img : 'menu5.jpg',
        name : '하와이, 미국',
        plan : '5박 6일',
        price : '2,500,000',
        spot : '다이아몬드 헤드, 와이키키 비치'
    },
    {
        img : 'menu6.jpg',
        name : '밴쿠버, 캐나다',
        plan : '5박 6일',
        price : '2,600,000',
        spot : '그라우스 마운틴, 랍슨 거리'
    },
    {
        img : 'menu7.jpg',
        name : '파리, 프랑스',
        plan : '5박 6일',
        price : '2,270,000',
        spot : '루브르 박물관, 에펠 탑'
    },
    {
        img : 'menu8.jpg',
        name : '로마, 이탈리아',
        plan : '5박 6일',
        price : '2,230,000',
        spot : '바티칸 박물관, 콜로세움'
    }
];

for(let i=0; i<lists.length; i++){

    const img=lists[i].img;
    const name=lists[i].name;
    const plan=lists[i].plan;
    const price=lists[i].price;
    const spot=lists[i].spot;
    const content=`<div class="menus"><img src="img/${img}" alt="">
    <p class="menu-name">${name}</p> <p>${plan}</p> <p>${price}원<p> <p class="menu-spot">${spot} 등<p></div>`;
    menu.insertAdjacentHTML('beforeend', content);

    const menus=document.querySelectorAll('.menus');
    const keyframes={
        opacity : [0,1]
    };
    const options={
        duration : 1500,
        delay : i*300,
        fill : 'forwards'
    };
    menus[i].animate(keyframes, options);
};

let currentIndex=0;
const slides=document.querySelector('.slides');
const totalSlides=slides.children.length;
function showNextSlide(){
    currentIndex=(currentIndex+1)%totalSlides;
    slides.style.transform=`translateX(-${currentIndex*100}%)`;
};
setInterval(showNextSlide, 2500);