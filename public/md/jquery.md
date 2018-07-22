# JQuery Notes
* Install both JQuery and JQuery UI
* Put the script with JQuery after all the HTML body content, but before the ending tag
```javascript
$("document").ready(function() {
    // our code
});
```

```javascript
.css("style", "value")
.css({
    "style1": "value1", 
    "style2": "value2",
    ...
})
```

* https://developer.mozilla.org/en-US/docs/Web/CSS/Reference has a list of all the CSS style properties that can be set (at least with JQuery)

Different kinds of selectors
```js
$("#id tag")
$("em + a")
$("#id li:nth_child(3)")
$("li[name]").html("") // edit the HTML in between the tags
$("a[href*='google']") // links that have 'google' in them
$("img[alt^='NTT'"]) // alts that start with 'NTT'
$("a[href$='.org']") // links that end with '.org'
$("li:not(:contains(and))") // list items that don't contain the word 'and'
$("p:has(i)") // paragraphs that have an <i> tag
$("").hide()
$("").show()
$("").prepend("text")
$("").append("text")
$("").before("<p></p>")
$("").after("<p></p>")
$("").click(function() { // Create a click listener

})

.toggleClass
.addClass
.removeClass

.attr // get an attribute

// Events
.mouseover() // move mouse on the element
.mouseout() // move mouse off the element
.hover(function() { }, function() { }) // combine both the mouse on and out event
.dblclick()
.click(evt => {

})
.keypress()
.blur() // input box loses focus
```

Attributes vs. Properties

``$(this)`` inside a callback for a JQuery selector refers to that JQuery selector.

Building a slideshow
```js

var focusImg = 0;
$("#img-container").click(function() {
    focusImg = ++focusImage % images.length;
    $("#img-container img").attr("src", images[focusImg]);
});

```

## Animations
```js
$(this).fadeOut(2000); // 2000ms
$(this).fadeToggle(2000);
.fadeTo('slow', opacity);
.animate({}, speed, animation, callback)
```

## AJAX
```js
$("").on("click", func);

function func() {
    $.ajax({
        type: "GET",
        url: "textFromServer.txt",
        success: successFunc
    });
}

function successFunc(data, status) {
    $("").text(data);
}

.load

$.ajax({
    type: "GET",
    url: "customers.xml",
    datatype: "xml",
    success: successCallback
})
```