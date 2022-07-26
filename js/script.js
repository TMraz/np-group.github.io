const slider = document.querySelector('#intro-slider')
const sliderImg = document.querySelector('#intro-slider .image-slider')
const sliderInput = document.querySelector('#intro-slider input')
const introButtonTech = document.querySelector('#intro-tech .btn')
const introButtonFitness = document.querySelector('#intro-fitness .btn')

//z-index on tech hover
introButtonTech.addEventListener('mousemove', function() {
  const introSubtitle = document.querySelector('#intro-tech h2')
  const introTitle = document.querySelector('#intro-tech h1')
  const introFitness = document.querySelector('#intro-fitness.pos-abs .cover')

  introSubtitle.style.opacity = '1'
  introTitle.style.transform = 'translateY(0)'

  sliderImg.style.width = '20%'

  introFitness.style.visibility = 'visible'
  introFitness.style.width = '90%'
})

introButtonTech.addEventListener('mouseleave', function() {
  const introSubtitle = document.querySelector('#intro-tech h2')
  const introTitle = document.querySelector('#intro-tech h1')
  const introFitness = document.querySelector('#intro-fitness.pos-abs .cover')

  introSubtitle.style.opacity = '0'
  introTitle.style.transform = 'translateY(45px)'

  sliderImg.style.width = '60%'

  setTimeout(function(){
    introFitness.style.visibility = 'hidden'
  }, 500)

  introFitness.style.width = '0%'

})

//z-index on fitness hover
introButtonFitness.addEventListener('mousemove', function() {
  const introSubtitle = document.querySelector('#intro-fitness h2')
  const introTitle = document.querySelector('#intro-fitness h1')
  const introTech = document.querySelector('#intro-tech')
  const introImgSlider = document.querySelector('#intro-slider .image-slider')

  introSubtitle.style.opacity = '1'
  introTitle.style.transform = 'translateY(0)'

  sliderImg.style.width = '93%'

  introImgSlider.style.zIndex = '5'
  introTech.style.zIndex = '4'
})

introButtonFitness.addEventListener('mouseleave', function() {
  const introSubtitle = document.querySelector('#intro-fitness h2')
  const introTitle = document.querySelector('#intro-fitness h1')
  const introTech = document.querySelector('#intro-tech')

  introSubtitle.style.opacity = '0'
  introTitle.style.transform = 'translateY(45px)'

  sliderImg.style.width = '60%'

  setTimeout(function(){
    introTech.style.zIndex = '20'
  }, 500)
})

// === scroll reveal ===
ScrollReveal({
  // reset: true,
  distance:'40px',
  duration: 1500,
  delay: 0
});

  ScrollReveal().reveal('.main-title, .post-title, .paragraph, #reference, #contact .wrap-sm .card', { origin: 'bottom'});
  // ScrollReveal().reveal('#work.container', { origin: 'bottom', distance: '0'});
  // ScrollReveal().reveal('.right', { origin: 'right', distance: '60px'});
  // ScrollReveal().reveal('.left', { origin: 'left', distance: '60px'});
  // ScrollReveal().reveal('.line:not(first-child)', { origin: 'top', distance: '60px', delay: '800'});

// === on scroll navigation bar change ===
window.addEventListener('scroll', function () {
  const navigationBar = document.querySelector('header.container')
  let windowPosition = window.scrollY 

  console.log(windowPosition)

  navigationBar.classList.toggle('scroll-active', windowPosition)
})

