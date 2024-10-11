const container = document.getElementById("container")
const start = document.getElementById("start")
let bestTime=Infinity
let timeTaken

start.addEventListener("click", function(){
    start.style.display = "none"
    createRandomElement()
})

function createRandomElement(){
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight

    const newElement = document.createElement('div')
    newElement.classList.add('randomElement')

    container.appendChild(newElement)

    const newElementWidth = newElement.offsetWidth
    const newElementHeight = newElement.offsetHeight
    console.log("Width of randomElement:", newElementWidth);
    console.log("Height of randomElement:", newElementHeight);

    const randomX = Math.random() * (containerWidth-newElementWidth)
    const randomY = Math.random() * (containerHeight-newElementHeight)


    newElement.style.top = `${randomY}px`
    newElement.style.left = `${randomX}px`
    clickTime = Date.now()
    newElement.addEventListener("click", function(){
        timeTaken = Date.now()-clickTime
        document.getElementById("timeTaken").innerHTML="Time Taken : "+timeTaken
        if (timeTaken < bestTime){
            bestTime = timeTaken
            document.getElementById("bestTime").innerHTML="Best Time : "+bestTime
        }
        container.removeChild(newElement)
        createRandomElement()
})
}