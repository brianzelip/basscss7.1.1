# @bzelip/basscss7.1.1

Distribution of [basscss@7.1.1](https://unpkg.com/basscss@7.1.1/css/basscss.min.css) as a dependency-free npm package that indicates its main file in package.json.

## Installation

```bash
npm i -S @bzelip/basscss7.1.1
```

## Usage

```css
@import '@bzelip/basscss7.1.1';
```

## Test

Verify that `./basscss@7.1.1.min.css` is the same as https://unpkg.com/basscss@7.1.1/css/basscss.min.css.

```bash
npm test
```

## Motivation

[Basscss](https://basscss.com/) was amazing when it came out, and inspired much innovation in the CSS world. Its [author](https://jxnblk.com) is a front end and design hero.

While the project is no longer active and stopped at version 8.x, [version 7.1.1](https://basscss.com/v7/) remains my favorite.

Basscss came out at the time when folks were just starting to stretch the intended use of npm from distributing Node server files to distributing web development tools more broadly, including CSS.

But there weren't many conventions or tools for this shift yet. So single assets in packages like Basscss were awkwardly copied to CSS directories from node_modules/, or imported explicitly from node_modules/.

```css
@import '../node_modules/basscss/css/basscss.min.css';
```

😵

Also, installing basscss@7.1.1 adds 30 total packages to node_modules/.

I'd rather publish a fork that ships 5 files total and can be imported using it's package name (using a tool like [postcss-import](https://www.npmjs.com/package/postcss-import)), eg:

```css
@import 'basscss';
```

## Author

Brian Zelip, https://zelip.me

## License

MIT
