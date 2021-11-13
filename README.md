# javaScriptKingdom

## Description
This is essentially, going to be a javaScript tool box where I am sharping my understand of using a dynamic DOM to load in other modules and to remove them, while also working on UI concepts for animating element componenets on load and unload via switching of classes.

Checkout out the dev tools to observe the DOM, dynamically loading and unloading, whilst also retaining some DOM elements, (wall of text) for persisting DOM elements. You can observe class name changes on the button elements and modals, which trigger style animations and functions.

<a href="https://castroolympias.github.io/javaScriptKingdom/">Link to app</a>

<img src="media/Root Application.gif"/>

## Table of Contents
- [Story](#Story)
- [Usage](#Usage)
- [Authors](#Authors)
- [Resources](#Resources)


## Story
I’m actually really curios if I can connect this to my Apollo Express Server utilizing the GraphQl and Mongo database, though React and similar frameworks are more of the industry standard, so perhaps what I can do is hybridize some techniques and principles that I’ve learned so far. I do think far ahead and wonder about the possibilities.
Of course, I will spend more of my time on industry standard frame works for front end development. I have since started working on my other project, where I plan to implement animation loading and unloading for an exceptional UI experience as practiced from this app.

## Usage

The html file is completely clean, except for `<script>` calling in my index.js, where everything happens from there, and the main style sheet index.css. All other components load dynamically, and I control where additional styles sheets are loaded, where script style sheets are loaded and then where elements are loaded. This is demonstrating a change in class and id which performs certain function behaviors and styling, loading, unloading, fade-in, fade-out animations.

Opening a modal, will utilize it’s default class for a fade-in or slide-in style. There are many methods to close the modal, clicking outside the modal, clicking, home and opening another modal. When the modal is set to close, it’s class is changed immediately to start the fade-out animation and when the animation is complete, a timer is used to remove the elements on the DOM.
The buttons to open models also change their text to indicate another press of that button to close the modal. Clicking inside the modal, does not trigger the modal to close.

The modals and the navbar are using a fixed position style. For the navbar, the fixed position allows the navbar to remain on the bottom of the screen, without having to push it down by filling up the body element with content. The modals are fixed so they behave like they are really floating above and are unaffected by elements loaded into the body, so you can scroll through the body elements and the modals remain fixed according to the view port/screen.

## Authors

* David Crockett / <a href="https://github.com/CastroOlympias">CastroOlympias @ GitHub</a>