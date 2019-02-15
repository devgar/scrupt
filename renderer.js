window.FRAME = document.getElementById('frame')

document.onkeyup = e => console.log(e.keyCode)

window.URL = u => window.FRAME.src=u

window.NUXT = _ => window.URL('https://nuxtjs.org')

window.LOCL = _ => window.URL('http://localhost:3000')

window.RFRS = _ => window.FRAME.contentWindow.location.reload(true)
