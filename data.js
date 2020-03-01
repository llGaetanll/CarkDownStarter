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

const c = carkDown(website);

console.log(c)

$('.main').append(c);