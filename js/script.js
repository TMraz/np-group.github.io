// ** HEADER **

// === toggle menu ===
document.querySelector('#site-navigation ul.site-menu-toggle').addEventListener('click', function () {
  // toggle navigation button
  this.classList.toggle('active')
  document.querySelector('#menu-close').classList.toggle('menu-close')
  // toggle sidebar navigation pannel
  document.querySelector('#sidebar').classList.toggle('active')
})

// === hide/ show menu on scroll ===
let lastScroll = 200

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset

  if (currentScroll > lastScroll && !document.querySelector('header.site-header').classList.contains('scroll-down')) {
    document.querySelector('header.site-header').classList.add('scroll-down')
  }

  if (currentScroll < lastScroll && document.querySelector('header.site-header').classList.contains('scroll-down')) {
    document.querySelector('header.site-header').classList.remove('scroll-down')
  }

  if (currentScroll > document.querySelector('#home').offsetHeight) {
    document.querySelector('header.site-header').classList.add('site-header__styled')
  }

  if (currentScroll < document.querySelector('#home').offsetHeight) {
    document.querySelector('header.site-header').classList.remove('site-header__styled')
  }



  lastScroll = currentScroll
})



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
  distance:'60px',
  duration: 2000,
  delay: 100
})

ScrollReveal().reveal('.reveal-btm', { origin: 'bottom'})
ScrollReveal().reveal('.reveal-rght', { origin: 'right',  distance: '60px'})

ScrollReveal().reveal('.reveal-offset', { viewOffset: {bottom: 80} })


// ** ABOUT **

//track textMission
const storyLinePointId1 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid .point[data-id="1"]')
const storyLinePointId2 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid .point[data-id="2"]')
const storyLinePointId3 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid .point[data-id="3"]')
const storyLinePointId4 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid .point[data-id="4"]')
const storyLinePointId5 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid .point[data-id="5"]')

const storyLineId1 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid .line[data-id="1"]')
const storyLineId2 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid .line[data-id="2"]')
const storyLineId3 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid .line[data-id="3"]')
const storyLineId4 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid .line[data-id="4"]')
const storyLineId5 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid .line[data-id="5"]')

const storyLineTextId1 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid p[data-id="1"]')
const storyLineTextId2 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid p[data-id="2"]')
const storyLineTextId3 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid p[data-id="3"]')
const storyLineTextId4 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid p[data-id="4"]')
const storyLineTextId5 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid p[data-id="5"]')
const storyLineTextId6 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid p[data-id="6"]')
const storyLineTextId7 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid p[data-id="7"]')
const storyLineTextId8 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid p[data-id="8"]')
const storyLineTextId9 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid p[data-id="9"]')
const storyLineTextId10 = document.querySelector('#about .section__content-wrap > article:first-of-type .grid p[data-id="10"]')

const observeMe = document.querySelector('#about .section__content-wrap > article:first-of-type .grid')

const observerAnimation = function(entries) {
  entries.forEach(entry => {
      //if the element is visible

      if (entry.isIntersecting) {
          storyLinePointId1.classList.add('active')
          storyLineId1.classList.add('active')
          storyLineTextId1.classList.add('active')
          storyLineTextId6.classList.add('active')

          storyLinePointId2.classList.add('active')
          storyLineId2.classList.add('active')
          storyLineTextId2.classList.add('active')
          storyLineTextId7.classList.add('active')

          storyLinePointId3.classList.add('active')
          storyLineId3.classList.add('active')
          storyLineTextId3.classList.add('active')
          storyLineTextId8.classList.add('active')

          storyLinePointId4.classList.add('active')
          storyLineId4.classList.add('active')
          storyLineTextId4.classList.add('active')
          storyLineTextId9.classList.add('active')

          storyLinePointId5.classList.add('active')
          storyLineId5.classList.add('active')
          storyLineTextId5.classList.add('active')
          storyLineTextId10.classList.add('active')
      }
  })
}


