console.log('main process working');

const { BrowserWindowProxy } = require("electron");
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const Menu = electron.Menu;

let win;

function createWindow() {
    win = new BrowserWindow({ resizable: false });
    console.log('Window instance created');
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Quit',
                    click: function() {
                        app.exit(0);
                        console.log('Process terminated')
                    }
                }
            ]
        }
    ];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu)


    win.setIcon(path.join(__dirname, 'app.png'));
    console.log('HTML loaded');

    win.on('closed', () => {
        win = null; 
    })
}

app.on('ready', createWindow);