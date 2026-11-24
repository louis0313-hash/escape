# 土與火的數位開窯

苗栗柴燒陶藝工坊品牌網站，使用 Vite、React、TypeScript、Tailwind CSS、Framer Motion 與 Lucide。所有作品、文史時間軸與窯火日誌都由 `src/data/potteryData.ts` 提供，無需資料庫即可展示。

## 本地啟動

需求：Node.js 18 或更新版本。

```bash
npm install
npm run dev
```

開啟 Vite 顯示的本機網址。正式產出及本機預覽：

```bash
npm run build
npm run preview
```

建置結果輸出在 `dist/`。作品、歷史資料、營運資訊及聯絡帳號可按實際工坊資料更新。目前預約與留言表單只在瀏覽器本頁產生確認狀態；要接收申請，需連接表單服務或自有 API。LINE/WhatsApp 連結亦請換成工坊官方帳號。

## 部署至 Render Static Site

1. 將專案推送至 GitHub 儲存庫。
2. 在 Render Dashboard 選擇 **New → Static Site** 並連接該儲存庫。
3. 設定 **Build Command** 為 `npm install && npm run build`。
4. 設定 **Publish Directory** 為 `dist`。
5. React 單頁網站如有前端路由，可在 Render Redirects/Rewrites 新增 `/*` → `/index.html`，動作選 **Rewrite**。
6. 建置完成後，使用 Render 提供網址檢視網站。

本專案使用頁面錨點導覽，無需伺服器或資料庫。Google Fonts 與 Unsplash 圖片需瀏覽器可連線至相應外部服務。
