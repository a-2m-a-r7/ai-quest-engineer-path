const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("aiQuest", {
  openExternal: (url) => ipcRenderer.invoke("open-external", url),
});
