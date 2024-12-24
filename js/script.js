let targets = document.querySelectorAll('.product')
let header = document.querySelector('.header')
let elems = []
const sliderElems = document.querySelectorAll('.slider__item')
const anchors = document.querySelectorAll('a[href*="#"]')
const headerBurger = document.querySelector('.header__button')
const menu = document.querySelector('.header__menu-burger')
const body =   document.querySelector('body')
const headerLines = headerBurger.querySelectorAll('.header__line')

headerBurger.addEventListener('click', () => {
  
  menu.classList.toggle('header__menu-burger_active')
  body.classList.toggle('overflow-hidden')
  headerLines.forEach(headerLine => {
    headerLine.classList.toggle('header__line-transform')
  })
})

window.addEventListener('resize', function(event) {
  if (this.innerWidth > 860 && menu.classList.contains('header__menu-burger_active')) {
    menu.classList.remove('header__menu-burger_active')
    headerLines.forEach(headerLine => {
      headerLine.classList.remove('header__line-transform')
    })
  }
    
}, true);


elems.push(header)

targets.forEach(target => 
    elems.push(target)
)
function addActiveBorder(id) { 

    id = 'item-' + id 

    sliderElems.forEach(sliderElem => {
        
        sliderElem.classList.remove('active-border')
        if(sliderElem.id === id) 
            sliderElem.classList.add('active-border')
    })
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
              
              addActiveBorder(entry.target.id.split('-')[1])
                
            }
        })
      ;
    },
    {
      threshold: 0.6,
    }
  );

elems.forEach(target => observer.observe(target))

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


