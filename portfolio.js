function filterProducts(category){
    const portfolioCards=document.querySelectorAll('.portfolio-card');

    portfolioCards.forEach(card=>{
        const portfolioCategory=card.getAttribute('data-category');

        if(category===portfolioCategory||category==='all'){
            card.style.display='block';
        }
        else{
            card.style.display='none';
        }
    });
};

const modal=document.getElementById('modal');
const modalImg=document.getElementById('modalImg');
const modalTitle=document.getElementById('modalTitle');
const modalInfo=document.getElementById('modalInfo');
const modalLink=document.getElementById('modalLink');
const close=document.getElementById('close');

const projectData=[
  {
    img: "images/Thumbnail 1.png",
    title: "학과 홍보 DA 제작 및 집행",
    info: "인하공업전문대학 디지털마케팅공학과의 인지도를 높이기 위해 고등학생을 대상으로 기획했습니다. DA를 집행해 19,002회의 노출과 43회의 클릭을 얻었습니다.",
    link: ""
  },
  {
    img: "images/Thumbnail 2.png",
    title: "기업 SNS 콘텐츠 제작",
    info: "'모두의연구소' 공식 인스타그램 콘텐츠입니다. 직장인에게 기업의 교육 서비스를 효과적으로 알리기 위해 깔끔한 폰트로 정보 전달 중심의 분위기를 형성했습니다.",
    link: ""
  },
  {
    img: "images/Thumbnail 3.png",
    title: "쇼피 상세 페이지 제작",
    info: "해외 직구 플랫폼 쇼피의 상세 페이지를 제작했습니다. 싱가포르 소비자 맞춤 USP를 강조했습니다.",
    link: ""
  },
  {
    img: "images/Thumbnail 4.png",
    title: "초등학교 교과서 표지 제작",
    info: "커뮤니케이션 국제 디자인 공모전 입선작입니다. 펜 툴 만을 활용한 순수 창작물 제작을 목표로 삼아, 이미지 소스를 일절 사용하지 않았습니다.",
    link: ""
  },
  {
    img: "images/Thumbnail 5.jpg",
    title: "AI 교육 포스터 제작",
    info: "대학생 대상 AI 교육을 안내하는 포스터입니다. 정보 전달과 시각적 흥미를 동시에 고려했습니다.",
    link: ""
  },
  {
    img: "images/Thumbnail 6.png",
    title: "프로모션 DA 제작",
    info: "할인 프로모션을 위한 DA를 제작했습니다.",
    link: ""
  },
  {
    img: "images/panel.png",
    title: "저당 쇼핑몰 기획 및 제작",
    info: "저당 디저트를 중심으로 한 쇼핑몰 기획, 디자인, 마케팅을 전체적으로 담당했습니다.",
    link: ""
  },
  {
    img: "images/Thumbnail 8.jpg",
    title: "단백질 쉐이크 리브랜딩",
    info: "기존 브랜드의 이미지와 패키지를 새롭게 개선한 리브랜딩 프로젝트입니다.",
    link: ""
  },
  {
    img: "images/Thumbnail 9.png",
    title: "캠핑 업체 홍보 쇼츠 제작",
    info: "MZ 세대를 타겟으로 한 쇼츠 콘텐츠를 기획 및 편집했습니다.",
    link: "https://youtube.com/shorts/nB44XQuoz5I?feature=shared"
  },
  {
    img: "images/Thumbnail 10.png",
    title: "기업 행사 현장 스케치 제작",
    info: "기업 행사 현장의 하이라이트를 담은 영상입니다. 현장 분위기를 생생하게 전달하고 싶다는 요청을 반영해, 애니메이션을 적절히 활용했습니다.",
    link: "https://youtube.com/shorts/uXCA2298Qkw?feature=shared"
  },
  {
    img: "images/Thumbnail 11.png",
    title: "경찰청 교제 폭력 예방 영상 제작",
    info: "인천 서부 경찰청이 의뢰한 교제 폭력 예방 영상입니다.",
    link: "https://drive.google.com/file/d/1YPBgQXpRT3bqhCmpywNGIWOUa1JEHR4i/view?usp=sharing"
  },
  {
    img: "images/Thumbnail 12.png",
    title: "베이커리 랜딩 페이지 제작",
    info: "베이커리의 '먹음직스러움'을 담은 랜딩 페이지입니다.",
    link: "빵굿/index.html"
  },
  {
    img: "images/Thumbnail 13.png",
    title: "여행사 랜딩 페이지 제작",
    info: "여름 시즌 테마에 맞춘 여행사 랜딩 페이지입니다.",
    link: "떠나볼래/index.html"
  },
  {
    img: "images/Thumbnail 14.png",
    title: "학과 랜딩 페이지 제작",
    info: "인하공업전문대학 디지털마케팅공학과를 소개하는 랜딩 페이지입니다. 신입생을 대상으로, 입학 전에 궁금할 내용을 주로 담았습니다.",
    link: "인하공업전문대학 디지털마케팅공학과/index.html"
  }
];

document.querySelectorAll('.portfolio-card').forEach(card=>{
  card.addEventListener('click', ()=>{
    const id=parseInt(card.getAttribute('data-id'))-1;
    const p=projectData[id];

    modalImg.src=p.img;
    modalTitle.textContent=p.title;
    modalInfo.textContent=p.info;

    if(p.link){
    modalLink.style.display='inline-block';
    modalLink.href=p.link;
    }
    else{modalLink.style.display='none';
    }
    modalLink.href=p.link;
    modal.style.display='flex';
  });
});

close.addEventListener('click', ()=>{
  modal.style.display='none';
});

window.addEventListener('click', (e)=>{
  if(e.target===modal){
    modal.style.display='none';
  }
});