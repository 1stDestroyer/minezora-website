# MineZora Website

Static, multi-page landing site for the **MineZora** Hytale multiplayer server.

## Files

- `index.html` — Home (hero + server IP copy)
- `about.html` — Lore / about
- `vote.html` — Voting + rewards
- `discord.html` — Community + join button
- `styles.css` — Theme + components (navbar, buttons, cards, panels)
- `script.js` — Minimal JS (active nav + copy IP feedback)

## GitHub Pages (deploy)

1. Push this repo to GitHub.
2. In GitHub: **Settings → Pages**
3. Set **Source** to **Deploy from a branch**
4. Select branch **main** and folder **/** (root)
5. Save — wait for Pages to publish.

## Customize

- **Server IP**: edit `play.minezora.gg` in `index.html`
- **Discord**: set your invite link in `discord.html`
- **Vote links**: replace the `href="#"` placeholders in `vote.html`
