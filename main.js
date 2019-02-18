const {app, BrowserWindow, globalShortcut} = require('electron')
const {ipcMain} = require('electron')

let mainWindow, sender

ipcMain.on('renderer-created', (event, arg) => {
  sender = event.sender
})

function ready () {
  createWindow()
  globalShortcut.register('CommandOrControl+L', () => {
    sender.send('CommandOrControl+L')
  })
}

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

app.on('ready', ready)

app.on('window-all-closed', _ => process.platform !== 'darwin' ? app.quit() : null)

app.on('activate', _ => mainWindow === null ? createWindow() : null)

