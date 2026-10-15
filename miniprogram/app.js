App({
  onLaunch() {
    const settings = wx.getStorageSync("shitukb_settings");
    if (!settings) {
      wx.setStorageSync("shitukb_settings", {
        baseUrl: "http://localhost:8080",
        apiKey: "",
        selectedKnowledgeBaseId: "",
        locale: "zh"
      });
    }
  }
});
