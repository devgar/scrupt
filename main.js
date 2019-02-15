const {app, BrowserWindow} = require('electron')

let mainWindow

function createWindow () {
  let {height, width} = require('electron').screen.getPrimaryDisplay().size
  mainWindow = new BrowserWindow({
    width: width / 2,
    height: height / 2,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', _ => process.platform !== 'darwin' ? app.quit() : null)

app.on('activate', _ => mainWindow === null ? createWindow() : null)

