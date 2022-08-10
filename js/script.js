
// ** HOME **
const slider = document.querySelector('#home #intro-slider')
const sliderImg = document.querySelector('#home #intro-slider .image-slider')
const sliderInput = document.querySelector('#home #intro-slider input')
const introButtonTech = document.querySelector('#home #intro-tech .btn')
const introButtonFitness = document.querySelector('#home #intro-fitness .btn')

// const line = document.querySelector('#intro-slider .image-slider')
const line = document.querySelector('#home .line')

function introTechAnimationOpen() {
  const introSubtitle = document.querySelector('#home #intro-tech h2')
  const introTitle = document.querySelector('#home #intro-tech h1')
  const introFitness = document.querySelector('#home #intro-fitness .cover')

  introSubtitle.style.opacity = '1'
  introTitle.style.transform = 'translateY(0)'

  sliderImg.style.width = '18%'

  introFitness.classList.add('active')
  line.classList.add('active-tech')
}

function introTechAnimationClose() {
  const introSubtitle = document.querySelector('#home #intro-tech h2')
  const introTitle = document.querySelector('#home #intro-tech h1')
  const introFitness = document.querySelector('#home #intro-fitness .cover')

  introSubtitle.style.opacity = '0'
  introTitle.style.transform = 'translateY(45px)'

  sliderImg.style.width = '60%'

  introFitness.classList.remove('active')
  line.classList.remove('active-tech')
}

function introFitAnimationOpen() {
  const introSubtitle = document.querySelector('#home #intro-fitness h2')
  const introTitle = document.querySelector('#home #intro-fitness h1')
  const introTech = document.querySelector('#home #intro-tech')
  const introImgSlider = document.querySelector('#home #intro-slider .image-slider')

  introSubtitle.style.opacity = '1'
  introTitle.style.transform = 'translateY(0)'

  sliderImg.style.width = '93%'

  introImgSlider.style.zIndex = '5'
  introTech.style.zIndex = '4'

  line.classList.add('active-fit')
}

function introFitAnimationClose() {
  const introSubtitle = document.querySelector('#home #intro-fitness h2')
  const introTitle = document.querySelector('#home #intro-fitness h1')
  const introTech = document.querySelector('#home #intro-tech')

  introSubtitle.style.opacity = '0'
  introTitle.style.transform = 'translateY(45px)'

  sliderImg.style.width = '60%'

  setTimeout(function(){
    introTech.style.zIndex = '20'
  }, 500)

  line.classList.remove('active-fit')
}

//z-index on tech hover
introButtonTech.addEventListener('mousemove', introTechAnimationOpen)

introButtonTech.addEventListener('mouseleave', introTechAnimationClose)

//z-index on fitness hover
introButtonFitness.addEventListener('mousemove', introFitAnimationOpen)

introButtonFitness.addEventListener('mouseleave', introFitAnimationClose)

// ** GENERAL **

// === scroll reveal ===
ScrollReveal({
  // reset: true,
  distance:'40px',
  duration: 1500,
  delay: 0
});

  ScrollReveal().reveal('.main-title, .post-title, .paragraph, #reference, #contact .wrap-sm .card', { origin: 'bottom'});


// === toggle menu ===

document.querySelector('#site-menu-nav ul.site-menu-toggle').addEventListener('click', function () {
  // toggle navigation button
  this.classList.toggle('active')

  // toggle sidebar navigation pannel
  document.querySelector('#sidebar').classList.toggle('active')

})

