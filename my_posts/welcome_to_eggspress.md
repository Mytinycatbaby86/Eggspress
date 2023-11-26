---
title: "Welcome to Eggspress"
subtitle: "Let's get you started with this template post!"
image: "fields.jpeg"
imagePositionY: "25"
imagePositionX: "50"
date: "2023-10-25T00:00:00-0400"
author: "eggie, beakster"
snippet: "This introductory post demonstrates various markdown formats you can use in your posts, such as headings, tables, quotes, and footnotes. When you're ready, rename this file and replace its contents with your own!"
description: "This introductory post walks through some key features of the Eggspress platform."
sidebar: "eggspress_links"
category: "Miscellaneous"
relatedPost1: "another-placeholder"
relatedPost2: ""
relatedPost3: ""
relatedPost4: ""
---

![Eggie and Byline frolicking through the fields](fields.jpeg)


# Welcome to Eggspress!

We're so egg-cited to have you here! I'm [Eggie](/author/eggie) and this is my friend [Byline](/author/beakster). In this post, we'll show off all of the elements you'll be able to include in your posts! We'll look at headings, tables, blockquotes, and even a few footnotes. Let's dive in!


## Metadata brings your page to life

There's a lot we've documented already in the [Getting Started](https://github.com/dentonzh/Eggspress/blob/main/README.md) guide, but we'll highlight a few features you may want to try!

### Author Cards

If you're reading this from a larger screen (say, on your computer), you'll find the author cards at the top of the sidebar. If you're on a mobile device, author cards appear below the post. In Eggspress, you can have no author at all or as many as you'd like!

### Related Posts

Point your readers to relevant content on your site by linking them to related posts. Related posts will always appear below your post contents and in the sidebar on larger screens.

### Referencing other things

When referencing another post, sidebar, or author in your frontmatter metadata, Eggspress uses the filename without the file extension as the reference slug. To create the slug, replace any spaces or underscores in the filename with dashes.  

For example, if you have a post with the filename `welcome_to_eggspress.md`, and you want to set the `relatedPost1` field in the frontmatter to point to the post named `an_old_post.md`, you would use the slug `an-old-post` instead of the full filename:

```
relatedPost1: "an-old-post"
```

## Markdown tables

We wanted to take a moment here and demo one of our favorite Eggspress features - markdown tables! They make it so easy to organize information in clean rows and columns.

For example, let's look at a handy table comparing some popular egg dishes, cook times, and why people love eating them[^1]:

| Egg Type | Time | Why People Love It |
|-|-|-|
| Soft-Boiled | 6 minutes | The runny yolk is perfect for dipping toast |
| Hard-Boiled | 12 minutes | Easy protein on-the-go |
| Scrambled | 8 minutes | Fluffy, creamy, and versatile | 
| Over Easy | 5 minutes | Get that beautiful runny yolk to mix with other breakfast items |
| Poached | 4 minutes | Fancy egg cups to impress your guests |

There you have it - an egg-cellent markdown table example! As you can see, it's great for breaking down detailed information in a reader-friendly format.


## Bulleted lists and another footnote

Humans have been gobbling up eggs since the Neolithic Age![^2] Did you know:

- Chicken domestication began over 8,000 years ago in Southeast Asia  
- Egyptians and Chinese were among the first to create artificial incubation
- Eggs became a common food in Europe, Asia, and the Middle East centuries ago

Fascinating stuff, right Byline? Our ancestors loved eggs just as much as we do today!  

## And finally, some made up blockquotes

> I was able to get my blog up and running in under an hour thanks to Eggspress's simple setup!
- Mary Thompson, Lifestyle Blogger

> I love how fast and optimized Eggspress is. My site loads lighting fast even with tons of images.
- James Lee, Travel Photographer  

> Eggspress is the easiest way I've found to publish my thoughts to the world! 
- Jane, Eggspress user

## Start writing!

Hopefully this little tour cracked open all the egg-cellent things Eggspress can do! We showed you headings, tables, quotes, footnotes - all formatted in simple markdown. Now you can start styling your first post however you like!  

Get started by renaming this file and editing its contents. Happy blogging! 😄

Best,
Eggie & Byline

[^1]: Egg cooking times source: The Incredible Egg Cookbook by the American Egg Board 
[^2]: Egg history facts from The Incredible Egg
