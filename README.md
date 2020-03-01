# CarkDownStarter
 
## Contents
  - [Who should use this](#who-should-use-this)
  - [Write the information](#write-the-information)
  - [Make the Website look pretty](#make-the-website-look-pretty)
  - [All the things CarkDown does](#all-the-things-carkdown-does)

## Who should use this
People new to programming or web development. 

If you know javascript decently well, use React. For those who don't and want something that just works, let's get started.

## Write the information
CarkDown lets you focus on writing the information of your website without having to write a lot of html.

Logically, the only thing you need to then worry about is actualy writing what you want to appear on your website. To do this, look in the `data.js` file at variable called `website` called website: it should look something like this:

`data.js`:
```JS
const website = [
    'h1[title]',
    [
        'this',
        'text',
        'stacks',
        'in',
        'rows',
        [
            'this',
            'text',
            'stacks',
            'in',
            'columns'
        ]
    ]
]
```

This variable is all you will ever need to modify when it comes to the info on your website.

## Make the Website look pretty
If you've never done web dev before, websites are split into 2 types of files: HTML, and CSS (technically javascript as well but let's keep this simple ok?). ok.

You can think of HTML as the outline of your website. It contains all of the text, images, gifs, videos, etc... of your website, as well as boxes (called `div`s) which hold those elements.

CSS is the design of your website. Everything you write in HTML will look something like this:
```HTML
<div>
  Hello, I'm a box
</div>
```

And to allow CSS to modify the HTML, we give elements names like this:
```HTML
<div class="my-class-name" id="my-id">
  Hello, I'm a box with a classname and an id
</div>
```

`class` and `id` are names for elements in HTML. The only difference is `id` is unique. 

You can only have one element with `id="7"` but you can have as many `class="box"` as you want for example.

Anyway back to design. In CarkDown you can specify element names like this for example:

`data.js`:
```JS
const website = [
    "h1[Hello, I'm a title with a classname and an id].my-class-name#my-id",
    ...
]
```

This is great! now we can give names to our elements so that our CSS can find them. In fact, I already attached a default CSS file with some simple styling in the project (check `./css/main.css`).

## All the things CarkDown does

Here's a list of all the elements that carkdown understands:
```
h1[super big title]
h2[big title]
h3[still pretty big title]
h4[this is getting small title]
h5[small title]
^[./link/or/path/to/an/img.png]
*[bold text]
$[A Link, https://github.com/llGaetanll]
YT[a-youtube-video-url]
```

If you wanna learn more about carkDown, [here's a gist](https://gist.github.com/llGaetanll/dc4d4ce7ef4869a8b373ef15c8afc108) that contains all the information listed above but with more detail.