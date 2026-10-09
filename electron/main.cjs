const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 1120,
    minHeight: 720,
    title: "AI Quest: Engineer Path",
    icon: path.join(__dirname, "icon.png"),
    backgroundColor: "#090d16",
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false,
    },
  });

  // __dirname inside ASAR resolves correctly to app.asar/electron
  // so going up one level reaches app.asar root, then into dist/
  const indexPath = path.join(__dirname, "..", "dist", "index.html");

  win.loadFile(indexPath).catch((err) => {
    // Fallback: try loading from resourcesPath if above fails
    const fallback = path.join(
      process.resourcesPath,
      "app.asar",
      "dist",
      "index.html",
    );
    console.error("Primary load failed, trying fallback:", fallback, err);
    win.loadFile(fallback).catch((err2) => {
      console.error("Both load attempts failed:", err2);
      // Show error page
      win.loadURL(`data:text/html,<h1 style="color:red;font-family:sans-serif">
        Error loading app: ${err2.message}<br><br>
        indexPath tried: ${indexPath}
      </h1>`);
    });
  });

  if (!app.isPackaged) {
    win.webContents.openDevTools({ mode: "detach" });
  }
}

app.whenReady().then(() => {
  ipcMain.handle("open-external", async (_event, url) => {
    if (typeof url === "string" && /^https?:\/\//i.test(url)) {
      await shell.openExternal(url);
    }
  });

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
