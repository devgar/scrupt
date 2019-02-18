const { ipcRenderer } = require('electron')
const urlparse = require('urlparse')
window.FRAME = document.getElementById('frame')

window.URL = u => window.FRAME.src=u

window.RFRS = _ => window.FRAME.contentWindow.location.reload(true)

urlInput.onkeyup = e => {
    if (e.keyCode == 13){
        let url = urlparse(urlInput.value)
        if (!url.scheme) url.scheme = 'http'
        window.URL(url.toString())
        urlInput.value = url.toString()
        urlDialog.classList.remove('active')
    }
        
}

ipcRenderer.on('CommandOrControl+L', (event, arg) => {
    urlDialog.classList.toggle('active')
    if(urlDialog.classList.contains('active'))
        urlInput.select()
    else
        urlInput.blur()
})

ipcRenderer.send('renderer-created', 'ping')