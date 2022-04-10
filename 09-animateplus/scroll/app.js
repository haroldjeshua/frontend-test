import animate from 'https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js';

const root = document.scrollingElement;

const links = Array.from(document.getElementsByTagName('a'), link => {
    const id = link.getAttribute('href')
    const target = document.querySelector(id)
    return { link, target }
})

const scroll = ({link, target}) => 
    link.addEventListener('click', event => {
        const from = root.scrollTop;
        const {top} = target.getBoundingClientRect()
        animate({
            easing: 'out-quintic',
            change: progress =>
                root.scrollTop = from + progress * top
        })
        event.preventDefault()
    })

links.forEach(scroll)