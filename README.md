# Divine Site

Multi-page artist website with embedded media and outbound link analytics.

## Files
- `index.html`: Landing page
- `listen.html`: Streaming/social links
- `media.html`: Instagram embeds + video slots
- `contact.html`: Email + socials
- `styles.css`: Shared styling
- `tracking.js`: Outbound click tracking

## Current links
- Spotify: https://open.spotify.com/artist/0yxSA9lOBPdxH7hdyP089c
- Apple Music: https://music.apple.com/us/artist/divine/1795932979
- Instagram: https://www.instagram.com/1divines/
- X: https://x.com/dvnsxo
- Email: divinesmngmt@gmail.com

## Add or change media
1. Instagram embeds:
   - In `media.html`, update `data-instgrm-permalink` URLs.
2. YouTube embed:
   - Replace `YOUR_VIDEO_ID` in `media.html`.
3. Local video:
   - Drop file in `assets/` and update `./assets/media-1.mp4` path.

## Analytics setup
Use one provider:

1. Plausible
- Uncomment the Plausible script block in `index.html` `<head>`.
- Set `data-domain` to your domain.

2. GA4
- Uncomment the GA block in `index.html` `<head>`.
- Replace `G-XXXXXXXXXX` with your Measurement ID.

Tracked events from `tracking.js`:
- Plausible event: `Outbound Link: Click`
- GA4 event: `click_outbound_link`

## Preview
Fast preview (no server):
```bash
open "/Users/devin/Documents/New project/index.html"
```

Best preview for embeds:
- Use localhost once Command Line Tools are installed:
```bash
cd "/Users/devin/Documents/New project"
python3 -m http.server 8080
```
- Open: http://localhost:8080
