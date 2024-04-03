$(function(){
    const menu =$('header ul li'),
          contents =$('main > section')

    menu.click(function(){
        $(this).addClass('on')
        $(this).siblings().removeClass('on')

        let idx =$(this).index()
        console.log(idx)
        let section = contents.eq(idx)
        let sectionD =section.offset().top-(114)
        $('html, body').animate({
            scrollTop : sectionD
        })
    })

    $(window).scroll(function(){
        contents.each(function(){
            if($(this).offset().top <= $(window).scrollTop()+114){
                let idx =$(this).index()
                menu.removeClass('on')
                menu.eq(idx).addClass('on')
            }
        })
    })
})

// ============= name gsap============
let tll = new gsap.timeline()

tll.to(".name3", 1, {
    y: 650,
    scale: 1.8,
    opacity: 1,
    ease: "bounce.out",
})
.to(".name2", 0.6, {
    y: 620,
    x: -300,
    rotate: -9,
    scale: 1.4,
    opacity: 1,
    ease: "circ.out",
})
.to(".name1", 1, {
    y: 610,
    x:310,
    rotate: 5,
    scale: 1.4,
    opacity: 1,
    ease: "elastic.out(1,0.3)",
})
.to(".name5", 0.5, {
    y: 540,
    rotate: -2,
    scale: 1.5,
    opacity:1,
    ease: "slow(0.7,0.7,false)",
    
})
.to(".name4", 0.6, {
    y: 530,
    x: -260,
    rotate: -10,
    scale: 1.5,
    opacity:1,
})
.to(".name6", 0.6, {
    y: 480,
    x: 300,
    rotate: 8,
    scale: 1.2,
    opacity:1,
})

.to(".name7", 1, {
    y: 460,
    rotate: -2,
    scale: 1.5,
    opacity:1,
})

gsap.to(".hart1", 2, {
    y:600,
    scale:1.5,
    ease: "elastic.out(1,0.3)",
    opacity:1,
    delay:1,
    rotate: 3,
})
gsap.to(".hart2", 3, {
    y:560,
    scale:1.5,
    ease: "bounce.out",
    opacity:1,
    delay:2,

})
gsap.to(".hart3", 3, {
    y:455,
    scale:2,
    ease: "elastic.out(1,0.3)",
    delay:5,
    opacity:1,
})
gsap.to(".hart4", 2, {
    y:540,
    scale:2,
    ease: "bounce.out",
    opacity:1,
    rotate: -8
})
gsap.to(".hart5", 2, {
    y:600,
    scale:2,
    ease: "bounce.out",
    opacity:5,
    rotate: -6
})
gsap.to(".hart6", 2, {
    y:600,
    scale:2,
    ease: "bounce.out",
    opacity:5,
    rotate: 5
})



// videoplay
const items =document.querySelectorAll('.gallery-collection li')
const close =document.querySelector('.popup button')
const popup =document.querySelector('.popup')

items.forEach((el, index)=>{
    el.addEventListener('mouseenter', ()=> {
        el.querySelector('video').play()
    })
    el.onmouseleave = ()=> {
        el.querySelector('video').pause()
        el.querySelector('video').currentTime = '0'
    }
     el.addEventListener('click', ()=>{
        let title = el.querySelector('h3').innerText
        let text = el.querySelector('p').innerText
        let videosrc = el.querySelector('video').getAttribute('src')

        popup.querySelector('.txt h2').innerText = title
        popup.querySelector('.txt p').innerText = text
        popup.querySelector('video').setAttribute('src',videosrc)

        popup.classList.add('on')
        popup.querySelector('video').play()
     })
})

close.addEventListener('click', ()=>{
    popup.classList.remove('on')
    popup.querySelector('video').pause()
})


const changingTextElement = document.getElementById('changing-text');
const sentences = [
  "HELLO !",
  "저의 포트폴리오를 봐주셔서 감사합니다.",
  "행복한 하루 되세요 ♥",
  "bye~"
];
let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentSentence = sentences[sentenceIndex];

  if (!isDeleting) {
    changingTextElement.textContent = currentSentence.substring(0, charIndex + 1);
    charIndex++;
  } else {
    changingTextElement.textContent = currentSentence.substring(0, charIndex - 1);
    charIndex--;
  }

  if (!isDeleting && charIndex === currentSentence.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); 
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    sentenceIndex++;
    if (sentenceIndex === sentences.length) {
      sentenceIndex = 0; 
    }
    setTimeout(typeEffect, 500); 
  } else {
    setTimeout(typeEffect, 50); 
  }
}
typeEffect();