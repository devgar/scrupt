window.FRAME = document.getElementById('frame')

document.onkeyup = e => console.log(e.keyCode)

window.NUXT = _ => window.FRAME.src='https://nuxtjs.org'

window.LOCL = _ => window.FRAME.src='http://localhost:3000'

window.RFRS = _ => window.FRAME.contentWindow.location.reload(true)