
# QR Attendance App – Quick Setup

This bundle contains:

* `index.html`  – Static front‑end (GitHub Pages)
* `Code.gs`     – Google Apps Script backend (Web App)
* `README_setup.txt` (this file)

## 1. Google Cloud – OAuth Client ID
1. Open **Google Cloud Console → APIs & Services → Credentials → Create credentials → OAuth client ID (Web)**  
2. Authorized JavaScript origin:  
   ```
   https://YOUR_GITHUB_USERNAME.github.io
   ```  
3. Add yourself as **Test User** under **OAuth consent screen**.  
4. Copy the **Client ID** and paste into `index.html`  
   ```
   data-client_id="YOUR_CLIENT_ID"
   ```

## 2. Apps Script backend
1. Go to **https://script.new**  
2. Replace default `Code.gs` with the content from this bundle.  
3. Add a new file **index.html** and paste the HTML from this bundle.  
4. **Deploy → New deployment → Web App**  
   * Execute as: **Me**  
   * Who has access: **Anyone**  
5. Copy the Web App URL and paste into `index.html`:
   ```
   const WEBAPP_URL = 'YOUR_WEB_APP_URL';
   ```

## 3. Publish front‑end
Commit `index.html` to a GitHub Pages repository, e.g.:
```
https://YOUR_GITHUB_USERNAME.github.io/attendance/
```

## 4. Generate daily QR codes
Encode a URL like:
```
https://YOUR_GITHUB_USERNAME.github.io/attendance/?d=2025-06-19
```
Users open it, sign in with Google, choose roll no, allow GPS – the row
is stored in a sheet named **2025‑06‑19** and duplicates are blocked.

Happy attendance‑tracking!
