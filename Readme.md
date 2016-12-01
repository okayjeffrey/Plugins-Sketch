# Manage & update plugin repos for Sketch.app a little easier
Submodules are your friend! [Some info that helped me out.](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

## Cloning this master repo
You will notice all the "Submodule" folders are empty we need to do two things
- ``git submodule init``
- ``git submodule update``
**or**
- ``git clone --recursive [clone url]`` When cloning it as a shortcut

## Updating Plugin repos to their current version
- ``git submodule update --remote``

## Adding new Plugin Repos to this repo
If you got the hang of this and hate the plugins I use you should be able to create your own!
- use ``git submodule add [clone url]`` not clone

---

## Plugins here.
- [Modulizer](https://github.com/Falkeyn/Modulizer) — Great for creating quick shape margins around your content!
- [Sketch-ArtboardTricks](https://github.com/romannurik/Sketch-ArtboardTricks) — Who doesn't like things in order and numbered too!
- [Sketch Guides](https://github.com/luvmex/Sketch-Guides) — It is the old school designer in me but I still like to have manual guides to keep me true!
- [Export More](https://github.com/nathco/Export-More) — Sometimes you want to use that cool app icon as a desktop icon!
- [Magic Mirror](https://github.com/MagicSketch/MagicMirror) — Quickly mock your design onto a device, what else do I need to say.
- [Sketch Runner](http://sketchrunner.com/) — I love Alfred App and hate clicking around! Automate & shortcut things people!!!
- [Sketch Design Doc](https://github.com/mamuso/sketch-designdoc) — I have been plotting a way to make this since Sketch came out! Glad some smart people have made it happen, now I can modify it!!


*Warning — I put this together to learn about what I can do with git, I do not know if this practice is 100% the right way, so be careful*
