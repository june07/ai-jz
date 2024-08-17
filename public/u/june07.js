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
    {
        url: 'https://raw.githubusercontent.com/june07/ghost-content/main/2024/07/btc.address.webp',
        title: 'Bitcoin Wallet Address',
    },
    {
        url: 'https://raw.githubusercontent.com/june07/ghost-content/main/2024/07/eth.address.webp',
        title: 'Ethereum Wallet Address',
    },
    {
        url: 'https://raw.githubusercontent.com/june07/ghost-content/main/2024/07/near.address.webp',
        title: 'NEAR Wallet Address',
    },
    {
        url: 'https://raw.githubusercontent.com/june07/ghost-content/main/2024/07/trx.address.webp',
        title: 'Tron Wallet Address',
    },
    {
        url: 'https://policies.june07.com/',
        title: 'Single Click, Git Hosted, Policy Documents',
        favicon: 'https://policies.june07.com/logo-v3-512x512.png'
    },
    {
        url: 'https://clippings.june07.com/',
        title: 'Classified Ads Archival',
        favicon: 'https://clippings.june07.com/favicon.ico'
    },
]
const rules = [
    {
        priority: 10,
        name: 'redirect',
        url: 'https://june07.com',
        timeout: 10
    },{
        priority: 10,
        name: 'redirect',
        url: 'https://june07.com/searchable-node-js-docs-plus-more',
        timeout: 10
    },{
        priority: 10,
        name: 'redirect',
        url: 'https://nim.june07.com',
        timeout: 10
    },{
        priority: 20,
        name: 'redirect',
        url: 'https://raw.githubusercontent.com/june07/ghost-content/main/2024/07/gene-wilder-picture-9-1200x675.webp',
        referrer: 'nim',
        timeout: 5
    }
]
export { links, rules }
