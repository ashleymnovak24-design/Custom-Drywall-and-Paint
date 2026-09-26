# Custom Drywall and Paint — GitHub-ready website

Upload the CONTENTS of this folder to the root of the GitHub repository, preserving the folders exactly.

## Required structure
- index.html
- styles.css
- script.js
- assets/logo.png
- assets/projects/project-01.jpeg
- assets/projects/project-02.jpeg
- assets/projects/project-03.jpeg
- content/projects.json
- admin/index.html
- admin/config.yml

## Website
The public project gallery reads `content/projects.json`. The real logo is `assets/logo.png`.

## Photo manager
The `/admin/` folder is configured for Decap CMS with GitHub as the backend. It is prepared to upload project photos into `assets/projects/` and update `content/projects.json`.

IMPORTANT: GitHub authentication still needs an OAuth/authentication provider before `/admin/` can securely log in and write to this private GitHub repository. Do not put a GitHub token in these browser files.

## Netlify
The quote and customer-review forms use Netlify Forms. Once this repository is connected to Netlify, commits to `main` can deploy automatically.
