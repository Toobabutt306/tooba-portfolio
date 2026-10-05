# Tooba Butt: AI Creative Portfolio

React + Vite + Tailwind CSS 4 + React Three Fiber + Framer Motion.

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist (upload to Netlify / Vercel / any host)
npm run preview
```

## Replace the placeholder media (no code changes needed)
Replace the file with one of the **same name**, or edit the file names in `src/data/content.js`.

| Folder | Files |
|---|---|
| `public/assets/videos/` | `video-01..06.mp4`, `ugc-01..04.mp4`, `construction-01..04.mp4`, `kids-video-01..02.mp4` |
| `public/assets/videos/` | Thumbnails use the same name with `.webp`, e.g. `video-01.webp` |
| `public/assets/images/` | `image-01..08.webp`, `kids-01..04.webp` |
| `public/assets/branding/` | `brand-01..08.webp` |
| `public/assets/cv/` | `Tooba-Butt-CV.pdf` (converted from your CV) |

Use H.264 `.mp4` for videos (plays in every browser). Keep each video under about 20 MB for fast loading.

## Edit text, titles, categories, links
Everything is in `src/data/content.js`. To show LinkedIn, paste your URL into `profile.linkedin`.

## Contact form
Frontend only. "Start a Project" opens the visitor's email app with the message prefilled to your email.
To receive messages directly, connect a form service (Formspree, Web3Forms) in `src/components/Contact.jsx`.
