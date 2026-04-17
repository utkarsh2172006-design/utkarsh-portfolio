# Deployment Instructions

This project is configured to automatically deploy to **GitHub Pages** whenever new changes are pushed to the `master` repository. Everything is handled by GitHub Actions.

## How to push updates and deploy

To update the live website, follow these steps in your terminal (make sure you are in the project folder):

**1. Stage all your changes**
```bash
git add .
```

**2. Commit your changes with a descriptive message**
```bash
git commit -m "Describe what update you made here"
```

**3. Push your changes to GitHub**
```bash
git push origin master
```

## What happens after pushing?

Once you run `git push origin master`, the automated pipeline starts. You do not need to do anything else!

1. GitHub sees the commit in `master`.
2. The GitHub Action (configured in `.github/workflows/nextjs.yml`) is triggered.
3. It installs dependencies, builds the Next.js static files, and automatically uploads them to GitHub Pages.
4. Your website will be fully updated online within 1-2 minutes.

You can monitor the live progress of your deployment by visiting the **[Actions tab](https://github.com/utkarsh2172006-design/utkarsh-portfolio/actions)** in your GitHub Repository.

## ⚠️ Important Note: Images

Because the site is hosted on GitHub pages at a sub-path (`/utkarsh-portfolio`), Next.js automatically sets the `basePath` during deployment.

If you add any new `<img />` tags, you must ensure they use the base path environment variable so they don't break in production (they will return a 404 otherwise).

**Example:**
Always format your image sources like this:
```tsx
<img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/your-new-image.png`} />
```
*(You do not need to do this if you use the standard Next.js `<Image>` component, but for native `<img>` or `motion.img` it is required).*
