const pianoKeys = document.querySelectorAll('.key')
function playSound(newUrl){
    new Audio(newUrl).play()
}
pianoKeys.forEach((pianoKey,i) =>{
    const number = i < 9 ? '0' + (i + 1) : (i + 1)
    const newUrl ='piano-keys/key'+number+'.ogg'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})