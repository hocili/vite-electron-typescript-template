import { app, BrowserWindow } from 'electron'
import {join} from "path";

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: join(__dirname, 'preload.js')
        }
    })

    if (process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:3000/')
        win.webContents.openDevTools()
    } else {
        win.loadFile('dist/render/index.html')
    }


}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})