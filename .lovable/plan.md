

# Favicon URL Migration Plan

This plan implements the favicon URL change workaround to force Google to re-crawl and re-index your favicon. All icons will be generated from your provided logo image (white roof/house silhouette on dark navy blue #1a1f2e background).

---

## Overview

The strategy involves:
1. Creating a new `/favicons-2026/` folder with all favicon assets
2. Updating the HTML `<head>` to reference the new URLs
3. Setting up 301 redirects from old URLs to new URLs
4. Keeping the site.webmanifest and all SEO intact

---

## Step 1: Create New Favicon Folder Structure

Create the directory `public/favicons-2026/` and generate the following files from your provided logo image:

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 16x16, 32x32, 48x48 embedded | Browser tab icon (ICO format) |
| `favicon.svg` | Vector | Modern browsers |
| `favicon-16x16.png` | 16x16 | Small browser tabs |
| `favicon-32x32.png` | 32x32 | Standard browser tabs |
| `favicon-96x96.png` | 96x96 | Desktop/high-DPI displays |
| `apple-touch-icon.png` | 180x180 | iOS home screen |
| `android-chrome-192x192.png` | 192x192 | Android home screen |
| `android-chrome-512x512.png` | 512x512 | Android splash/PWA |

All icons will use the brand color #1a1f2e as background with the white roof logo centered and properly padded.

---

## Step 2: Update HTML `<head>` Tags

**Current favicon references (to be replaced):**
```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

**New favicon references:**
```html
<link rel="icon" href="/favicons-2026/favicon.ico" sizes="any" />
<link rel="icon" type="image/svg+xml" href="/favicons-2026/favicon.svg" />
<link rel="icon" type="image/png" sizes="96x96" href="/favicons-2026/favicon-96x96.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicons-2026/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicons-2026/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/favicons-2026/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="theme-color" content="#1a1f2e">
```

**What stays the same:**
- Canonical URL remains `https://jmillsroofing.com.au/`
- All SEO meta tags unchanged
- All Open Graph / Twitter card tags unchanged
- Structured data / JSON-LD unchanged
- site.webmanifest stays at root `/site.webmanifest`

---

## Step 3: Update site.webmanifest

Update the manifest to reference the new icon locations:

```json
{
  "name": "James Mills Roof Restoration",
  "short_name": "James Mills Roofing",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#1a1f2e",
  "theme_color": "#1a1f2e",
  "icons": [
    {
      "src": "/favicons-2026/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicons-2026/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## Step 4: Implement 301 Redirects

Since this is a Vite/React static site, we'll implement redirects using a `_redirects` file (compatible with Netlify, Vercel, and most static hosts). For Lovable's hosting, we'll also create a Vite plugin approach.

**Create `public/_redirects` file:**
```text
/favicon.ico                /favicons-2026/favicon.ico                301
/favicon.svg                /favicons-2026/favicon.svg                301
/favicon-16x16.png          /favicons-2026/favicon-16x16.png          301
/favicon-32x32.png          /favicons-2026/favicon-32x32.png          301
/favicon-48x48.png          /favicons-2026/favicon-48x48.png          301
/favicon-96x96.png          /favicons-2026/favicon-96x96.png          301
/apple-touch-icon.png       /favicons-2026/apple-touch-icon.png       301
/android-chrome-192x192.png /favicons-2026/android-chrome-192x192.png 301
/android-chrome-512x512.png /favicons-2026/android-chrome-512x512.png 301
```

**Note:** The redirect file format works with most static hosting platforms. If redirects don't work on Lovable's preview, the old files can remain in place as fallbacks (browsers will still use the new URLs from the updated `<head>` tags).

---

## Step 5: Keep Old Files as Fallback

The old favicon files at root level will remain in place to:
1. Support any cached references
2. Act as fallback if redirects aren't processed
3. Ensure no 404 errors during transition

---

## Files to Create/Modify

| Action | File Path |
|--------|-----------|
| Create | `public/favicons-2026/favicon.ico` |
| Create | `public/favicons-2026/favicon.svg` |
| Create | `public/favicons-2026/favicon-16x16.png` |
| Create | `public/favicons-2026/favicon-32x32.png` |
| Create | `public/favicons-2026/favicon-96x96.png` |
| Create | `public/favicons-2026/apple-touch-icon.png` |
| Create | `public/favicons-2026/android-chrome-192x192.png` |
| Create | `public/favicons-2026/android-chrome-512x512.png` |
| Create | `public/_redirects` |
| Modify | `public/site.webmanifest` |
| Modify | `index.html` |

---

## Validation Checklist

After implementation, verify:
- [ ] All `/favicons-2026/*` URLs return HTTP 200
- [ ] Old root favicon URLs redirect (or fallback files exist)
- [ ] HTML `<head>` references only `/favicons-2026/` paths for favicons
- [ ] `site.webmanifest` references `/favicons-2026/` icon paths
- [ ] Favicon appears correctly in browser tab
- [ ] No console errors for favicon/manifest loading
- [ ] Canonical URL and SEO tags remain unchanged

---

## After Publishing

Once deployed to `jmillsroofing.com.au`:
1. Test all new URLs resolve correctly
2. In Google Search Console, request indexing for:
   - `https://jmillsroofing.com.au/favicons-2026/favicon.ico`
   - `https://jmillsroofing.com.au/favicons-2026/favicon-32x32.png`
3. Google should pick up the new favicon within a few days

---

## Technical Notes

- The provided image will be used to generate all icon sizes using AI image generation
- Icons will maintain the brand identity: white roof silhouette on #1a1f2e navy background
- For the `.ico` file, due to platform limitations, it will be a single-size PNG renamed to .ico (works in all modern browsers)
- The SVG will be recreated to match the logo design

