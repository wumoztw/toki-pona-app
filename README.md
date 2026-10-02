# Toki Pona 互動學習網頁應用 (Toki Pona Learning App)

這是一個專為華語使用者打造的現代化 **Toki Pona（道本語 / 善語）** 互動學習應用程式。採用零建置、免編譯的現代網頁架構，結合豐富的字彙資料庫、漸進式造句練習、個人化學習進度追蹤、多樣化隨堂測驗以及完整 PWA 離線應用支援。

---

## ✨ 核心特色

1. **道本語核心 120+ 詞彙與例句資料庫 (`data.js`)**
   - 完整收錄 Toki Pona 官方與常用核心單字及實用例句。
   - 包含詞性、中文釋義、例句解析與語音朗讀功能。

2. **多樣化隨堂測驗題型 (Quiz Mode)**
   - **綜合混合測驗**：隨機混合各類題型全面檢驗。
   - **單字釋義測驗**：道本語與中文互相選擇（4 選 1）。
   - **發音聽力測驗 (Listening)**：隱藏單字文字，透過 Web Speech API 聆聽發音並選出對應單字或釋義。
   - **例句克漏字填空 (Cloze)**：隨機抽取例句並挖空關鍵詞 (`_____`)，測驗真實語境應用能力。
   - **即時回饋與錯題複習**：答對綠色提示、答錯顯示正確答案及例句解析，支援錯題重測。

3. **PWA 離線應用支援 (PWA & Offline)**
   - 透過 `manifest.json` 與 `sw.js` (Service Worker) 實現快取機制（Cache-First / Stale-While-Revalidate）。
   - 支援 100% 離線使用，並可一鍵安裝至桌面或行動裝置（Add to Home Screen）。

4. **localStorage 個人化學習進度追蹤**
   - 自動將單字熟悉度與學習歷程保存在瀏覽器本地，隨時接續進度。

5. **零建置高效模組化架構**
   - 無需複雜的 npm 建置工具鏈，載入迅速、相容性高。

---

## 🚀 專案結構

```text
/
├── index.html       # 主介面與 React 互動應用邏輯
├── data.js          # 道本語字彙與例句資料庫
├── manifest.json    # PWA 應用程式資訊清單
├── sw.js            # Service Worker 離線快取腳本
├── icon.svg         # PWA 高解析度圖示
└── README.md        # 專案說明文件
```

---

## 💡 本地快速預覽與 PWA 安裝指南

### 本地預覽
使用任意靜態伺服器（如 Python http.server）開啟：
```bash
python3 -m http.server 8080
```
造訪 `http://localhost:8080` 即可開始學習。

### PWA 安裝指南
1. 使用 Chrome、Safari 或 Edge 瀏覽器開啟應用程式網頁。
2. 點擊瀏覽器選單或網址列的 **「安裝應用程式 (Install TokiPona)」** 按鈕。
3. 安裝後即可作為獨立桌面 App 運行，支援完整 **100% 離線運作**。

---

## 📦 部署與授權

本專案可直接部署至 GitHub Pages、Vercel 或 Netlify 等靜態網頁託管服務。

歡迎提出 Issue 與 Pull Request 共同完善道本語華語學習社群！
