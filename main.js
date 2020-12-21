console.log('main process working');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow() {
    win = new BrowserWindow({ resizable: false });
    console.log('Window instance created');
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    console.log('HTML loaded');

    win.on('closed', () => {
        win = null; 
    })
}

app.on('ready', createWindow)