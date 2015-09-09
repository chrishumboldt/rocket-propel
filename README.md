# Blueplate
A lightweight, responsive CSS layout engine and SASS mixin library.

## Table of Contents

* [Getting Started](#getting-started)
* [SASS Implementation](#sass-implementation)
* [CSS Implementation](#css-implementation)
   * [Background](#background)
   * [Display](#display)
   * [Layout](#layout)
   * [Position](#position)
   * [Sizing](#sizing)
   * [Spacing](#spacing)
   * [Text](#text)
* [Mixins](#mixins)

## Getting Started
You can either download a copy of the source files or install Blueplate via Bower.

```
bower install blueplate
```

## SASS Implementation
Start by importing the necessary file into your own SASS file and include the required mixins.

**SASS**
```
@import "sass/import";

.example {
   @include row();
}
.left, .middle, .right {
   @include span(12); // 100% width
}
@include breakpoint(large) {
   .left {
      @include span-new(6); // 50% width
   }
   .middle {
      @include span-new(4); // 33.33% width
   }
   .right {
      @include span-new(2); // 16.66% width
   }
}
```

**HTML**
```
<div class="example">
   <div class="left"></div>
   <div class="middle"></div>
   <div class="right"></div>
</div>
```

## CSS Implementation
Start by including the necessary files.

```
<head>
   <link href="css/blueplate.css" rel="stylesheet" type="text/css">
</head>
```

Now class your HTML to manage your layout. For example:

```
<div class="row">
   <div class="span-2">Span 2</div>
   <div class="span-2">Span 2</div>
   <div class="span-2">Span 2</div>
   <div class="span-2">Span 2</div>
   <div class="span-2">Span 2</div>
   <div class="span-2">Span 2</div>
</div>
```

Find the other available classes below:

#### Background
Class | Options | Description
---- | ---- | ----
.back-pos-[p] | [p] = t, r, b, l, c | Set the background position of an element to [p] for top, right, bottom, left or center.
.back-repeat-[r] | [r] = no, y, x | Set the background repeat of an element to [r] for no repeating, repeat along y axis or repeat along x axis.
.back-single | | Set the background of an element to not repeat and to be centered.
.back-contain | | Set the background of an element to not repeat and to contain within the element.
.back-cover | | Set the background of an element to not repeat and to cover the element completely.
.back-black | | Set the background colour to black.
.back-grey | | Set the background colour to medium grey.
.back-grey-light | | Set the background colour to light grey.
.back-white | | Set the background colour to white.

#### Display
Class | Options | Description
---- | ---- | ----
.hide | | Hide an element.
.hide-large | | Hide an element in large view only.
.hide-small | | Hide an element in small view only.
.show | | Show an element.
.show-large | | Show an element in large view only.
.show-small | | Show an element in small view only.
.transparency-[o] | [o] = 100, 75, 50, 25, 0 | Set the opacity of an element to [o] for 100%, 75%, 50%, 25% or 0%.

#### Layout
Class | Options | Description
---- | ---- | ----
.center | | Center an element.
.float-[p] | [p] = l, r | Set the float property of an element to [p] for left or right.
.float-no | | Remove the float property from an element.
.float-clear | | Stop all floating elements from affecting any element following.
.valign-[p] | [p] = t, m, b | Set the vertical alignment of an element to [p] for top, middle or bottom.

#### Position
Class | Description
---- | ----
.pos-absolute | Set the position of an element to absolute.
.pos-relative | Set the position of an element to relative.
.pos-static | Set the position of an element to static.
.pos-fixed | Set the position of an element to fixed.

#### Sizing
Class | Options | Description
---- | ---- | ----
.block-h-[h] | [h] = 10, 20, 50, 100, 200, 500, 1000 | Set the height of an element to [h] for 10px, 20px, 50px, 100px, 200px, 500px, 1000px.
.block-w-[w] | [w] = 10, 20, 50, 100, 200, 500, 1000 | Set the width of an element to [w] for 10px, 20px, 50px, 100px, 200px, 500px, 1000px.

#### Spacing
Class | Options | Description
---- | ---- | ----
.spacing-no | | Remove all padding and margins from an element.
.pad-no | | Remove all padding from an element.
.mgn-no | | Remove all margins from an element.
.pad-[x] | [x] = [integer] | Add [x] amount of padding all around. For example pad-6 will add 6 pixels of padding to the top, right, bottom and left of an element.
.pad-[p]-[x] | [p] = t, r, b, l [x] = [integer] | Add [x] amount of padding to the [p] side of the element for top, right, bottom or left.
.mgn-[x] | [x] = [integer] | Add [x] amount of margin to the top, right, bottom and left of an element.
.mgn-[p]-[x] | [p] = t, r, b, l [x] = [integer] | Add [x] amount of margin to the [p] side of the element for top, right, bottom or left.

#### Text
Class | Options | Description
---- | ---- | ----
.hide-text | | Hide the text within an element.
.txt-[a] | [a] = l, c, r | Set the text alignment to [a] for left, center, right.
.txt-size-[s] | [s] = x2s, xs, s, m, n, l, xl, x2l | Set the font size to [s] for extra small, small, medium, normal, large, extra large, extra extra large.
.txt-weight-[w] | [w] = xl, l, n, b, xb | Set the font weight to [b] for extra light, light, normal, bold, extra bold.
.txt-light | | Set the font weight to light.
.txt-bold | | Set the font weight to bold.
.txt-normal | | Set the font weight and style to normal.
.txt-italics | | Set the font style to italics.
.txt-oblique | | Set the font style to oblique.
.txt-white | | Set the font colour to white.
.txt-grey | | Set the font colour to medium grey.

## Author
Created and maintained by Chris Humboldt<br>
Website: <a href="http://chrishumboldt.com/">chrishumboldt.com</a><br>
Twitter: <a href="https://twitter.com/chrishumboldt">twitter.com/chrishumboldt</a><br>
GitHub <a href="https://github.com/chrishumboldt">github.com/chrishumboldt</a><br>

## Copyright and License
Copyright 2015 Webplate Project

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
