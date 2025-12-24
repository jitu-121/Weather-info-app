# Weather App 

A small client-side weather app demo with a vibrant UI (animated gradients, glassmorphism, neon accents). This project is purely front-end — open `index.html` to preview.

**What’s included**
- `index.html` — main page and UI
- `script.js` — JavaScript to fetch and show weather data
- `styles.css` —  CSS (gradient background, floating blobs, glass card, bold buttons)

**Preview**
- Double-click `index.html` in `js_project/weather_app` to open it in your browser.
- For a local server (recommended), from the `weather_app` folder run:

```powershell
# using Python (works if Python is installed)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or use the VS Code Live Server extension to preview with a local dev server.

**How to use**
- Enter a city name in the input and click `Get Weather`.
- If the app is wired to an API key (in `script.js`), it will request weather data and populate the card.

**Customization tips*
- Colors & mood: edit `styles.css` — search for gradients, `.blob` colors, and `#get-weather-btn` to quickly change the palette.
- Typography: modify the Google Fonts import at the top of `styles.css` to swap fonts.
- Add icons: you can place SVGs inside `.weather-icon` or use an icon font (e.g., Weather Icons or Font Awesome).
- Mobile tuning: tweak the `@media (max-width:420px)` block in `styles.css` for smaller screens.

**Files you might change next**
- `script.js` — add proper API key management, error handling, or extra data (humidity, wind, forecast)
- `styles.css` — fine-tune the aesthetic to your taste (more neon, pastel, or muted pastels)

**Credits & License**
- UI inspired by modern glassmorphism + colorful gradient trends.
- Feel free to reuse or adapt — no license specified (add one if you plan to publish).

