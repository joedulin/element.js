element.js
==========

Objectified notation for html elements in node.js (not DOM)

Background: At work I found myself writing a lot of code using Twitter Bootstrap. Because of this I ended up writing a library to allow me to build bootstrap elements from within PHP and they all revolved around an element class. I've decided that I really like using it as a template engine of sorts and wanted to use it for my Node projects as well. So, this is essentially a port of the PHP class that my bootstrap library is built off of -- with some improvements.

Notice: This is mainly used for little projects here and there. It has never been used in a heavy environment. I have no idea how well it actually performs under load. I just like the notation, so I use it. Also, by itself element.js is a very long winded way to template. I intend to add A LOT of helper functions that will take the pain out of it so you end up with something like:
```javascript
var myDiv = div();
myDiv.append(span('Hello, World!'));

//<div><span>Hello, World!</span></div>
```
But we're just not there yet. Soon though. Hopefully.

Basic Usage
===========
```javascript
var Element = require('element.js').Element;

var myDiv = new Element('div', { 
  classes: ['someClass','anotherClass'], 
  inner: [
    'Hello, World!'
  ]
});
  
console.log(hello.render());

//<div class="someClass anotherClass">Hello World</div>
```

Using helpers, how it is intended to be used:
```javascript
var Element-fw = require('element.js');
var Element = Element-fw.Element;
var e = Element-fw.e;

var dropdown = e.div(
  e.button(
    [
      'Dropdown',
      e.span(null, { classes: ['caret'] })
    ],
    {
      attrs: {
        type: 'button',
        id: 'dropdownMenu1',
        data-toggle: 'dropdown'
      },
      classes: [ 'btn','dropdown-toggle','sr-only' ]
    }
  )
);
dropdown.addClass('dropdown');

var ul = e.ul(null, {
  attrs: {
    role: 'menu',
    aria-labelledby: 'dropdownMenu1'
  },
  classes: [ 'dropdown-menu' ]
});
dropdown.append(ul);

ul.addItem(e.a('Action','#', { attrs: { role: 'menuitem', tabindex: '-1' }}));
ul.addItem(e.a('Another action','#', { attrs: { role: 'menuitem', tabindex: '-1' }}));
ul.addItem(e.a('Something else here','#', { attrs: { role: 'menuitem', tabindex: '-1' }}));
ul.append(e.li(null, { classes: ['divider'] });
ul.addItem(e.a('Separated link','#', { attrs: { role: 'menuitem', tabindex: '-1' }}));

var lis = ul.find('li');
for (var i=0; i<lis.length; i++) {
  lis[i].attr('role','presentation');
}

console.log(dropdown.render());
```
Will provide (formatted for readability):
```html
<div class="dropdown">
  <button class="btn dropdown-toggle sr-only" type="button" id="dropdownMenu1" data-toggle="dropdown">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
    <li role="presentation" class="divider"></li>
    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
  </ul>
</div>

<!-- Taken straight from getbootstrap.com -->
```
