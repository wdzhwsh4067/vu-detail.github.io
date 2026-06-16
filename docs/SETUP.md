# Reading Notes — maintainer setup

The Reading Notes system = a styled `/reading` page + a Sveltia CMS at `/admin/` that commits
one Markdown file per paper into `_notes/`. This doc covers the two optional/one-time steps.

## What works with zero setup

- The styled **/reading** index and per-note pages render from `_notes/*.md`.
- The **/admin/** CMS loads and lets any member with **write access** publish via *Sign in with
  Token* (a GitHub Personal Access Token). No backend required.

## A. (Optional) One-click "Login with GitHub" button — deploy the OAuth worker

Sveltia needs a tiny server to exchange the OAuth code for a token (the client secret can't live
in static files). The official relay is the **sveltia-cms-auth** Cloudflare Worker (free).

1. **Create a GitHub OAuth App:** GitHub → *Settings → Developer settings → OAuth Apps → New OAuth App*
   (or under the **org** for the lab repo).
   - Homepage URL: your site (e.g. `https://vu-detail.github.io/`)
   - Authorization callback URL: `https://sveltia-cms-auth.<YOUR-SUBDOMAIN>.workers.dev/callback`
   - Register, copy the **Client ID**, then *Generate a new client secret* and copy it.
2. **Deploy the worker:** open <https://github.com/sveltia/sveltia-cms-auth> → *Deploy to Cloudflare*
   (or `git clone`, `npm i -g wrangler`, `wrangler login`, `wrangler deploy`).
3. **Set worker variables** (Cloudflare → Workers & Pages → sveltia-cms-auth → Settings → Variables):
   - `GITHUB_CLIENT_ID` (plaintext), `GITHUB_CLIENT_SECRET` (encrypted),
     optional `ALLOWED_DOMAINS=vu-detail.github.io` (add the fork domain while prototyping).
4. **Point the CMS at it:** in `admin/config.yml`, uncomment and set
   `base_url: https://sveltia-cms-auth.<YOUR-SUBDOMAIN>.workers.dev`.

## B. Migrating from the prototype fork to the lab repo

Everything is built/demoed on the fork `wdzhwsh4067/vu-detail.github.io`. To go live on the lab site:

1. Have the PI (repo admin) add you (and members) as **collaborators with write access** to
   `vu-detail/vu-detail.github.io`.
2. Merge this branch's files into the lab repo (PR or direct push once you have write access).
3. In `admin/config.yml`, change `repo:` to `vu-detail/vu-detail.github.io`.
4. The lab site is a user/org page at the domain root, so **remove the `baseurl`/`url` lines** that
   the prototype's `preview` branch adds (they exist only so the fork renders under a subpath).
5. Re-do step A's OAuth App / callback URL with the lab domain if using the login button.

## C. (Optional) Let the PI review before publish

Sveltia publishes directly today (editorial workflow lands in v1.0). To gate publishing so
Prof. Jiao can comment first, add a **branch-protection rule** on `master` (Settings → Branches)
requiring a pull-request review — CMS commits then route through PRs he can comment on.
