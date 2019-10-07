module.exports = {
    title: 'Cabinet',
    head: [
        ['link', { rel: 'icon', type: "image/vnd.microsoft.icon", href: `./favicon.ico` }]
     ],
    description: "Champyin's Cabinet",
    themeConfig: {
        nav: [
            {text: '工具',link: 'tools/'},
            {text: '关于', link: 'about'},
            {text: '在线转换', link:'https://cloudconvert.com/'},
            {text: 'geojson',link: 'http://geojson.io/#map=2/20.0/0.0'},
            {text: 'babel', link: 'https://babeljs.cn'},
            {text: 'github徽标官网', link: 'https://shields.io/'},
            {text: '抽象语法树', link: 'https://astexplorer.net/'},
            {text: 'favoicon制作网站', link: 'https://tool.lu/favicon'}
        ],
        lastUpdated: '上一次更新：',
        smoothScroll: true
    }
}