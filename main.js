const {app, BrowserWindow, autoUpdater} = require("electron")

let win;

function createWindow() {
  // Create the browser window
  win = new BrowserWindow({
    width: 1200,
    height: 1000,
    backgroudColor: "#ffffff",
    icon: `file://${__dirname}/dist/assets/logo.png`
  })

  win.loadURL(`file://${__dirname}/dist/index.html`)

  // uncomment below to open the devTools.
  //win.webContents.openDevTools()

  //Event when the window is closed.
  win.on("closed", function(){
    win = null
  })



}


//Create window on electron initialization
app.on("ready", createWindow)

// Quit when all windows are closed.
app.on("window-all-closed", function(){
  // on macOs specific close process
  if (process.platform !== "darwin"){
    app.quit()
  }
})

app.on("activate", function(){
  // macOS specific close process
  if (win === null){
    createWindow()
  }
})


const server = "https://hazel-server-fiqgyijyjy.now.sh";
const feed = `${server}/update/${process.platform}/${app.getVersion()}`

if (process.env.NODE_ENV !== "dev") autoUpdater.setFeedURL(feed)
