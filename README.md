# Marval Website V9.2 — Cache Fix Release

This release fixes the live-site rendering problem caused by mixed stylesheet generations
and stale browser/Cloudflare caching.

Changes:
- Removed the duplicate appended CSS shell.
- Restored one consistent stylesheet for the complete site.
- Renamed CSS and JavaScript assets to force a fresh browser download.
- Added explicit version query strings to every HTML page.
- Preserved the larger Marval logo.
- Preserved the single Contact navigation item.

Deploy the entire extracted folder to Cloudflare Pages in one deployment.
Do not copy only index.html.
