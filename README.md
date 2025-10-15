# Cytosplore Viewer

A static website built with Jekyll for the Cytosplore Viewer.

## Prerequisites

### All Platforms
- Ruby
- Bundler

### Install Bundler
```bash
gem install bundler
```

## Installation

```bash
bundle install
```

## Local Development

```bash
bundle exec jekyll serve --livereload --drafts
```

Visit [http://localhost:4000](http://localhost:4000) to view the site.

### Build Only
```bash
bundle exec jekyll build
```

## Platform-Specific Setup

### Windows
- Install Ruby via [RubyInstaller](https://rubyinstaller.org/)
- Ensure MSYS2/DevKit is installed

### macOS
```bash
# Using Homebrew
brew install ruby
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install ruby-full build-essential

# Add to ~/.bashrc or ~/.zshrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

## Project Structure

- `_config.yml` - Site configuration
- `_layouts/`, `_includes/` - Templates
- `_posts/` - Content pages
- `assets/` - Static files

## Deployment

Build the site and deploy the `_site/` directory contents to any static host. Compatible with GitHub Pages.

## Troubleshooting

- **Gem conflicts**: Run `bundle update`
- **Port conflict**: Use `bundle exec jekyll serve --port 4001`
- **Build tools**: Ensure development tools are installed for your platform

## Maintainers

Cytosplore