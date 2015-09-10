# Blueplate
A lightweight, responsive CSS layout engine and SASS mixin library.

## Table of Contents

* [Getting Started](#getting-started)
* [SASS Implementation](#sass-implementation)
   * [Animation](#animation)
   * [Arrow](#arrow)
   * [Background](#background)
   * [Background Images](#background-images)
   * [Borders](#borders)
   * [Border Radius](#border-radius)
* [CSS Implementation](#css-implementation)
   * [Background](#background-1)
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

Find the other available mixins below:

### Animation
##### animate($attribute, $transition-speed: 0.2s)
Set the transition animation style of $attribute with all the neccessary prefixes for all the browser types.

### Arrow
##### arrow($position: bottom, $colour: $red, $size: 20px)
Attach a CSS arrow to an element via the after pseudo element.

##### arrow-colour($position: bottom, $colour: $white)
Change the colour of an elements CSS arrow. Note that the arrow position is required.

##### arrow-no($colour: $white)
Remove an elements CSS arrow and reset the background colour. Note that the background colour is required.

### Background
**Note** that all the image urls already include the relative image path as per $images-root settings variable.

##### background-attachment($attachment: scroll)
Set the background attachment property to $attachment.

##### background-clip($clip: border-box)
Set the background clip property to $clip.

##### background-colour($colour: grey)
Set the background colour to $colour.

##### background-contain()
Set the background size to contain, the position to center and stop it from repeating.

##### background-cover()
Set the background size to cover, the position to center and stop it from repeating.

##### background-origin($origin: padding-box)
Set the background origin property to $origin.

##### background-position($position: center)
Set the background position property to $position.

##### background-repeat($repeat: repeat)
Set the background repeat property to $repeat.

##### background-size($size: auto)
Set the background size property to $size.

##### background-single()
Set the background position to center and stop it from repeating.

### Background Images

##### background-image($image-url, $position: center)
Set the background image URL of an element with an optional position property.

##### background-image-contain($image-url, $position: center)
Set the background image URL to be contained within the element with an optional position property.

##### background-image-cover($image-url, $position: center)
Set the background image URL to cover the element with an optional position property.

##### background-image-parallax($image-url)
Set the background image URL of an element with a fixed position property. Used mainly for a parallax style effect.

##### background-image-single($image-url, $position: center)
Set the background image URL of an element with no-repeat and an optional position property.

### Borders

##### border($colour: grey, $size: 1px, $type: solid)
Set the border property of an element.

##### border-top($colour: grey, $size: 1px, $type: solid)
Set the border top property of an element.

##### border-right($colour: grey, $size: 1px, $type: solid)
Set the border right property of an element.

##### border-bottom($colour: grey, $size: 1px, $type: solid)
Set the border bottom property pf an element.

##### border-left($colour: grey, $size: 1px, $type: solid)
Set the border left property of an element.

##### border-horizontal($colour: grey, $size: 1px, $type: solid)
Set the border left and border right property of an element.

##### border-vertical($colour: grey, $size: 1px, $type: solid)
Set the border top and border bottom property of an element.

##### border-no()
Remove all borders from an element.

### Border Radius

#####
#####
#####
#####
#####
#####
#####
#####
#####
#####
#####
#####
#####
#####
#####
#####
#####
#####

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

### Background
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

### Display
Class | Options | Description
---- | ---- | ----
.hide | | Hide an element.
.hide-large | | Hide an element in large view only.
.hide-small | | Hide an element in small view only.
.show | | Show an element.
.show-large | | Show an element in large view only.
.show-small | | Show an element in small view only.
.transparency-[o] | [o] = 100, 75, 50, 25, 0 | Set the opacity of an element to [o] for 100%, 75%, 50%, 25% or 0%.

### Layout
Class | Options | Description
---- | ---- | ----
.center | | Center an element.
.float-[p] | [p] = l, r | Set the float property of an element to [p] for left or right.
.float-no | | Remove the float property from an element.
.float-clear | | Stop all floating elements from affecting any element following.
.valign-[p] | [p] = t, m, b | Set the vertical alignment of an element to [p] for top, middle or bottom.

### Position
Class | Description
---- | ----
.pos-absolute | Set the position of an element to absolute.
.pos-relative | Set the position of an element to relative.
.pos-static | Set the position of an element to static.
.pos-fixed | Set the position of an element to fixed.

### Sizing
Class | Options | Description
---- | ---- | ----
.block-h-[h] | [h] = 10, 20, 50, 100, 200, 500, 1000 | Set the height of an element to [h] for 10px, 20px, 50px, 100px, 200px, 500px, 1000px.
.block-w-[w] | [w] = 10, 20, 50, 100, 200, 500, 1000 | Set the width of an element to [w] for 10px, 20px, 50px, 100px, 200px, 500px, 1000px.

### Spacing
Class | Options | Description
---- | ---- | ----
.spacing-no | | Remove all padding and margins from an element.
.pad-no | | Remove all padding from an element.
.mgn-no | | Remove all margins from an element.
.pad-[x] | [x] = [integer] | Add [x] amount of padding all around. For example pad-6 will add 6 pixels of padding to the top, right, bottom and left of an element.
.pad-[p]-[x] | [p] = t, r, b, l [x] = [integer] | Add [x] amount of padding to the [p] side of the element for top, right, bottom or left.
.mgn-[x] | [x] = [integer] | Add [x] amount of margin to the top, right, bottom and left of an element.
.mgn-[p]-[x] | [p] = t, r, b, l [x] = [integer] | Add [x] amount of margin to the [p] side of the element for top, right, bottom or left.

### Text
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
