# denis shatokhin — personal website

Built with [Zola](https://getzola.org) using andreas07,
an open-source web design by **Andreas Viklund** (2005).

## Quick start

```
mise run serve
```

Open http://localhost:1111

## Adding content

### Music post (YouTube video)

Create `site/content/music/my-track.md`:

```markdown
+++
title = "artist - track name"
date = 2026-07-01
[taxonomies]
tags = ["genre"]
[extra]
youtube = "VIDEO_ID"
+++
```

The YouTube ID is the `v=` part of the URL: `https://www.youtube.com/watch?v=VIDEO_ID`.

No shortcodes needed — the template auto-generates the listing
thumbnail and the embedded player from the single `youtube` field.

### Photodump post (Are.na channel)

Create `site/content/photodump/july-2026.md`:

```markdown
+++
title = "july 2026"
date = 2026-07-01
[taxonomies]
tags = ["photography"]
[extra]
arena = "channel_slug"
+++
```

No shortcodes needed — the template auto-fetches channel contents
and renders a gallery with a lightbox viewer.

Set `ARENA_TOKEN` in GitHub Actions secrets if the channel is private.

### Other posts

```markdown
+++
title = "My Post"
date = 2026-07-01
[taxonomies]
tags = ["tag1"]
+++

Content in markdown here.
```

For a custom thumbnail image, add to frontmatter:

```markdown
[extra]
thumbnail = "/img/my-image.jpg"
```

Place images in `site/static/img/`.

For an Are.na block thumbnail, add the block ID from the Are.na URL (`https://www.are.na/block/47568448` → `47568448`):

```markdown
[extra]
arena_block = "47568448"
```

The template fetches the block via the Are.na API and uses a scaled image for the thumbnail. Set `ARENA_TOKEN` in GitHub Actions secrets if the block is private.

### Centering text

Use the `.center` CSS class in any Markdown file:

```html
<div class="center">centered text</div>
```

## Shortcodes

| Shortcode | Usage |
|---|---|
| `youtube` | `{{ youtube(id="VIDEO_ID") }}` |
| `arena` | `{{ arena(channel="slug") }}` |
| `arena_image` | `{{ arena_image(block="39199142") }}` |
| `arena_image` (cropped) | `{{ arena_image(block="39199142", height="300") }}` |

### Code block filenames

Use the `name=` attribute on code fences to add a filename header bar:

````markdown
```python,name=hello.py
def hello_world():
    print("Hello, World!")
```
````

## Build & deploy

```
mise run build                # produces site/public/
mise exec -- zola --root ./site check  # validates config and templates
```

CI via GitHub Actions:

- **PRs** → check + build (`validate.yml`)
- **main** → build + deploy to `shatokhin.org` (`deploy.yml`)

## Structure

```
site/
├── config.toml
├── content/
│   ├── _index.md            # homepage
│   ├── music/               # music posts (YouTube embeds)
│   ├── photodump/           # photo galleries (Are.na embeds)
│   ├── cooking/             # recipes
│   └── devops/              # tech articles (disabled in nav)
├── sass/style.scss           # site styles (based on andreas07)
├── templates/                # Zola templates + shortcodes
└── static/                   # images, fonts, lightbox.js, CNAME
```

## Credits

Original design by **Andreas Viklund** — andreas07 v1.1 (November 2005).
Modernized with CSS gradients, background image, and responsive layout.

Ported to [Zola](https://getzola.org) in 2026.
