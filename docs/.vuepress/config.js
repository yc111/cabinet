module.exports = {
    title: 'Cabinet',
    head: [
        ['link', { rel: 'icon', type: "image/vnd.microsoft.icon", href: `./favicon.ico` }]
     ],
    base: '/cabinet/',
    description: "Champyin's Cabinet",
    themeConfig: {
        nav: [
            {text: '工具',link: 'tools'},
            {text: '关于', link: 'about'}
        ],
        lastUpdated: '上一次更新：',
        smoothScroll: true
    }
}