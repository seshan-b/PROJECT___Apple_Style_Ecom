// Cube
let x = 0
let y = 0
let z = 0
let stopCube = true
let clearTimer

const cube = document.querySelector('.cube')

// Move X axis
document.querySelector(".top-x-control")
.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})


document.querySelector(".bottom-x-control")
.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x += 20}deg) rotateY(${y}deg) rotateZ(${z}deg)`
})

// Move Y axis
document.querySelector(".left-y-control")
.addEventListener('click', () => {
    cube.style.transform = `rotateY(${y -= 20}deg) rotateX(${x}deg) rotateZ(${z}deg)`
})

document.querySelector(".right-y-control")
.addEventListener('click', () => {
    cube.style.transform = `rotateY(${y += 20}deg) rotateX(${x}deg) rotateZ(${z}deg)`
})

// Move Z axis
document.querySelector(".top-z-control")
.addEventListener('click', () => {
    cube.style.transform = `rotateY(${y}deg) rotateX(${x}deg) rotateZ(${z -= 20}deg)`
})

document.querySelector(".bottom-z-control")
.addEventListener('click', () => {
    cube.style.transform = `rotateY(${y}deg) rotateX(${x}deg) rotateZ(${z += 20}deg)`
})

const playPause = () => {
    if(stopCube) {
        clearTimer = setInterval(() => {
            cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`
        }, 100)        
    }
    else {
        clearInterval(clearTimer)
    }

}

playPause()


document.querySelector('.controls')
.addEventListener('mouseover', () => {
    stopCube = false
    playPause()
})


document.querySelector('.controls')
.addEventListener('mouseout', () => {
    stopCube = true
    playPause()
})

// Slideshow

const slideshowDivs = () => {

    for(let i = 1; i <= 5; i ++)  {
        const div = document.createElement('div')
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`

        i === 1 && div.classList.add('change')

        document.querySelector(".slideshow").appendChild(div)
    }
}


slideshowDivs()

const divContainer = document.querySelectorAll('.slideshow div')


let a = 1 

const slideshow = () => {

   
    setInterval(() => {
        a ++
        const div = document.querySelector('.slideshow .change')

        div.classList.remove('change')

        if (a < divContainer.length) {
            div.nextElementSibling.classList.add('change')
        }
        else {
            divContainer[0].classList.add('change')
            a = 1
        }
        
    }, 2000)
}

slideshow()

// End Slideshow