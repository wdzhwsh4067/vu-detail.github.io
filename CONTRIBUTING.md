# Adding your weekly reading notes

Notes are submitted through a web form — **no Git, Markdown, or command line needed.**

## Submit a note

1. Go to **[/admin/](/admin/)** on the site (e.g. `https://vu-detail.github.io/admin/`).
2. **Log in with GitHub.** Two ways:
   - **Token sign-in (works today, no setup):** click *Sign in with Token*, paste a GitHub
     Personal Access Token that has write access to the repo. Create one at
     **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens**,
     scoped to this repository with **Contents: Read and write**.
   - **One-click "Login with GitHub":** available once the maintainer deploys the OAuth worker
     (see `docs/SETUP.md`). Then you just click the button — no token to paste.
3. Click **Reading Notes → New Reading Note**, fill the form (one paper per entry), and
   click **Publish**. Fields: member, date, paper title, authors, venue, year, link/DOI,
   IEEE citation, tags, TL;DR, problem, method, contributions, results, strengths,
   weaknesses, relevance to DETAIL, open questions, artifacts.
4. The note appears on the **[Reading Notes](/reading)** page within ~1 minute (newest first),
   filterable by member and tag.

> You need **write access** to the repository to publish. The maintainer (Shaohuang) adds lab
> members as repository collaborators.

## Prefer not to use the form?

Anything created in the form is just a Markdown file in `_notes/`. You can also add one by hand
(`_notes/YYYY-MM-DD-title.md`) following the field names in `admin/config.yml`, or send your
notes to Shaohuang to enter for you. Nobody is blocked on tooling.
