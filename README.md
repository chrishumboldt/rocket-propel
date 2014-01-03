Blueplate
=========

A lightweight, responsive CSS layout engine.


Getting Started
=========

Using Blueplate is simple and can be done in two ways. You can either include the "blueplate.scss" SASS file in your project and compile accordingly or you can include the "blueplate.css" CSS file within your head tag. Doing the latter wont allow you to edit the options but the library is comprehensive and includes everything you need to get going.

For example:
```
<head>
    <link href="blueplate.css" rel="stylesheet" type="text/css">
</head>
```

Once included you will have the ability to organize elements vertically and horizontally that will "respond" based on set media queries. It works on a basic row, span grid system and is completely editable. For the basis of the example below we use the default grid column limit of 12 and the classing method to achieve the layout. Resize the window to see the "responsiveness" in action and notice how at smaller screen sizes like mobile, the blocks stack vertically.

For example:
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

The above example will show the span blocks occupy 2 columns widths of the full 12 column row resulting in 6 blocks all together.


Documentation
=========

For a detailed explanation and a complete overview of all the options available, read the online documentation at http://getwebplate.com/plugins/blueplate.


Copyright and license
=========

Copyright 2013 Webplate Project

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
