# JavaScript Notes

## Events
* One of the most important parts of JavaScript
* Why? JavaScript was created to make websites interactive and dynamic with the user; need to have **event handlers** that tell JavaScript how to act when some action of the page is taken (i.e. how to act when the user does specfic things on the page).
* Event handlers

```html
<button onclick="doClick()"></button>
<button onclick="this.innerHTML = 'You clicked!'"></button>
```

Don't want to mix JavaScript and HTML.

```html
<button onclick="changeText(this)"></button>

<script>
function changeText(object) {
    object.innerHTML = 'You Clicked!';
}
</script>
```

```html
<script>
function changeHeading() {
    var heading = document.getElementById('heading');
    heading.innerHTML = 'You Clicked!';
}

</script>
```

```html

<h1 id="time"></h1>

<script>
function showDate() {
    var time = document.getElementById('time');
    this.innerHTML = Date();
}

function clearDate() {
    var time = document.getElementById('time');
    this.innerHTML = '';
}
</script>
```

Other events:
* ``onmouseover``
* ``onmouseout``
* ``onload`` (usually bound to the body)

You can bind more than one event listener/handler per object.

## JavaScript Forms

Select events:
* ``onchange``

```html
<script>
function changeBackground(object) {
    var body = document.getElementById('body');
    body.style.backgroundColor = object.value;
}
</script>
```

### Form
* ``onsubmit``

```html
<form action="/submit" onsubmit="return validateForm()">
```

```js
function validateForm() {
    var firstName = document.form.['myForm']['firstName'].value;

    if (firstName == null || firstName == '') {
        alert('First name is required.');
        return false;
    }

    if (firstName.length < 3) {
        alert('First name must be at least 3 characters long.');
        return false;
    }
}
```