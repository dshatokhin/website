+++
title = "first website iteration"
date = 2026-04-04
[extra]
arena_block = "47568448"
[taxonomies]
tags = ["zola", "web", "static-site"]
+++

Over the years I was thinking about building my own website and host different pieces of media
on it. Almost a year ago I've created local directory and started my research about static web site generators.
For such hobby project I choose [Zola](https://www.getzola.org), active but pretty niche tool (written in rust).
Idea is to just write some markdown files, submit PRs and get the website content updated on PR merge.
The main benefit of this flow is an ability to use LLMs to assist with PR creation.

With some LLM assistanse I've namaged to create first layout using default Zola theme, opened it in the browser
and realised the amount of work I need to do to make it as I like.

### Holiday Spike

During June-Jyly holiday I got back to the dusty project.
One thing was missing - design and layout. I was striving for refreshed 2000s web 2.0 look. And to achieve it I need
references. Main inspiration came from amazing catalogue of 1990s-2000s magazines, posters, brochures, fluyers
preserved by amazing [Consumer Aesthetics Research Institute](https://cari.institute) and especially this **are.na** channel -
[Gen-X Soft Club](https://www.are.na/evan-collins-1522646491/gen-x-soft-club).

But no matter how hard I've tried, I was unable to capture the spitit, the constant movement of 2000s design.
I'm not a designer and it became obvious - I need a template, a work I can iterate on and do some changes,
disagn from scratch is clearly unreachable for me.

### Template

To achieve authentic look I went for website templates to [Open Source Web Design](https://www.oswd.org),
where spent a few evening collecting templates I found inetresting. One template captured me by it's simplicity
and minimalist look, it was [andreas07](https://www.oswd.org/design/preview/id/2426/) by [Andreas Viklund](https://andreasviklund.com/about/).

I've started proompting heavely every evening and managed to recreate template in Zola.
It looked exactly as original and thus was a bit dated just because all screens now have more pixels and web looks different in general.

Main change is fonts, Verdana (Tahoma as a fallback) was changed to
[Nimbus Sans L](https://www.fontsquirrel.com/fonts/nimbus-sans-l) (Verdana and Tahoma left in place as a fallback)
and then monospaced font was added - [Iosevka Charon Mono](https://fonts.google.com/specimen/Iosevka+Charon+Mono):

```python,linenos,name=hello.py
def hello_world():
    print("Hello, World!")
    return True

if __name__ == "__main__":
    hello_world()
```

I also added background, crop version of [this image](https://www.are.na/block/31697831) with a half tone filter in [Krita](https://krita.org/en/).

Plesead to see how it looks and will be changing it in the future.

### Gallery

For a few years I was taking pictures using some old digital cameras. First it was **Canon Powershot A550**
and later **Nikon Coolpix P7000**. Pictures I take just rot on my hard drive and I'd like to do something about it.
Mainly to force myself to go through the photos and select something decent.
Once a month will be a perfect pace for me and I've implemented some gallery capabilities in **Zola**.

I don't like idea to store images in git and paste them onthe page, so I've used shortcode to specify **are.na** channel
and during build links for pasted.

So any photodump page looks like this:

```markdown,name=april-2026.md
+++
title = "april 2026"
date = 2026-04-30
[taxonomies]
tags = ["photography", "spring", "city"]
[extra]
arena = "photodump_04_2026"
+++
```

and the result looks like this page - [april 2026](/photodump/april-2026).

Here the code can be found - [website/site/templates/shortcodes/arena.html](https://github.com/dshatokhin/website/blob/main/site/templates/shortcodes/arena.html)

Other addition to original template is a small and self containing [javascript viewer](https://github.com/dshatokhin/website/blob/main/site/static/lightbox.js).

### Deployment

Since the website just a set of static files it's deployed straight to Github Pages from [dshatokhin/website](https://github.com/dshatokhin/website).
For PRs simple check implemented to see if everithing build successfully.

### LLMs and content

I struggle with a lot of mistakes during writing, so LLMs used to review the sloppy output I produce 🙈

| Type | Count |
|---|---|
| Spelling | 11 |
| Grammar | 12 |
| Punctuation | 3 |

### In Conclusion

This setup might look overcomplicated and overengineered, well, because it is.
Hobby projects should be like this 😎
