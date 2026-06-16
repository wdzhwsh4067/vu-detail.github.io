---
title: "Reading Notes — How To"
---

[← All Reading Notes](../reading)

# How to add your weekly reading notes

**Cadence:** post your **2–3 paper notes by Sunday night**; we discuss at Monday reading group.

## Add a note (browser only — no git install needed)

1. Open `notes/TEMPLATE.md`, click **Raw**, and copy everything.
2. In the repo, click **Add file → Create new file**. Name it exactly:
   `notes/YYYY-MM-DD-lastname.md` — e.g. `notes/2026-06-16-wang.md`.
   *(date = the reading-group week, lastname = yours → notes auto-separate by person and date, newest sorts on top.)*
3. Paste the template and fill in your 2–3 papers. **Keep the field headings exactly as written** — that consistency is the whole point.
4. Commit at the bottom of the page:
   - **Routine week:** choose *“Commit directly to the `master` branch.”* It is live on the site in ~1 minute.
   - **Want Prof. Jiao to comment:** choose *“Create a new branch… and start a pull request,”* then request him as reviewer. GitHub builds the branch and PR for you — no command line.
5. Add one bullet linking your note in [`reading.md`](../reading), under the right week (newest week on top).

## How Prof. Jiao comments (the “GitHub diff” review)

1. Open the pull request → **Files changed** tab.
2. Click the toggle to switch from the rich (rendered) diff to the **raw / source** diff — **inline line comments only work in the raw view.**
3. Hover over a line, click the blue **+** in the gutter, type the comment (drag to span multiple lines), then **Start a review.**
4. **Finish review** → *Comment* / *Request changes* / *Approve.* The author replies inline and pushes a fix to the same branch; the thread stays attached to the PR forever.

He only needs three controls: the raw-diff toggle, the line **+**, and **Finish review**. No git, no branches.

## Every note must include these fields

TL;DR · IEEE citation · link/DOI · tags · artifacts · Problem/Motivation · Key Idea/Method · Main Contributions · Results (datasets·metrics·baselines) · Strengths · Weaknesses/Limitations · Relevance to DETAIL · Open Questions. See [`TEMPLATE.md`](./TEMPLATE) and the worked [example](./2026-06-16-EXAMPLE).

**Citations:** use IEEE style (matches DAC/ICCAD/DATE/TCAD). Zotero with the IEEE style generates it automatically.

## Prefer not to use GitHub?

Fill the template in any editor and send it to Shaohuang — he will commit it for you. Nobody is blocked on tooling.
