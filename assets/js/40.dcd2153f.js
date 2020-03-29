(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{304:function(a,t,s){"use strict";s.r(t);var e=s(28),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"编写一个java程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写一个java程序"}},[a._v("#")]),a._v(" 编写一个Java程序")]),a._v(" "),s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),s("h3",{attrs:{id:"查看电脑系统位数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看电脑系统位数"}},[a._v("#")]),a._v(" 查看电脑系统位数")]),a._v(" "),s("p",[a._v("电脑里的操作系统也有位数之分. 在准备开发环境之前需要认清自己电脑的操作系统位数.")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://miao.su/images/2018/07/31/p15fcf9.png",rel:"external nofollow"}},[s("img",{attrs:{src:"https://miao.su/images/2018/07/31/p15fcf9.png",alt:""}})])]),a._v(" "),s("h3",{attrs:{id:"配置jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置jdk"}},[a._v("#")]),a._v(" 配置JDK")]),a._v(" "),s("p",[a._v("JDK是Java应用开发工具包. 全称为Java Development Kit."),s("br"),a._v("\n为了开发Java应用, 我们需要安装JDK."),s("br"),a._v("\n在官方给我们的JDK安装包中, 还会安装JRE, JRE是不带开发工具包的运行环境, 一般玩家装的都是JRE.")]),a._v(" "),s("p",[a._v("你可以在网上找到 JDK8 的安装包, 下面这是官网下载地址(下载时需要登录账号并且速度慢):"),s("br"),a._v("\nhttp://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html")]),a._v(" "),s("p",[a._v("下载完毕后, 右键用管理员模式打开(XP直接双击), 进行安装.")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://miao.su/images/2018/07/31/p4a4d3c.png",rel:"external nofollow"}},[s("img",{attrs:{src:"https://miao.su/images/2018/07/31/p4a4d3c.png",alt:""}})])]),a._v(" "),s("h3",{attrs:{id:"配置ide-eclipse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置ide-eclipse"}},[a._v("#")]),a._v(" 配置IDE(Eclipse)")]),a._v(" "),s("p",[a._v("打开下面的链接:\nhttp://www.eclipse.org/downloads/packages/")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://miao.su/images/2018/07/31/p3c1c5b.png",rel:"external nofollow"}},[s("img",{attrs:{src:"https://miao.su/images/2018/07/31/p3c1c5b.png",alt:""}})])]),a._v(" "),s("p",[a._v("下载完毕后, 双击打开, 解压缩出来.")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://miao.su/images/2018/07/31/p5e12c6.png",rel:"external nofollow"}},[s("img",{attrs:{src:"https://miao.su/images/2018/07/31/p5e12c6.png",alt:""}})])]),a._v(" "),s("p",[a._v("解压缩完毕后, 即可双击"),s("code",[a._v("eclipse.exe")]),a._v("文件打开Eclipse."),s("br"),a._v("\n在接下来的内容中, 将使用Eclipse作为IDE进行开发.")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://miao.su/images/2018/07/31/p6c53ce.png",rel:"external nofollow"}},[s("img",{attrs:{src:"https://miao.su/images/2018/07/31/p6c53ce.png",alt:""}})])]),a._v(" "),s("p",[a._v("您还可以参考网络教程将Eclipse配置为中文版. 本文中将继续使用英文版.")]),a._v(" "),s("h2",{attrs:{id:"了解ide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#了解ide"}},[a._v("#")]),a._v(" 了解IDE")]),a._v(" "),s("p",[a._v("如果你购买了其他Java书籍, 你可能会认识到可以在命令行用"),s("code",[a._v("java")]),a._v("和"),s("code",[a._v("javac")]),a._v("指令制作Java应用.")]),a._v(" "),s("p",[a._v("事实上这是一个可行的方法, 你完全可以借助记事本和这两个指令制作出任何Java应用."),s("br"),a._v("\n但这是不可行的, 因为这样你写错了代码没有提示, 并且难以调试出BUG, 编写大型项目你更是会吃大亏.")]),a._v(" "),s("p",[a._v("IDE为我们提供了方便的Java开发工具等, 我们可以在IDE里轻松完成开发.")]),a._v(" "),s("h2",{attrs:{id:"使用eclipse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用eclipse"}},[a._v("#")]),a._v(" 使用Eclipse")]),a._v(" "),s("p",[s("em",[a._v("下面的内容如果有不明白的地方可以先照做, 在后面的内容中找到答案.")])]),a._v(" "),s("p",[a._v("打开Eclipse.")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://miao.su/images/2018/07/31/p9a9505.png",rel:"external nofollow"}},[s("img",{attrs:{src:"https://miao.su/images/2018/07/31/p9a9505.png",alt:""}})])]),a._v(" "),s("p",[a._v("让我们创建一个类!")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://miao.su/images/2018/07/31/p10b35dd.png",rel:"external nofollow"}},[s("img",{attrs:{src:"https://miao.su/images/2018/07/31/p10b35dd.png",alt:""}})])]),a._v(" "),s("p",[a._v("双击HelloWorldApp.java后, 在输入区域内编写代码即可.")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://miao.su/images/2018/07/31/p11f0537.png",rel:"external nofollow"}},[s("img",{attrs:{src:"https://miao.su/images/2018/07/31/p11f0537.png",alt:""}})])]),a._v(" "),s("p",[a._v("在上面的图中可以发现, 在IDE中写代码, IDE会给我们自动提示, 可以起到很好的引导作用.")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorldApp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("编写完毕后, 保存("),s("strong",[a._v("记住保存的快捷键是Ctrl+S, 非常常用")]),a._v(")后即可运行.")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://miao.su/images/2018/07/31/p12c4891.png",rel:"external nofollow"}},[s("img",{attrs:{src:"https://miao.su/images/2018/07/31/p12c4891.png",alt:""}})])]),a._v(" "),s("p",[a._v("点击这个按钮后, 即可发现程序输出字符串"),s("code",[a._v("Hello World!")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://miao.su/images/2018/07/31/p136e0ba.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包"}},[a._v("#")]),a._v(" 包")]),a._v(" "),s("h3",{attrs:{id:"包的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包的作用"}},[a._v("#")]),a._v(" 包的作用")]),a._v(" "),s("p",[a._v("我们如果想创建一个类叫做"),s("code",[a._v("StringBuffer")]),a._v(", 你会发现一个问题, Java给我们提供的API中也有个类叫做"),s("code",[a._v("StringBuffer")]),a._v("."),s("br"),a._v("\n这样就会造成一个问题, 如果JVM同时运行了两个程序, 这两个程序都有同一个名称的类, 这不就冲突了吗?")]),a._v(" "),s("p",[a._v("实际上不会, 因为这两个类的名称不一样?"),s("br"),a._v("\n为什么不一样? 因为包名不一样!")]),a._v(" "),s("p",[a._v("包(Package)就是用来解决这样的类名冲突问题的."),s("br"),a._v("\n你应该很容易理解, 假如你的硬盘里有两个文件名一样的文件, 怎么才能存起来?"),s("br"),a._v("\n很简单, 把它们放在不同的文件夹里不就可以了.")]),a._v(" "),s("h3",{attrs:{id:"创建一个包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建一个包"}},[a._v("#")]),a._v(" 创建一个包")]),a._v(" "),s("p",[a._v("我们刚才创建的那个类是没有包名的. 现在让我们创建一个有包名的类, 在Eclipse中应当这样操作:")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://i.loli.net/2020/03/29/hkK9jiAE27HCvoa.jpg",rel:"external nofollow"}},[s("img",{attrs:{src:"https://i.loli.net/2020/03/29/hkK9jiAE27HCvoa.jpg",alt:""}})])]),a._v(" "),s("p",[a._v("注意, 包名应该是由小写英文字母和英文句号组合而成的, 比如这样:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("test.package.demo\ntryjava.helloworld\n")])])]),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://i.loli.net/2020/03/29/253hduHT6FANEk8.jpg",rel:"external nofollow"}},[s("img",{attrs:{src:"https://i.loli.net/2020/03/29/253hduHT6FANEk8.jpg",alt:""}})])]),a._v(" "),s("p",[a._v("我们暂且不管上面的代码究竟是什么意思, 我们可以发现, 我们创建的三个"),s("code",[a._v("TestClass")]),a._v("类使用起来互不冲突."),s("br"),a._v("\n请注意, 如果你创建好了一个包, 右击这个包, 创建一个类, 你会发现IDE会自动在类的第一行加上"),s("code",[a._v("package")]),a._v("代码, 代表这个类的包名."),s("br"),a._v("\n一个完整的类名应该是"),s("code",[a._v("包名.类名")]),a._v(", 比如"),s("code",[a._v("tryjava.demo.two.TestClass")]),a._v("类.")]),a._v(" "),s("h3",{attrs:{id:"包的层级关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包的层级关系"}},[a._v("#")]),a._v(" 包的层级关系")]),a._v(" "),s("p",[a._v("类是有父子的继承关系的, 包也有."),s("br"),a._v("\n你可以认为英文句号代表一个斜线, 其实"),s("code",[a._v("tryjava.demo.one")]),a._v("可以理解成"),s("code",[a._v("tryjava")]),a._v("文件夹里有个"),s("code",[a._v("demo")]),a._v("文件夹, "),s("code",[a._v("demo")]),a._v("文件夹里有个"),s("code",[a._v("one")]),a._v("文件夹.")]),a._v(" "),s("p",[a._v("这样你就很容易理解, 下面的这两行包名, 第二行的包是第一行包的一个子包.")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("testjava.demo.one\ntestjava.demo.one.three\n")])])]),s("p",[a._v("要注意的是, "),s("strong",[a._v("我不能说"),s("code",[a._v("testjava.demo.one.three")]),a._v("包里的类也在"),s("code",[a._v("testjava.demo.one")]),a._v("包内")]),a._v(", 这与类不一样, 在哪个包里就是在哪个包里.")]),a._v(" "),s("h3",{attrs:{id:"省略包名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#省略包名"}},[a._v("#")]),a._v(" 省略包名")]),a._v(" "),s("p",[a._v("有时候在使用其他类时不一定要写它的完整类名, 你可以只写它的名字, 下面是个例子:")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://i.loli.net/2020/03/29/jJM2i6DbA1awZNT.jpg",rel:"external nofollow"}},[s("img",{attrs:{src:"https://i.loli.net/2020/03/29/jJM2i6DbA1awZNT.jpg",alt:""}})])]),a._v(" "),s("p",[a._v("你会发现在使用"),s("code",[a._v("TestClassTwo")]),a._v("这个类时, 我并没有写它的包名."),s("br"),a._v("\n这是因为"),s("code",[a._v("TestClassTwo")]),a._v("这个类与我们当前编写的类在同一个包内. "),s("strong",[a._v("只要在一个包内就可以省略掉包名.")]),s("br"),a._v("\n这里的"),s("code",[a._v("new tryjava.demo.two.TestClass();")]),a._v("没有省略包名, 因为"),s("code",[a._v("new TestClass();")]),a._v("指的就是这个类自己了, 而不是"),s("code",[a._v("tryjava.demo.two.TestClass")]),a._v("类.")]),a._v(" "),s("p",[a._v("也许你注意到了, "),s("code",[a._v("new TestClassThree();")]),a._v("这行代码有一个红色波浪线, 这代表我们的这行代码是错误的, 这些问题必须纠正才可以. 你之后的开发中还会看到黄色的波浪线, 黄色代表警告, 意思是这样写不太好, 但是程序其实也能运行.")]),a._v(" "),s("p",[a._v("在Eclipse中, 我们把鼠标放在画有下划线的代码上, 你会发现弹出了这样的黄色窗口:")]),a._v(" "),s("p",[s("a",{attrs:{"data-fancybox":"",href:"https://i.loli.net/2020/03/29/Q9lB7FbasKzyjZ6.jpg",rel:"external nofollow"}},[s("img",{attrs:{src:"https://i.loli.net/2020/03/29/Q9lB7FbasKzyjZ6.jpg",alt:""}})])]),a._v(" "),s("p",[a._v("我们可以在这里看到我们错在了哪里."),s("br"),a._v("\n这里Eclipse告诉我们"),s("code",[a._v("TestClassThree cannot be resolved to a type")]),a._v(", 意思是这并不是一个确切的类型, 说明我们还没有定义这个类."),s("br"),a._v("\n确实是这样, 我们提到只有同一个包内有这个类才可以省略掉包名, 而"),s("code",[a._v("TestClassThree")]),a._v("并不在与"),s("code",[a._v("TestClass")]),a._v("类一样的包"),s("code",[a._v("tryjava.demo.one")]),a._v("内, 所以包名是不可以省略的, 必须要把"),s("code",[a._v("tryjava.demo.one.three.")]),a._v("加上才可以.")]),a._v(" "),s("p",[s("strong",[a._v("其实, 如果这个类名称不会引起重名问题, 你可以直接使用"),s("code",[a._v("import")]),a._v("语句把想使用的类的包引入, 即可省略这个包名了.")]),s("br"),a._v("\n比如我写了"),s("code",[a._v("import tryjava.demo.one.three;")]),a._v("后, 以后这个包内的类我可以随便用, 不用写完整的类名了.")]),a._v(" "),s("p",[a._v("Eclipse已经帮我们发现了这个问题, 其实在开发过程中, 我们几乎不写"),s("code",[a._v("import")]),a._v(", 都是IDE补全的."),s("br"),a._v("\nEclipse的黄框中已经给我们了一键补全功能, 点击"),s("code",[a._v("Import TestClassThree(tryjava.demo.one.three)")]),a._v("即可补全该语句.")]),a._v(" "),s("p",[a._v("现在代码变成了这样:")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("tryjava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("one")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("tryjava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("one"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("three")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TestClassThree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TestClass")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" tryjava"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("two"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TestClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TestClassTwo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TestClassThree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("一切正常.")]),a._v(" "),s("p",[s("strong",[a._v("以上我们已经讲述了Eclipse的具体使用方式, 在今后的教程中将直接放代码, 不会大量出现截图了.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);