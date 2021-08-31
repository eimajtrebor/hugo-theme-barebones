# hugo-theme-barebones

- [What is this project?](#what-is-this-project)

## What is this project?

This project is a barebones theme for Hugo projects.

This theme contains the following:

- TailwindCSS
- Alpine.js
- Heroicons
- Starter templates
- Block concept for including widgets in your pages

## Installation

- Make sure your project is a Hugo module.
- Add the theme to your projects configuration.

```json
{
    "module": {
        "imports": [
            {
                "path": "github.com/eimajtrebor/hugo-theme-barebones"
            }
        ]
    }
}
```

- Import the module into your project.

```
% hugo mod get -u
```

- Generate a package.json for your project.

```
% hugo mod npm pack
```

- Install the dependencies.

```
% npm install
```

- You can now use TailwindCSS utility classes within your project.

## Home page

To create a home page for your site, add an `_index.md` page at the root of the `content` directory. You can now use the block shortcode to add blocks of content to the page.

## Blocks

Blocks are the mechanism to render blocks of content or modules onto your pages. The block is made up of several components within the project.

### Block shortcode

The block shortcode is used as follows:

```
{{< block key="<key>" >}}
```

The block shortcode's configuration is defined in the following locations:

- `data/global.js`
- `data/blocks/<key>.json`

### Block configuration

#### global.json

The global.json is flexible, allowing you to use it as you choose. The recommended schema follows:

```json
{
    "config": {
        "class": {}
    },
    "content": {}
}
```

- The config object contains global configuration for blocks.
- The content object contains any global content that you would like to use across blocks.

#### blocks/<key>.json

The individual blocks have their own configuration. The recommended schema follows:

```json
{
    "name": "<key>",
    "config": {
        "class": {},
        "partial": {
            "path": "<path-to-partial>"
        }
    },
    "content": {}
```

- The config object contains local configuration for the block including classes for styling and the path to a partial where the markup of the block is contained.
- The content object contains any hardcoded content that you would like to use in the block.
- Usually the partial will be responsible for obtaining data to display.

### Advanced block usage

- You can use any parameter in the shortcode and this will be passed through to the partial.
- Global configuration will be passed through to the partial.
- Block configuration will be passed through to the partial.

```
{{< block key="myWidget" param1="Param1" param2="Param2" >}}
```

## Custom fonts

- Add custom font links in the `fonts.html` partial.
- Override `tailwind.config.js` in the root of the project.

```js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
      extend: {
          fontFamily: {
              mono: ["'Courier Prime'", ...defaultTheme.fontFamily.mono],
              sans: ["'Open Sans'", ...defaultTheme.fontFamily.sans]
          }
      },
  }
}
```

## Hugo templates

- `layouts/_default/baseof.html` - contains styles hooks that can be configured in global.json.
- `layouts/_default/list.html` and `layouts/_default/taxonomy.html` make use of the list.html partial, which allows you to configure what is displayed in a list.
- `layouts/_default/single.html` - contains markup and styles for a single page. You need to override this in your project to get the effect you are after for displaying single content pages.
- `layouts/_default/terms.html` - contains markup and styles for the tags used on the site.
- `layouts/partials/footer.html` - contains markup and styles for the footer. Styles hooks that can be configured in global.json.
- `layouts/partials/header.html` - contains markup for the header. A partial is provided to override the logo and Alpine.js is used for the mobile-friendly menu.
- `layouts/partials/head.html` - contains markup for the HTML head. Partials are provided for custom social media markup, custom fonts and for the processing of JavaScript. Description and author parameters are used within the META description and author tags respectively.
- `layouts/partials/menu.html` - contains markup and styles for the global navigation which uses "main" as its key.
- `layouts/partials/posts.html` - contains markup and styles for the rendering of a list of posts.
- `layouts/partials/scripts.html` - contains the script tag and the mechanism to build JavaScript (see JavaScript section below).

## Analytics

An `analytics.html` partial is available for you to use for embedded analytics solutions. Alternatively you can use JavaScript-based solutions in your `app.js`.

## Social media

A `social-media.html` partial is included within the `head.html` partial which includes markup that help you share to social media networks. The following parameters from config are used:

- Description
- Author
- Title
- Avatar (URL to picture)

## JavaScript

- All .js files within the `assets/js` directory are included in the build.
- Parameters are merged from the `config/_default/params/js` and `config/_default/params/js/app`.
- All JavaScript is combined into a `bundle.js`.

## Hugo shortcodes

- `lead.html` may be used at the start of an article.

