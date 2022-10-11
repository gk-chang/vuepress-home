module.exports = {
    title: '浦江桥隧',  //标题
    keywords: '规范与工法',
    description: '浦江桥隧公司规范与工法',
    repo: 'https://github.com/',  //仓库地址
    base: '/vuepress-home/',  // 配合部署项目
    head: [
        ['link', { rel: 'png', href: '/img/ia_100000074.png' }] //网站标签栏logo
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {  //主题配置
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            }
        },
        logo: '/img/ia_100000074.png',  // 导航栏左侧logo
        nav: [  //导航栏
            { text: '首页', link: '/' },
            { text: '标准', link: '/code/' },
            { text: '图片', link: '/picture/' },
            { text: '视频', link: '/video/' },
            { text: 'CSDN', link: 'https://blog.csdn.net/' }
        ],
        sidebar: 'auto',
        displayAllHeaders: true, // 默认值：false
    }
}

/*
以下例举俩个参数的描述如下：

title
类型: string
默认值: undefined
网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。

#description
类型: string
默认值: undefined
网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。

注意：我的图片路径是在本地的doc/.vuepress/public/img
你在引入图片直接 /img/xxxx.png ，因为它会默认把public目录当做图片资源的根路径
*/
