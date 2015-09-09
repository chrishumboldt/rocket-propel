# Blueplate
A lightweight, responsive CSS layout engine and SASS mixin library.

## Table of Contents

* [Getting Started](#getting-started)
* [CSS Implementation](#css-implementation)
* [SASS Implementation](#sass-implementation)
* [Classes](#classes)
   * [Background](#Background)
* [Mixins](#mixins)

## Getting Started
You can either download a copy of the source files or install Blueplate via Bower.

```
bower install blueplate
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

## Classes
Find the other available classes below,

#### Background
Class | Options | Description
---- | ---- | ----
.back-pos-[p] | [p] = t, r, b, l, c | Set the background position of an element to [p] for top, right, bottom, left or center.

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
