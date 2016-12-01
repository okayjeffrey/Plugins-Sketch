### Working with Plugin Repos for Sketch.app that will be easily updatable.
Submodules are your friend! [Some info that helped me out.](https://git-scm.com/book/en/v2/Git-Tools-Submodules)

# Cloning this master repo
You will notice all the "Submodule" folders are empty we need to do two things
- ``git submodule init``
- ``git submodule update``
**or**
- ``git clone --recursive [clone url]`` When cloning it as a shortcut

# Updating Plugin repos to their current version
- ``git submodule update --remote``

# Adding new Plugin Repos to this repo
If you got the hang of this and hate the plugins I use you should be able to create your own!
- use ``git submodule add [clone url]`` not clone
