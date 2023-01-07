# Style guide

All the styling that will be used in the project within figma.

[Project link in figma](https://www.figma.com/file/ibWktwVpnog76rMYOdVhks/Dispondo-elementos-com-flexbox-e-grid?node-id=54%3A2358)

## Font

```html
Open Sans:
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap">
```

## Colors

body: `#1D232A`

header: `#1D232A`

header mobile: `#15191C`

lateral menu: `#15191C`

card: `#2C343A`

font: `#FFFFFF`

alternative font: `#95999C`

links: `#0480DC`

button: `#0480DC`

shadows: `0px 4px 4px rgba(0, 0, 0, 0.16)`

## Icons

Are inside the source file `icons.ttf`. To use, first import the font into the project using `@font-face` and then use the codes below to display the icon.

```css
@font-face {
    font-family: 'icons';
    src: url(../font/icons.ttf);
}
```

> Beware of file location `icons.ttf`

Shirts = `\e900`

Cart = `\e901`

Start = `\e902`

Members = `\e903`

Menu = `\e904`

Coin = `\e905`

Notification = `\e906`

Peak = `\e908`

Peaks = `\e909`

Paintings = `\e90a`

Play = `\e90b`

Clock = `\e90c`

Arrow-down = `\e90d`

Videos = `\e90e`

Preview = `\e90f`

## Spacing

Button inner space: `8px`

Space between button elements: `8px`

Space between elements: `16px/8px`

Inner body spacing: `16px`

Spacing between recents card title and its items: `24px`

## Sizes

Mobile device size: `360px`

Desktop device size: `1440px`

Maximum width of main content: `1120px`

Maximum width of a desktop card: `256px`

Minimum height of a card: `320px`