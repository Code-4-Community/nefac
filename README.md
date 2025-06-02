# NEFAC Website
Code4Community is developing a new, modern website for the [New England First Amendment Coalition](https://nefac.org) (NEFAC). The code for the website is stored and managed in this repository.

> ![WARNING]
> The Setup and File Structure seconds are outdated because the project has been refactored to use Next.js and Faust.js. New documentation will be written soon.

## Setup
This project requires you to have NodeJS and NPM installed.
```bash
git clone https://github.com/Code-4-Community/nefac/
cd nefac/nefac-website
npm install
npm run dev
```

## File Structure
- `nefac-website/` - The website code. This folder is structured as a NPM project and a React app.
  - `public/` - Location for static resources and media
    - `icons/`
    - `images/`
    - `videos/`
  - `src/` - The app code
    - `app/` - Code which defines tangible parts of the UI (components and pages)
      - `components/`
        - Generic components are kept in the root of this directory.
        - Page-specific components are defined under subfolders for each page
        - `ui/` - Prewritten components from ShadCN (installed from CLI)
      - `pages/`
        - Subfolders are defined for each page, each subfolder containing a `page.tsx`
      - `page.tsx` - The homepage
    - `lib/` - Code which does not define any tangible part of the site and is used elsewhere in the codebase
    - Various top-level project files
- `llm-dev/` - Scrapped chatbot-related code (now taken over by our friends at Build UMass)
  - `scraper/` - A scraper written to extract plain text content from all pages on the existing site. See [`llm-dev/scraper/README.md`](llm-dev/scraper/README.md) for details.
 
## Contributing
1. When assigned a ticket, please create a new branch to work on it.
2. Create a pull request from your branch to `main` when you are done.
    - Be descriptive and be sure to mention any issues/bugs with your code.
    - If applicable, include screenshots of your code's output as well (i.e., if you implemented a component, attach a screenshot of that component shown on the page).
3. The TL will eventually review and either suggest changes or approve your PR and it will be merged into `main`.
