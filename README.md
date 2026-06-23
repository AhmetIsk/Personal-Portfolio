# Personal Portfolio

A zero-build personal portfolio for GitHub Pages. The site is plain HTML, CSS, and JavaScript, so it can be published directly from the repository root without a framework or build pipeline.

## Local Preview

Open `index.html` in a browser, or run a local static server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`.

## GitHub Pages

This repo is intended for a GitHub Pages project site, where the final URL looks like:

```text
https://your-username.github.io/repository-name/
```

In GitHub:

1. Open the repository settings.
2. Go to Pages.
3. Set the source to `Deploy from a branch`.
4. Select the `main` branch and `/ (root)` folder.
5. Save the settings.

The site uses relative links such as `styles.css` and `script.js`, so it works when served from a project path instead of the domain root.

## Updating Content

Edit `site-data.js` to update your profile, links, projects, skills, and experience. The default text is intentionally neutral so the page reads as an introduction, not a marketing page. The page renderer hides missing optional links and empty sections where possible.

Some profile and repository data was seeded from the public GitHub profile at `https://github.com/AhmetIsk`. LinkedIn is linked directly, but the public page may require authentication, so detailed LinkedIn content should be edited manually in `site-data.js`.

Local SVG marks for companies, schools, and GitHub live in `assets/`. They are lightweight portfolio badges, not downloaded brand assets.

Current links are configured in `site-data.js`:

- GitHub: `https://github.com/AhmetIsk`
- LinkedIn: `https://www.linkedin.com/in/ahmet-isik/`
- Resume: `resume.pdf`

If you replace the resume file later, keep it in the repository root as `resume.pdf` or update the resume link in `site-data.js`.
