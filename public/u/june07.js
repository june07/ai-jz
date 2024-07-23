const links = [
    {
        url: 'https://june07.com',
        title: 'June07 Homepage',
        favicon: 'https://june07.com/favicon.ico'
    },
    {
        url: 'https://june07.com/searchable-node-js-docs-plus-more',
        title: 'NiM Update',
        subtitle: 'Expanded Tools and Searchable Node.js Docs',
        favicon: 'https://june07.com/favicon.ico'
    },
    {
        url: 'https://nim.june07.com',
        title: 'NiM Homepage',
        favicon: 'https://nim.june07.com/favicon.ico'
    },
]
const rules = [
    {
        priority: 0,
        name: 'redirect',
        url: 'https://june07.com',
        timeout: 10
    },{
        priority: 0,
        name: 'redirect',
        url: 'https://june07.com/searchable-node-js-docs-plus-more',
        timeout: 10
    },{
        priority: 0,
        name: 'redirect',
        url: 'https://nim.june07.com',
        timeout: 10
    }
]
export { links, rules }
