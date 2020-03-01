// if you have a linter, disable it for this file. It could break the carkdown structure

const website = [
    'h1[super big title]',
    'h2[big title]',
    'h3[still pretty big title]',
    'h4[this is getting small title]',
    'h5[small title]',
    [
        'this',
        'text',
        'stacks',
        "h5[Hello I'm a title]", // notice the double quotes because we have a ' in there
        'in',
        'rows',
        [
            'this',
            'text',
            'stacks',
            'in',
            'columns'
        ]
    ],
    'bla bla bla *[This text is bold] and this text is not. This text is _[italicized]',
    '$[GitHub, https://github.com/llGaetanll]',
    'YT[https://www.youtube.com/watch?v=dQw4w9WgXcQ]',
    'h3[A local image]',
    '^[./static/local-img.jpg]', // A local image
    'h3[A random image from a link]',
    '^[https://source.unsplash.com/random/800x600]' // A random image from a link
]

const c = carkDown(website);

$("#main").append(c);