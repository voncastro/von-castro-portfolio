# Deploying To Vercel

1. Push this repo to GitHub.
2. In Vercel, choose **Add New Project** and import the GitHub repository.
3. Confirm the detected settings:
   - Framework: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy the project.
5. Verify:
   - Home page loads.
   - `#experience`, `#projects`, `#skills`, and `#about` anchors work.
   - `/Von-Castro-Resume.pdf` opens.
   - Email, LinkedIn, GitHub, and project links open.
   - Social preview image resolves from the deployed domain.

The site metadata currently assumes:

```text
https://von-castro-portfolio.vercel.app/
```

If the final Vercel domain differs, update `index.html` before sharing the site widely.
