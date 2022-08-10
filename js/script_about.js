// ** ABOUT **

document.addEventListener('scroll', function () {
    const textMission = document.querySelector('#about .box:first-of-type')
    const borderArticle = document.querySelector('#about .box:first-of-type article')
    const borderArticleBottom = document.querySelector('#about .box:first-of-type article span')


    textMission.style.opacity = '1'
    borderArticle.classList.add('border')
    borderArticleBottom.classList.add('active')
})

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

//track textMission
const storyLinePointId1 = document.querySelector('#about .wrap > article:first-of-type .grid .point[data-id="1"]')
const storyLinePointId2 = document.querySelector('#about .wrap > article:first-of-type .grid .point[data-id="2"]')
const storyLinePointId3 = document.querySelector('#about .wrap > article:first-of-type .grid .point[data-id="3"]')
const storyLinePointId4 = document.querySelector('#about .wrap > article:first-of-type .grid .point[data-id="4"]')
const storyLinePointId5 = document.querySelector('#about .wrap > article:first-of-type .grid .point[data-id="5"]')

const storyLineId1 = document.querySelector('#about .wrap > article:first-of-type .grid .line[data-id="1"]')
const storyLineId2 = document.querySelector('#about .wrap > article:first-of-type .grid .line[data-id="2"]')
const storyLineId3 = document.querySelector('#about .wrap > article:first-of-type .grid .line[data-id="3"]')
const storyLineId4 = document.querySelector('#about .wrap > article:first-of-type .grid .line[data-id="4"]')
const storyLineId5 = document.querySelector('#about .wrap > article:first-of-type .grid .line[data-id="5"]')

const storyLineTextId1 = document.querySelector('#about .wrap > article:first-of-type .grid p[data-id="1"]')
const storyLineTextId2 = document.querySelector('#about .wrap > article:first-of-type .grid p[data-id="2"]')
const storyLineTextId3 = document.querySelector('#about .wrap > article:first-of-type .grid p[data-id="3"]')
const storyLineTextId4 = document.querySelector('#about .wrap > article:first-of-type .grid p[data-id="4"]')
const storyLineTextId5 = document.querySelector('#about .wrap > article:first-of-type .grid p[data-id="5"]')
const storyLineTextId6 = document.querySelector('#about .wrap > article:first-of-type .grid p[data-id="6"]')
const storyLineTextId7 = document.querySelector('#about .wrap > article:first-of-type .grid p[data-id="7"]')
const storyLineTextId8 = document.querySelector('#about .wrap > article:first-of-type .grid p[data-id="8"]')
const storyLineTextId9 = document.querySelector('#about .wrap > article:first-of-type .grid p[data-id="9"]')
const storyLineTextId10 = document.querySelector('#about .wrap > article:first-of-type .grid p[data-id="10"]')

const observeMe = document.querySelector('#about .wrap > article:first-of-type .grid')

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

const observer = new IntersectionObserver(observerAnimation, {
    threshold: .3
})

observer.observe(observeMe)