const rainbowTitle = document.querySelector('.rainbow-title')
const colors = [
    '#6e5773',
    '#d45079',
    '#ea9085',
    '#e9e1cc',
    '#f6eec7'
]
window.setInterval(function()
{
rainbowTitle.style.color = `hsl(
    ${Math.random() * 360}deg,
    100%,
    50%
    )
    `
}, 10)


{
rainbowTitle.style.color = `rgb(
    ${Math.random() * 255}, 
    ${Math.random() * 255}, 
    ${Math.random() * 255}
    )
    `
}