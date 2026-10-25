+++
title = "hegel h90 encoders repair"
date = 2026-10-24
aliases = ["/devops/hegel-h90-encoders-repair/"]
[extra]
arena_block = "51808815"
[taxonomies]
tags = ["repair", "hegel", "h90", "encoders", "audio", "soldering"]
+++

Back in July I bought a used Hegel H90 amplifier from Tori (a Finnish marketplace),
and a few days later it was delivered. After a quick inspection I discovered problems
with both knobs on the front panel - source and volume. The seller said it had been working before,
and a quick search led me to a Reddit post where the OP had the same problem. It seems to be a design flaw,
because a hard push on the knobs can easily break the encoders, like this:

{{ arena_image(block="51808610", height="200", position="center") }}

Since I was going to use the remote anyway, I emailed Hegel support for the part number and meanwhile connected the amplifier
to my audio system.

A week later I still hadn't got an answer from Hegel, so I texted them again - and again, no reply followed.

Then, at the end of September, I made another attempt to contact Hegel support via email and got a reply the next day.

> Hi Denis,
>
> Thank you for your email. Both the volume control and the input selector use the same encoder.
> Rotary encoder EC12E24204A9 Manufacturer: ALPS
>
> Best regards
>
> Hegel Music System AS – Oslo, Norway
>
> Christian

The same day I found the encoders [on the TME website](https://www.tme.eu/fi/en/details/ec12e24204a9/incremental-type-encoders/alps/).
I ordered five, and including delivery it came to €21. The parts were out of stock,
with an expected delivery sometime at the end of November.
But they shipped ahead of schedule, and today I decided to finally replace them.

The amplifier is easy to disassemble: just four hex bolts and the cover comes off.
A few more hex bolts, one ribbon cable, and the front panel comes off.

{{ arena_image(block="51808606", height="200", position="center") }}

{{ arena_image(block="51808607", height="200", position="center") }}

The main problem was my lack of special tools to remove the five-leg encoders from the small PCBs.
After an hour of pathetic attempts I decided to cut the legs off the broken encoders -
I'm not sure why I was avoiding it in the first place.
To clean the pin holes in the PCB I heated up the solder and just blew as hard as I could.

It barely worked...

{{ arena_image(block="51808608", height="200", position="center") }}

I was so afraid of breaking the new encoders that I put the knobs on them _before_ soldering,
which actually helped to hold the encoders in place.
The soldering process was the easiest part.

ew, gross...

{{ arena_image(block="51808613", height="200", position="center") }}

much better after cleaning up with isopropanol

{{ arena_image(block="51808615", height="200", position="center") }}

and it also works flawlessly

{{ arena_image(block="51809636", height="200", position="center") }}

### a few words about amplifier

When living in Saint Petersburg I used a Hegel H95 for a while, but after I moved to Helsinki I kept
postponing buying an amplifier, because the new Hegels cost a lot. I really like how well it's built,
and I especially like the remote - how it feels and the rubber buttons. The H90 is an older model from 2018,
and from a regular listener's perspective it is basically the same as a newer one. The H90 lacks Spotify Connect,
but it does have AirPlay and some _retro_ capbilities like DLNA.

Maybe in the future I will talk about streaming using H90.
