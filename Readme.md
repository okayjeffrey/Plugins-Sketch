# Manage & update plugin repos for Sketch.app a little easier
Submodules are your friend! [Some info that helped me out.](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

## Cloning this master repo
You will notice all the "Submodule" folders are empty we need to do two things
- ``git submodule init``
- ``git submodule update``
**or**
- ``git clone --recursive [clone url] [sketch plugins folder path]`` When cloning it as a shortcut — * *Plugins Folder Path for Sketch 3: ~/Library/Application Support/com.bohemiancoding.sketch3/Plugins*

## Updating Plugin repos to their current version
- ``git submodule update --remote``

## Adding new Plugin Repos to this repo
If you got the hang of this and hate the plugins I use you should be able to create your own!
- use ``git submodule add [clone url]`` not clone

## Removing a Plugin Repo (now Submodule) from your repo
- its as simple as ``git rm -f [directory name of plugin]`` the -f is to force the removal incase there is anything cached.

---

## Plugins here.
- [Modulizer](https://github.com/Falkeyn/Modulizer) — Great for creating quick shape margins around your content!
- [Sketch-ArtboardTricks](https://github.com/romannurik/Sketch-ArtboardTricks) — Who doesn't like things in order and numbered too!
- [Sketch Guides](https://github.com/luvmex/Sketch-Guides) — It is the old school designer in me but I still like to have manual guides to keep me true!
- [Export More](https://github.com/nathco/Export-More) — Sometimes you want to use that cool app icon as a desktop icon!
- [Magic Mirror](https://github.com/MagicSketch/MagicMirror) — Quickly mock your design onto a device, what else do I need to say.
- [Sketch Runner](http://sketchrunner.com/) — I love Alfred App and hate clicking around! Automate & shortcut things people!!!
- [Sketch Design Doc](https://github.com/mamuso/sketch-designdoc) — I have been plotting a way to make this since Sketch came out! Glad some smart people have made it happen, now I can modify it!!
- [Sort Me](https://github.com/romashamin/sort-me-sketch) — Organize your layers alphabetically because its your job to be organized!
- [User Flows](https://github.com/abynim/UserFlows/) — I have been doing this manually for a while checking this out to see how it works for building userflows in a Page between artboards!


## Plugins not included (Because they handle their own updating)
- [Auto-Layout](https://www.animaapp.com/) — A nice little tool that will make responsive layouts easier to build!
- [Craft](https://www.invisionapp.com/craft)

*Note: These are not all of the plugins being used. Some like Invision's Craft install & manage themselves so I have included a .gitignore for plugins like that.*

*Warning — I put this together to learn about what I can do with git, I do not know if this practice is 100% the right way, so be careful*
