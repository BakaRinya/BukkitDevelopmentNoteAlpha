(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{263:function(a,t,e){"use strict";e.r(t);var s=e(28),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"javadoc的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javadoc的使用"}},[a._v("#")]),a._v(" JavaDoc的使用")]),a._v(" "),e("h2",{attrs:{id:"了解javadoc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解javadoc"}},[a._v("#")]),a._v(" 了解JavaDoc")]),a._v(" "),e("p",[a._v("在之前我张口就会告诉你一些用法, 例如"),e("code",[a._v("String")]),a._v("类里有"),e("code",[a._v("replace")]),a._v("方法, 这个方法是怎么用的, 我是怎么知道的呢? 我怎么保证我所讲的内容的正确性?"),e("br"),a._v("\n很简单, 我讲的用法其实都是查Java官方的JavaDoc查出来的.")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",href:"https://i.loli.net/2020/04/03/swIQ6gZFenBfJr4.jpg",rel:"external nofollow"}},[e("img",{attrs:{src:"https://i.loli.net/2020/04/03/swIQ6gZFenBfJr4.jpg",alt:"29.jpg"}})])]),a._v(" "),e("p",[a._v("BukkitAPI也有其JavaDoc可以查阅. 我们可以通过JavaDoc查询到BukkitAPI都有哪些API, 以及使用方法.")]),a._v(" "),e("p",[a._v("最新版本JavaDoc网址: https://hub.spigotmc.org/javadocs/spigot/index.html?overview-summary.html"),e("br"),a._v("\n旧版本JavaDoc网址(1.7.10): http://jd.bukkit.org/")]),a._v(" "),e("p",[a._v("国内有一群热爱开发的人做出了中文JavaDoc, 开发时可以用以参考."),e("br"),a._v("\n最新版本中文JavaDoc网址: https://bukkit.windit.net/javadoc/"),e("br"),a._v("\n他们的GitHub地址: https://github.com/BukkitAPI-Translation-Group/Chinese_BukkitAPI")]),a._v(" "),e("p",[e("strong",[a._v("JavaDoc分为左右两个大部分, 左侧上方部分为所有的包, 左侧下方部分为所有的类, 右侧即为你选择的内容的详细信息.")]),a._v(" 使用时操作基本方法如下:")]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",href:"https://i.loli.net/2020/04/02/2WqLTHbGrVeoEQa.jpg",rel:"external nofollow"}},[e("img",{attrs:{src:"https://i.loli.net/2020/04/02/2WqLTHbGrVeoEQa.jpg",alt:""}})])]),a._v(" "),e("h2",{attrs:{id:"我怎么知道该找哪个类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我怎么知道该找哪个类"}},[a._v("#")]),a._v(" 我怎么知道该找哪个类")]),a._v(" "),e("p",[a._v("你可能纳闷, 比如我想知道玩家是哪个类代表的, 应该怎么查?")]),a._v(" "),e("p",[a._v("第一种方法就是在左侧所有的类中找, 看看哪个类的名字可以翻译成“玩家”之类的意思, 说不定能找到."),e("br"),a._v("\n第二章方法就是直接问别人, 别人踩完坑后告诉你.")]),a._v(" "),e("h2",{attrs:{id:"寻找我们想要的信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#寻找我们想要的信息"}},[a._v("#")]),a._v(" 寻找我们想要的信息")]),a._v(" "),e("blockquote",[e("p",[a._v("例: 现在我们有了一个"),e("code",[a._v("Player")]),a._v("对象, 如何向这个"),e("code",[a._v("Player")]),a._v("对象对应玩家发送一个消息"),e("code",[a._v("Hello guy!")]),a._v("?")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Player")]),a._v(" p "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 魔法"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//这是我们现在获得的一个Player对象")]),a._v("\n")])])])]),a._v(" "),e("h3",{attrs:{id:"利用javadoc找到想要的信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#利用javadoc找到想要的信息"}},[a._v("#")]),a._v(" 利用JavaDoc找到想要的信息")]),a._v(" "),e("p",[a._v("对于我们不知道的东西, 我们应该查看JavaDoc. 这里我们想查询"),e("code",[a._v("Player")]),a._v("类里怎样给玩家发信息, 按照上面的方法打开Player类的详细信息. 利用浏览器的搜索功能"),e("code",[a._v("Ctrl+F")]),a._v(", 你可以试着搜一些与“信息”有关的英文词汇, 比如"),e("code",[a._v("message")]),a._v("等."),e("br"),a._v("\n我们可以发现, JavaDoc中说"),e("code",[a._v("Player")]),a._v("类从"),e("code",[a._v("CommandSender")]),a._v("类里继承来了"),e("code",[a._v("sendMessage")]),a._v("方法, 很可能符合我们的需求.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/02/22/sTmVBCDtk9vJF6Y.jpg",alt:""}})]),a._v(" "),e("p",[a._v("点击"),e("code",[a._v("sendMessage")]),a._v("可以跳转到"),e("code",[a._v("CommandSender")]),a._v("类中对"),e("code",[a._v("sendMessage")]),a._v("方法描述的地方, 我们可以查看关于"),e("code",[a._v("sendMessage")]),a._v("方法有关的内容.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/02/22/z5PsRjcfMtQhVyG.jpg",alt:""}})]),a._v(" "),e("p",[a._v("通过描述, 我们可以得知, "),e("code",[a._v("sendMessage")]),a._v("方法的作用是"),e("code",[a._v("Sends this sender a message")]),a._v(". 这样一想, "),e("code",[a._v("Player")]),a._v("继承了"),e("code",[a._v("CommandSender")]),a._v(", 我们想给玩家发信息就是给玩家这个"),e("code",[a._v("Sender")]),a._v("发信息, 这个方法就是我们要找的东西了！"),e("br"),a._v("\n那么我们就应该这样调用这个方法:")]),a._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[a._v("p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sendMessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello guys!"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("h3",{attrs:{id:"看看别人是怎么做的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#看看别人是怎么做的"}},[a._v("#")]),a._v(" 看看别人是怎么做的")]),a._v(" "),e("p",[a._v("很多插件都有向玩家发信息的功能. 如果一个东西自己实在找不到了, 那就看看别人是怎么弄的.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/02/22/Emv5dWeKg1L4SM9.jpg",alt:""}})]),a._v(" "),e("p",[a._v("先随便找一个插件, 看清楚是"),e("code",[a._v("Spigot")]),a._v("插件, 并且插件介绍帖里提到它会定时给玩家发一个消息叫"),e("code",[a._v("[系统] 您已进入挂机模式, 再次移动可取消挂机状态")]),a._v(". 这个发送功能恰是我们需要的. 我们可以下载下来这个插件, 用反编译软件(例如:JD-GUI)打开它.")]),a._v(" "),e("p",[a._v("可能因为插件太简单, 作者并没有给这个插件混淆, 我们用JD-GUI可以正常反编译出源码, 顺着这个提示语一翻, 可以轻松找到这个发送信息功能的实现方式, 它用的正是"),e("code",[a._v("p.sendMessage")]),a._v(":")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.loli.net/2020/02/22/Wmi56rxIPSkLJaN.jpg",alt:""}})])])}),[],!1,null,null,null);t.default=v.exports}}]);