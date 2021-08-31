# hugo-theme-barebones

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


