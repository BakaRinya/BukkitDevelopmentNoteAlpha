(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{303:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),s("h2",{attrs:{id:"了解事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#了解事件"}},[t._v("#")]),t._v(" 了解事件")]),t._v(" "),s("h3",{attrs:{id:"什么是事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是事件"}},[t._v("#")]),t._v(" 什么是事件")]),t._v(" "),s("p",[t._v("事件是服务器里发生的事."),s("br"),t._v("\n例如, 天气的变化, 玩家的移动. 玩家把树打掉, 又捡起了掉落地上的原木. 这些都是事件.")]),t._v(" "),s("p",[t._v("事件分为可控事件和不可控事件. 其最大区别在于能不能取消("),s("em",[t._v("也就是能不能setCancelled")]),t._v(")."),s("br"),t._v("\n不难理解, 玩家如果退出服务器, 这不能被取消, 它是不可控事件. 玩家的移动可以被取消, 它是可控事件.")]),t._v(" "),s("h3",{attrs:{id:"事件有什么用？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件有什么用？"}},[t._v("#")]),t._v(" 事件有什么用？")]),t._v(" "),s("blockquote",[s("p",[t._v("想象自己正在做一款登录插件, 登录插件是怎么制作出来的呢?"),s("br"),t._v(" "),s("em",[t._v("本章下方举例将延续这个题设展开.")])])]),t._v(" "),s("p",[t._v("利用BukkitAPI, 你可以"),s("strong",[t._v("监听事件")]),t._v(", 事件触发时执行某些代码."),s("br"),t._v("\n例如, 你可以监听玩家登录服务器, 玩家登录服务器后你可以执行某些代码.")]),t._v(" "),s("p",[t._v("那么, 如果你想写登录插件, 你需要监听玩家登录服务器的事件."),s("br"),t._v("\n玩家进入服务器以后, 记录存储起来他的用户名. 等待玩家输入指令进行登录, 登录完毕以后去掉他的用户名."),s("br"),t._v("\n然后再监听其他的各种事件(比如监听方块破坏事件), 如果这些事件被触发, 判断是哪个玩家触发的, 看看玩家用户名有没有存储起来, 如果有, 那么他没有登录, 那就把这个事件取消掉.")]),t._v(" "),s("p",[t._v("通过这样的例子可以发现, 事件是一个插件最重要的组成部分!")]),t._v(" "),s("h2",{attrs:{id:"监听事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听事件"}},[t._v("#")]),t._v(" 监听事件")]),t._v(" "),s("p",[t._v("上面我们提到可以实现事件触发时执行某些代码. 实现这个目的的方法就是写一个监听器."),s("br"),t._v(" "),s("strong",[t._v("监听器实质上是一个实现了"),s("code",[t._v("Listener")]),t._v("的类, 其中包含一些带有"),s("code",[t._v("@EventHandler")]),t._v("注解的方法.")])]),t._v(" "),s("p",[t._v("我们继续以上面的登录插件作为展开, 写一个“玩家不登录就不允许移动”的插件出来."),s("br"),t._v("\n因为截止到现在还没有说怎么注册命令, 这里我们设定玩家“只要右键空气就可以登录”."),s("br"),t._v(" "),s("em",[t._v("这里我们为了偷懒, 下面把主类直接实现"),s("code",[t._v("Listener")]),t._v("当做监听器用.")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorld")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaPlugin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Listener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" playerNameList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这是没登录玩家列表")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onEnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bukkit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPluginManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里HelloWorld类是监听器, 将当前HelloWorld对象注册监听器  ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onDisable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*功能一：刚进入服务器的玩家都记录到“小本本”playerNameList上，他们是没登录的玩家*/")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EventHandler")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlayerJoin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerJoinEvent")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//玩家登录服务器就会调用这个方法")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("playerNameList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//先判断这个玩家的名是不是记过了")]),t._v("\n\t\t\tplayerNameList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//玩家一登录就给他记上名, 代表他没登录")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*功能二：没登录的玩家不让移动*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EventHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这个注解告诉Bukkit这个方法正在监听某个事件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlayerMove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerMoveEvent")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//玩家移动时Bukkit就会调用这个方法")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("playerNameList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("contains")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPlayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t    e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCancelled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断玩家是不是没登录, 是则取消事件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*功能三：右击空气登录（本质就是从playerNameList把他删了）*/")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EventHandler")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlayerInteract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerInteractEvent")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//玩家交互时会调用这个方法(这个下面会解释)")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RIGHT_CLICK_AIR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断是不是右键空气")]),t._v("\n\t\t\tplayerNameList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPlayerName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("从上面的代码我们可以看出每一个事件都对应着一个"),s("code",[t._v("XXXEvent")]),t._v("对象. 事件类都以"),s("code",[t._v("Event")]),t._v("作为名称的结尾."),s("br"),t._v(" "),s("em",[t._v("稍后会详细讲述如何在JavaDoc找到需要的事件")]),t._v(".")]),t._v(" "),s("p",[s("strong",[t._v("监听器类里由若干个带"),s("code",[t._v("@EventHandler")]),t._v("注解, 参数仅为一个"),s("code",[t._v("XXXEvent")]),t._v("的方法. 这些事件触发后会触发这些方法, 这就是事件监听的本质.")]),s("br"),t._v("\n要特别注意, "),s("strong",[t._v("监听器中带有"),s("code",[t._v("@EventHandler")]),t._v("的方法一个只能监听某一个事件, 而不能监听多个事件!")]),t._v(" 换而言之, 这也就意味着, "),s("strong",[t._v("你不能填写两个参数, 实现一个方法同时监听两个事件的目的!")])]),t._v(" "),s("p",[t._v("这里我们用到了玩家交互事件. 这个事件抽象不易理解."),s("br"),t._v("\n确切的来说, "),s("code",[t._v("PlayerInteractEvent")]),t._v("指的是玩家与方块交互, 交互指的是左右键方块的几乎一切操作. 具体的解释完全可以在JavaDoc中了解到."),s("br"),t._v("\n如果你曾经用过领地插件"),s("code",[t._v("Residence")]),t._v(", 你肯定对某个领地的权限"),s("code",[t._v("use")]),t._v("印象很深, 这个"),s("code",[t._v("use")]),t._v("权限与"),s("code",[t._v("PlayerInteractEvent")]),t._v("事件差不多, 可以近似认为"),s("code",[t._v("Residence")]),t._v("插件的"),s("code",[t._v("use")]),t._v("权限就是通过监听"),s("code",[t._v("PlayerInteractEvent")]),t._v("写出来的.")]),t._v(" "),s("p",[t._v("要注意, "),s("strong",[t._v("监听器必须要注册才能算生效")]),t._v("!"),s("br"),t._v("\n我们的监听器里的方法都能监听到对应的事件的原因是, 在"),s("code",[t._v("onEnable")]),t._v("方法中, 我们写了这样的代码:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bukkit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPluginManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这行代码注册了HelloWorld类为监听器, 如果没有这行代码, 下面所有带@EventHandler注解的方法都不会在事件触发时被调用！")]),t._v("\n")])])]),s("p",[s("em",[t._v("registerEvents方法的第一个参数是监听器，第二个参数是插件主类的实例. 在这里主类就是监听器. 具体你可以在后面了解到.")])]),t._v(" "),s("h2",{attrs:{id:"理解客户端与服务端的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解客户端与服务端的关系"}},[t._v("#")]),t._v(" 理解客户端与服务端的关系")]),t._v(" "),s("p",[t._v('如果你实际去使用上面的那个代码, 你可能会发现一个问题: 玩家移动在游戏里还可以移动, 但是一会儿会被服务器"弹回来".'),s("br"),t._v('\n这样确实是达到了取消玩家移动的目的, 但是, 为什么最终的效果不是"玩家一点都动不了"呢?')]),t._v(" "),s("p",[t._v("事实上, 我们无法在服务端取消玩家一点也不能移动."),s("br"),t._v("\n客户端移动玩家时, 会在客户端显示出移动后的样子, 然后才会传递给服务器玩家移动的信号, 服务端收到客户端的信号后, 服务器才会触发"),s("code",[t._v("PlayerMoveEvent")]),t._v("事件, 做出响应.")]),t._v(" "),s("p",[t._v('也就是说, 客户端与服务端之间, 客户端往往都是"先斩后奏"的. 客户端不管你服务端取不取消, 先那么显示出来再说.')]),t._v(" "),s("p",[s("em",[t._v("如果要是真的想实现让玩家在服务器的某个坐标一点也动不了, 也许需要发挥你的聪明才智了. 让玩家卡在一个透明方块里? 也许有更好的方案? 现在有人已经实现了!")]),s("br"),t._v(" "),s("em",[t._v("目前我们通常利用设置玩家移动速度的方法来让玩家无法移动!")])]),t._v(" "),s("h2",{attrs:{id:"查询我们想了解的事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询我们想了解的事件"}},[t._v("#")]),t._v(" 查询我们想了解的事件")]),t._v(" "),s("h3",{attrs:{id:"事件是怎么取名的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件是怎么取名的"}},[t._v("#")]),t._v(" 事件是怎么取名的")]),t._v(" "),s("p",[t._v("你可以发现, 玩家移动"),s("code",[t._v("PlayerMoveEvent")]),t._v("、玩家进入服务器"),s("code",[t._v("PlayerJoinEvent")]),t._v("事件都有明显的特征.")]),t._v(" "),s("ol",[s("li",[t._v("功能决定名称, 看了名称你就能大致明白它的功能.")]),t._v(" "),s("li",[t._v("都以"),s("code",[t._v("Event")]),t._v("作为结尾. 这也就说BukkitAPI中所有名字最后是"),s("code",[t._v("Event")]),t._v("的类都是事件类.")]),t._v(" "),s("li",[t._v("开头的第一个词决定作用范围. 例如上面两个类开头都是"),s("code",[t._v("Player")]),t._v(", 这两个类都是与玩家有关的事件类.")])]),t._v(" "),s("p",[t._v("所有的事件类都在"),s("code",[t._v("org.bukkit.event")]),t._v("包或其子包里.")]),t._v(" "),s("h3",{attrs:{id:"可取消事件与不可取消事件怎么判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可取消事件与不可取消事件怎么判断"}},[t._v("#")]),t._v(" 可取消事件与不可取消事件怎么判断")]),t._v(" "),s("p",[t._v("例如"),s("code",[t._v("PlayerMoveEvent")]),t._v("在JavaDoc中, 我们可以注意到这些内容:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerMoveEvent")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerEvent")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cancellable")]),t._v("\n")])])]),s("p",[s("code",[t._v("PlayerMoveEvent")]),t._v("事件实现了"),s("code",[t._v("Cancellable")]),t._v("接口."),s("br"),t._v(" "),s("code",[t._v("Cancellable")]),t._v("中定义了"),s("code",[t._v("setCancelled")]),t._v("方法和"),s("code",[t._v("isCancelled")]),t._v("方法."),s("br"),t._v("\n通过"),s("code",[t._v("setCancelled")]),t._v("方法, 你可以在事件触发时设置是否取消该事件. 例如, 如果监听玩家移动, 事件触发时使用"),s("code",[t._v("setCancelled")]),t._v("方法, 可以取消玩家移动."),s("br"),t._v(" "),s("code",[t._v("isCancelled")]),t._v("方法可以判断该事件是否被取消.")]),t._v(" "),s("p",[t._v("对于不可取消事件, 它们没有实现"),s("code",[t._v("Cancellable")]),t._v("接口, 因此它们无法被取消."),s("br"),t._v("\n就像玩家退出服务器, 你总不能像刀剑神域一样, 不让玩家退出服务器吧.")]),t._v(" "),s("p",[s("em",[t._v("值得注意的是, 如果玩家并没有改变他的X/Y/Z, 而只是利用鼠标转了一下身, 这也属于玩家移动, 仍会触发"),s("code",[t._v("PlayerMoveEvent")]),t._v("事件.")])]),t._v(" "),s("h3",{attrs:{id:"找到我们要找的事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找到我们要找的事件"}},[t._v("#")]),t._v(" 找到我们要找的事件")]),t._v(" "),s("p",[t._v("我们了解了如何监听事件, 那么我们想做到“不让玩家破坏方块”这个功能, 应该怎么做?"),s("br"),t._v("\n思考后可以发现, 我们需要监听“方块被破坏”这个事件！那破坏方块后触发什么事件? 你需要在JavaDoc中找才能找到！")]),t._v(" "),s("p",[t._v("分析: 破坏方块这个事件是一个与方块有关的事件. 打开JavaDoc你可以发现"),s("code",[t._v("BlockXXXXEvent")]),t._v("这类的类有许多."),s("br"),t._v("\n你也许会说, 玩家破坏方块为什么不是一个与玩家有关的事件呢？很有道理！你也可以在玩家事件中找找看有没有这样的事件.")]),t._v(" "),s("p",[t._v("JavaDoc左侧上方是所有的包, 点击"),s("code",[t._v("org.bukkit.event.block")]),t._v("就能在左侧下方看所有与方块有关的事件了."),s("br"),t._v("\n你可以轻松地发现, 在前几个的位置迅速就能看到"),s("code",[t._v("BlockBreakEvent")]),t._v(", 根据名字就能判断出, 这就是你想找的方块破坏事件, 打开后看到描述为"),s("code",[t._v("Called when a block is broken by a player.")]),t._v(", 很明显, 监听它就对了.")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EventHandler")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onBlockBreak")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlockBreakEvent")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\te"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCancelled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样我们就写出了想要的功能.")]),t._v(" "),s("h3",{attrs:{id:"并不是所有的事件都能监听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并不是所有的事件都能监听"}},[t._v("#")]),t._v(" 并不是所有的事件都能监听.")]),t._v(" "),s("p",[t._v("在查阅JavaDoc时你可能发现"),s("code",[t._v("PlayerEvent")]),t._v("、"),s("code",[t._v("BlockEvent")]),t._v("这种事件.这些都是不可以被监听的事件."),s("br"),t._v("\n你不可以通过监听"),s("code",[t._v("PlayerEvent")]),t._v("事件来达到一次性监听所有与玩家有关的事件的目的."),s("br"),t._v(" "),s("em",[t._v("它们不能被监听的原因是没有做HandlerList. 在这里不多说明, 后面讲述如何自己做一个自定义事件时你会明白.")])]),t._v(" "),s("p",[t._v("一般来说，如果事件名由两个词构成(例如"),s("code",[t._v("PlayerEvent")]),t._v(")都不能监听, 大多数事件都可以监听.")]),t._v(" "),s("p",[t._v("你可能好奇, 常见的登录插件都是把所有需要的玩家事件都写了"),s("code",[t._v("@EventHandler")]),t._v("注解方法一个个监听的？"),s("br"),t._v("\n答案是, 的确如此. 你要想写登录插件, 你就应该去监听许许多多事件, 累也没办法, 就得这样写.")]),t._v(" "),s("h2",{attrs:{id:"eventhandler注解的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eventhandler注解的参数"}},[t._v("#")]),t._v(" EventHandler注解的参数")]),t._v(" "),s("p",[t._v("##监听优先级\n想象一下, 如果有两个插件, 他们同时监听玩家移动. 其中一个插件判断后发现玩家没有充够450块钱, 于是它取消了这名玩家的移动. 但是另外一个插件判断后发现玩家非常帅, 于是它允许了这名玩家的移动."),s("br"),t._v("\n那么就会存在问题: 有一个插件"),s("code",[t._v("setCancelled(true)")]),t._v(", 而又有插件"),s("code",[t._v("setCancelled(false)")]),t._v(". 应该以谁为准?"),s("br"),t._v("\n那就要看监听优先级了!")]),t._v(" "),s("p",[t._v("下面是两个插件处理"),s("code",[t._v("PlayerMoveEvent")]),t._v("的部分:\nA插件:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A插件")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EventHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("priority"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventPriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LOWEST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlayerMove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerMoveEvent")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t    e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCancelled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("B插件:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// B插件")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EventHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("priority"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventPriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HIGHEST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlayerMove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerMoveEvent")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testB"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t    e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCancelled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在实际的运行中, 当玩家移动时你会发现, 控制台中先输出了"),s("code",[t._v("testA")]),t._v("后输出了"),s("code",[t._v("testB")]),t._v(", 玩家都在服务器内可以自如移动."),s("br"),t._v("\n这意味着A插件第一个响应了玩家移动, 然后B插件才相应的玩家移动."),s("br"),t._v(" "),s("code",[t._v("@EventHandler")]),t._v("注解有一个成员叫做"),s("code",[t._v("priority")]),t._v(", 给他设置对应的"),s("code",[t._v("EventPriority")]),t._v(", 即可设置监听优先级. 在上面的例子中, Bukkit会在所有的LOWEST级监听被调用完毕后, 再去调用HIGHEST级监听.")]),t._v(" "),s("p",[s("code",[t._v("EventPriority")]),t._v("提供了五种优先级, 按照被调用顺序,为:"),s("br"),t._v("\nLOWEST < LOW < NORMAL(如果你不设置, 默认就是它) < HIGH < HIGHEST < MONITOR ."),s("br"),t._v("\n其中, LOWEST最先被调用, 但对事件的影响最小. MONITOR最后被调用, 对事件的影响最大.")]),t._v(" "),s("h3",{attrs:{id:"ignorecancelled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ignorecancelled"}},[t._v("#")]),t._v(" ignoreCancelled")]),t._v(" "),s("p",[s("code",[t._v("@EventHandler")]),t._v("注解除了"),s("code",[t._v("priority")]),t._v("之外, 还有"),s("code",[t._v("ignoreCancelled")]),t._v(". 如果不设置, 它默认为false.")]),t._v(" "),s("p",[t._v("让我们回到上面的A插件与B插件的例子中. 我们把B插件的"),s("code",[t._v("onPlayerMove")]),t._v("改成这样:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// B插件")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EventHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("priority"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventPriority")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HIGHEST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ignoreCancelled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlayerMove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerMoveEvent")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testB"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t    e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCancelled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以发现, 后台只输出了"),s("code",[t._v("testA")]),t._v(", 玩家无法在服务器中移动. 这说明B插件的"),s("code",[t._v("onPlayerMove")]),t._v("没有被触发."),s("br"),t._v("\n如果有其他监听已经取消了该事件, 设置"),s("code",[t._v("ignoreCancelled")]),t._v("为"),s("code",[t._v("true")]),t._v("将可以忽略掉这个事件, 所以B插件的"),s("code",[t._v("onPlayerMove")]),t._v("方法没有被触发.")]),t._v(" "),s("h3",{attrs:{id:"监听器的注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听器的注册"}},[t._v("#")]),t._v(" 监听器的注册")]),t._v(" "),s("p",[t._v("可能你已经发现了, 在之前的代码中, 我们都会在"),s("code",[t._v("onEnable")]),t._v("方法中插入这样的语句:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bukkit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPluginManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])])]),s("p",[t._v("当时解释的是, "),s("code",[t._v("registerEvents")]),t._v("方法注册了该监听器."),s("br"),t._v("\n如果没有这样的注册语句, 那么Bukkit就不会在事件触发时调用监听器类的对应方法.")]),t._v(" "),s("p",[t._v("该方法的第一个参数是监听器, 第二个参数是插件主类的实例. 当时由于我们为了偷懒, 直接把主类实现了"),s("code",[t._v("Listener")]),t._v("作为监听器, 因此我们可以这样写."),s("br"),t._v("\n可我们不能写插件的时候把代码都堆在主类中. 这也就意味着, 我们可以把其他类实现"),s("code",[t._v("Listener")]),t._v(", 用同样的方式注册它, 这样我们就可以把监听事件部分的代码放在别的地方, 使插件代码更有条理性.")]),t._v(" "),s("p",[t._v("我们新创建一个类, 让它实现"),s("code",[t._v("Listener")]),t._v(", 再写对应的方法监听玩家移动, 就像这样:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoListener")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EventHandler")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPlayerMove")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerMoveEvent")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PLAYER MOVE!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("现在我们在主类的"),s("code",[t._v("onEnable")]),t._v("方法里, 就可以注册它了!")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bukkit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPluginManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n")])])]),s("h2",{attrs:{id:"常用事件简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用事件简介"}},[t._v("#")]),t._v(" 常用事件简介")]),t._v(" "),s("p",[t._v("这里可能罗列不会全面, 在我想到哪些“坑事件”后会列在这里.")]),t._v(" "),s("h3",{attrs:{id:"登录、进入服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录、进入服务器"}},[t._v("#")]),t._v(" 登录、进入服务器")]),t._v(" "),s("p",[t._v("BukkitAPI中与登录有关的常见的有: "),s("code",[t._v("PlayerLoginEvent")]),t._v(" "),s("code",[t._v("PlayerJoinEvent")]),t._v("."),s("br"),t._v("\n值得注意的是, 所有玩家进入服务器的事件都是不可取消事件.")]),t._v(" "),s("p",[t._v("在玩家尝试连接服务器时, 会触发"),s("code",[t._v("PlayerLoginEvent")]),t._v(", 玩家完全地进入服务器后, 会触发"),s("code",[t._v("PlayerJoinEvent")]),t._v("."),s("br"),t._v("\n在"),s("code",[t._v("PlayerLoginEvent")]),t._v("触发的时候, 你不可以操控玩家"),s("code",[t._v("Player")]),t._v("对象获取其背包等信息, 而仅可以获取UUID、玩家名和网络信息(IP等)等."),s("br"),t._v("\n*顺便一提, 玩家如果不在线, 你不可以通过BukkitAPI操控其背包.  *\n"),s("code",[t._v("PlayerJoinEvent")]),t._v("触发时, 服务器内将会出现玩家实体. 此时你可以当做玩家完全进入服务器, 对其自由操作.")]),t._v(" "),s("p",[t._v("打个比方, 你家有一扇防盗门, 有人想进入你家."),s("br"),t._v("\n首先他需要敲门, 在门外喊出自己的基本信息(名字等), 这是"),s("code",[t._v("PlayerLoginEvent")]),t._v("触发的时候. 如果你想从他背包里拿出东西, 不可以, 因为他在门外面."),s("br"),t._v("\n当你给他打开门, 他进了你家中站稳了以后, 这是"),s("code",[t._v("PlayerJoinEvent")]),t._v("触发的时候, 这时候不管你是想打他还是想拿走他的东西, 都可以.")]),t._v(" "),s("h3",{attrs:{id:"玩家移动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#玩家移动"}},[t._v("#")]),t._v(" 玩家移动")]),t._v(" "),s("p",[t._v("在上面我们已经提及过, 玩家移动是“先斩后奏”被触发的. 具体请见上文.")]),t._v(" "),s("h3",{attrs:{id:"玩家打开背包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#玩家打开背包"}},[t._v("#")]),t._v(" 玩家打开背包")]),t._v(" "),s("p",[t._v("也许你会看到"),s("code",[t._v("InventoryOpenEvent")]),t._v(". 根据描述你大概明白, 类似右击箱子后出现的那种带格子的界面被打开可以被监听."),s("br"),t._v("\n但是有一件事很重要: 玩家按E打开背包是没办法被监听的.")]),t._v(" "),s("p",[t._v("一般如果要实现禁止玩家打开背包, 其实最常规的做法就是开一个"),s("code",[t._v("BukkitRunnable")]),t._v(", 定时调用"),s("code",[t._v("p.closeInventory()")]),t._v("关闭玩家正在打开的背包实现的."),s("br"),t._v(" "),s("em",[t._v("这里不详细讲述具体如何操作, 感兴趣可以在QQ群中问一些有经验的开发者.")]),s("br"),t._v(" "),s("em",[t._v("后面会讲述Runnable, 也许看后你会明白如何操作.")])]),t._v(" "),s("p",[t._v("感兴趣可以看看这个帖子: https://www.mcbbs.net/thread-965760-1-1.html")])])}),[],!1,null,null,null);a.default=e.exports}}]);