module.exports = {
    title: 'Bukkit Development Note α',
    description: 'Bukkit Development Note Alpha is a guide about how to develope a plugin with BukkitAPI.',

    base: '/',

    head: [
        // add jquert and fancybox
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
    ],

    themeConfig: {
        sidebarDepth: 2,
        nav: [
            { text: '首页', link: '/home' },
            { text: '贡献', link: '/contribute' },
            { text: '赞助', link: '/donate' },
            { text: 'GitHub仓库', link: 'https://github.com/BakaRinya/BukkitDevelopmentNoteAlpha' }
        ],
        sidebar: [
            ["/home.md","欢迎"],
            {
                title: "Java基础",
                collapsable: false,
                children: [
                    {
                        title: "语言基础",
                        collapsable: true,
                        children: [
                            ["/java_basic/1-1.md","认识Java和面向对象"],
                            ["/java_basic/1-2.md","编写一个Java程序"],
                            ["/java_basic/1-3.md","流程控制结构"],
                            ["/java_basic/1-4.md","关键字、类与方法"],
                            ["/java_basic/1-5.md","面向对象特征"],
                            ["/java_basic/1-6.md","常用数据类型介绍"],
                            ["/java_basic/1-7.md","异常处理"]
                        ]
                    },
                    {
                        title: "开发基础",
                        children: [
                            ["/java_basic/2-0.md","前言"],
                            {
                                title: "常见IDE的使用",
                                children: [
                                    ["/java_basic/2-1-0.md", "关于IDE"],
                                    ["/java_basic/2-1-1.md", "Eclipse"],
                                    ["/java_basic/2-1-2.md", "IDEA"],
                                    ["/java_basic/2-1-3.md", "NetBeans"]
                                ]
                            },
                            ["/java_basic/2-2.md","Maven的使用"],
                            ["/java_basic/2-3.md","输入输出流"],
                            {
                                title: "线程",
                                children: [
                                    ["/java_basic/2-4-1.md","线程简介"],
                                    ["/java_basic/2-4-2.md","Thread与Runnable"],
                                    ["/java_basic/2-4-3.md","线程安全"]
                                ]
                            },
                            ["/java_basic/2-5.md","枚举量与注解"]
                        ]
                    },
                    {
                        title: "开发进阶",
                        children:[
                            ["/java_basic/3-0.md","前言"],
                            ["/java_basic/3-1.md","JDBC简单使用"],
                            ["/java_basic/3-2.md","反射的简单使用"],
                            ["/java_basic/3-3.md","Lambda的简单使用"]
                        ]
                    }
                ]
            },{
                title: "BukkitAPI插件开发",
                collapsable: false,
                children: [
                    ["/bukkit/0-1.md","开始"],
                    ["/bukkit/0-2.md","JavaDoc的使用"],
                    ["/bukkit/0-3.md","坑"],
                    {
                        title: "基本内容",
                        children:[
                            ["/bukkit/1-0.md","最简单的插件"],
                            ["/bukkit/1-1.md","BukkitAPI对象概览"],
                            ["/bukkit/1-2.md","事件"],
                            ["/bukkit/1-3.md","指令"],
                            ["/bukkit/1-4.md","配置API"],
                            ["/bukkit/1-5.md","事件"],
                        ]
                    }, {
                        title: "常见操作",
                        collapsable: true,
                        children:[
                            ["/bukkit/2-1.md","服务器配置相关"],
                            ["/bukkit/2-2.md","药水相关"],
                            ["/bukkit/2-3.md","血量值相关"],
                            ["/bukkit/2-4.md","破坏相关"],
                            ["/bukkit/2-5.md","常见功能方块相关"],
                            ["/bukkit/2-6.md","BOSS Bar相关"],
                            ["/bukkit/2-7.md","常见生物相关"],
                            ["/bukkit/2-8.md","世界与地图操作相关"],
                            ["/bukkit/2-9.md","定时与倒计时"],
                            ["/bukkit/2-10.md","权限与安全相关"]
                        ]
                    }, {
                        title: "进阶功能",
                        children:[
                            ["/bukkit/3-1.md","游戏GUI的利用"],
                            ["/bukkit/3-2.md","自定义事件"],
                            ["/bukkit/3-3.md","自定义合成表"],
                            ["/bukkit/3-4.md","粒子效果及音效"],
                            ["/bukkit/3-5.md","世界生成器"],
                            {
                                title: "反射操作",
                                children:[
                                    ["/bukkit/3-6-1.md","NMS与OBC"],
                                    ["/bukkit/3-6-2.md","Title的发送"],
                                    ["/bukkit/3-6-3.md","发送数据包"],
                                    ["/bukkit/3-6-4.md","NBT操作"]
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
