# AutoTyping.js
A lightweight (1.86kb) and easy to use library that lets you write and delete text automatically. Helping you create animated typing effects.

See AutoTyping.js [in action with live examples](https://tsanak.github.io/autotyping/).


## How to use

1. Grab the minified version of the library from ``` dist/autotyping.js ```
2. Create a new instance of the library:
    ```javascript
    const typing = new AutoTyping('#selector', [
        'array of',
        'text',
        'lorem ipusm'
    ], options);
    ```
3. Start the typing effect
    ```javascript
    typing.start();
    ```

## Options

1. [REQUIRED] **selector**  (either the id or the class of the element).

    The selector is where the autotyping will be initiated.
2. [REQUIRED] **text**  (Array of Strings).

    The text that the library will type.

    e.g.:
     ```javascript
        [
            'first text',
            'second text',
            'etc...'
        ]
    ```
3. [OPTIONAL] **options** (object).

    Controls the library's behavior

    - **typeSpeed** (Integer) in ms, default: 150
        Controls the typing speed of each character.

    - **deleteSpeed** (Integer) in ms, default: 150
        Controls how fast/slow each character is deleted.

    - **waitBeforeDelete** (Integer) in ms, default: 1000
        Controls how much time the library will wait before deleting a word.

    - **waitBetweenWords** (Integer) in ms, default: 1000
        Controls how much time the library will wait before writing the next word.

    - **writeWhole** (Boolean), default: false
        Controls if the text should be written all together (word per word and not character by character).

## Examples

### First example with simple text in the text array.
```html
<p>This is an example: <span class="example-selector"></span></p>

<script src="dist/autotyping.min.js"></script>
```

```javascript
<script>
    const exampleText = ['I can write a whole sentence.', 'Or', 'single', 'words'];
    const exampleTyping = new AutoTyping('.example-selector', exampleText, {
        typeSpeed: 50,
        deleteSpeed: 50,
        waitBeforeDelete: 2000,
        waitBetweenWords: 500,
    });
    exampleTyping.start()
</script>
```

!['AutoTyping.js in action'](https://i.imgur.com/1YiPHaY.gif)

### Second example with emojis in the text array.

```html
<p>
    Created with <span class="footer-text"></span>  by tsanak
</p>

<script src="dist/autotyping.min.js"></script>
```

```javascript
<script>
    new AutoTyping('.footer-text', [
        '❤️',
        '☕',
        '⌨️',
        '💻'
    ], {
        waitBeforeDelete: 1000,
        waitBetweenWords: 10,
        writeWhole: true
    }).start();
</script>
```

!['AutoTyping.js with emojis](https://i.imgur.com/2fGwIpY.gif)

