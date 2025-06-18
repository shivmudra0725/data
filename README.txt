# QR Attendance App – Quick Setup

* **Client ID**: `544464464339-odcb9nk4t036p3f4ggl7d4n81r8v9v7f.apps.googleusercontent.com` (already inserted)
* **Web App URL**: `https://script.google.com/macros/s/AKfycbxeGoBKb4bjsB_XaGaqB3iQ8gUTEQj3_ayX17gInfGS6TL5aggXEyiHLCDgC-zN_iubhg/exec` (already inserted)

## Deploy Front‑end
1. Commit `index.html` to your GitHub Pages repo (e.g. `shivmudra0725.github.io/data/`)
2. Visit `https://shivmudra0725.github.io/data/index.html` (or add `?d=YYYY-MM-DD`)

## Deploy Back‑end
1. Go to https://script.new
2. Replace `Code.gs` with the one in this package
3. Add file `index.html` with the same HTML (optional, just for preview)
4. **Deploy → New deployment → Web App**
   * Execute as: **Me**
   * Who has access: **Anyone**
5. Copy the Web App URL (already inserted above if same)

## Daily QR Code
Generate a QR that points to:
```
https://shivmudra0725.github.io/data/index.html?d=2025-06-19
```

Only one submission per Gmail per day, sheet auto‑created by date.
