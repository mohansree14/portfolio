# Videos Setup Guide

The following video files should be placed in this directory (`public/`) for the portfolio to work with all project demos:

## Required Video Files:

1. **vit-demo.mp4** - TimeSformer Action Recognition project demo
2. **linkedin-agent-demo.mp4** - LinkedIn Agent project demo  
3. **token-demo.mp4** - Token Generation project demo
4. **project-demo.mp4** - General project demo

## Setup Instructions:

### Option 1: Local Development
- Copy your video files to the `public/` directory
- Videos will be served automatically during development (`npm start`)

### Option 2: Deployed on Vercel
- Upload videos to a CDN (Cloudinary, AWS S3, etc.)
- Update video URLs in `src/components/Projects.js`
- Example:
  ```javascript
  videoUrl: "https://cdn.example.com/vit-demo.mp4",
  ```

### Option 3: GitHub Releases
- Upload videos to GitHub Releases
- Get the download URLs
- Update `src/components/Projects.js` with release URLs

## Video File Sizes:
- vit-demo.mp4: ~78.77 MB
- linkedin-agent-demo.mp4: ~172.75 MB
- token-demo.mp4: ~42.57 MB
- project-demo.mp4: ~32.91 MB

**Total: ~327 MB (too large for GitHub)**

---

**Note**: Videos are in `.gitignore` to keep repository size small. They work perfectly in local development but need to be hosted externally for production.
